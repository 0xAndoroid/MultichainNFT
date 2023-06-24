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
        Bridge bridge = new Bridge(
            0xCC737a94FecaeC165AbCf12dED095BB13F037685,
            0xF90cB82a76492614D07B82a7658917f3aC811Ac1,
            address(erc721)
        );
        erc721.setBridge(payable(address(bridge)));

        vm.stopBroadcast();
    }
}
