// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "../src/Bridge.sol";
import "../src/ERC721Multichain.sol";
import "forge-std/Script.sol";

contract Deploy is Script {
    function run() public {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);

        // Deploy ERC721Multichain
        ERC721Multichain erc721 = new ERC721Multichain();
        new Bridge(
            0x35231d4c2D8B8ADcB5617A638A0c4548684c7C70,
            0x56f52c0A1ddcD557285f7CBc782D3d83096CE1Cc,
            address(erc721)
        );

        vm.stopBroadcast();
    }
}
