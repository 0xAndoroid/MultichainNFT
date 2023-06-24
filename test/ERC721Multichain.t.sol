// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "forge-std/Test.sol";
import {MockMailbox} from "./MockMailbox.sol";
import {TestInterchainGasPaymaster} from "./TestIGP.sol";
import "../src/Bridge.sol";
import "../src/ERC721Multichain.sol";

contract ERC721Test is Test {
    uint32 constant originDomain = 1000;
    uint32 constant destinationDomain = 2000;

    MockMailbox originMailbox;
    MockMailbox destinationMailbox;
    TestInterchainGasPaymaster igp;
    
    ERC721Multichain originErc721;
    Bridge originBridge;
    ERC721Multichain destinationErc721;
    Bridge destinationBridge;

    function setUp() public {
        originMailbox = new MockMailbox(originDomain);
        destinationMailbox = new MockMailbox(destinationDomain);
        originMailbox.addRemoteMailbox(destinationDomain, destinationMailbox);
        destinationMailbox.addRemoteMailbox(originDomain, originMailbox);
        igp = new TestInterchainGasPaymaster();
        originErc721 = new ERC721Multichain();
        originBridge = new Bridge(address(originMailbox), address(igp), address(originErc721));
        destinationErc721 = new ERC721Multichain();
        destinationBridge = new Bridge(address(destinationMailbox), address(igp), address(destinationErc721));
        originBridge.setOtherChainAddr(address(destinationBridge));
        destinationBridge.setOtherChainAddr(address(originBridge));
        originErc721.setBridge(payable(address(originBridge)));
        destinationErc721.setBridge(payable(address(destinationBridge)));
    }

    function testFull() public {
        uint256 tokenId = 1;
        address recipient = address(0x123);
        originErc721.mint(recipient, tokenId);
        hoax(recipient, 100 ether);
        originErc721.approve(address(originBridge), tokenId);
        vm.prank(recipient);
        originErc721.bridgeToken{value: 1 ether}(destinationDomain, tokenId);

        destinationMailbox.processNextInboundMessage();
        
        
        assertEq(destinationErc721.balanceOf(recipient), 1);
        assertEq(destinationErc721.ownerOf(tokenId), recipient);
    }

}


