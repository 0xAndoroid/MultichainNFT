// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity >=0.8.0;

// ============ Internal Imports ============
import {IInterchainGasPaymaster} from "./IGP.sol";

contract TestInterchainGasPaymaster is IInterchainGasPaymaster {
    uint256 public constant gasPrice = 10;

    constructor() {}

    function quoteGasPayment(
        uint32,
        uint256 gasAmount
    ) public pure override returns (uint256) {
        return gasPrice * gasAmount;
    }

    function payForGas(
        bytes32 _messageId,
        uint32 _destinationDomain,
        uint256 _gasAmount,
        address _refundAddress
    ) external payable {
        uint256 gasPayment = quoteGasPayment(_destinationDomain, _gasAmount);
        require(msg.value >= gasPayment, "Insufficient payment");
        payable(_refundAddress).transfer(msg.value);
    }
}
