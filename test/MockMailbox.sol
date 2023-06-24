// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

interface IMessageRecipient {
  function handle(
    uint32 _origin,
    bytes32 _sender,
    bytes calldata _message
  ) external;
}

contract MockMailbox {
    // Domain of chain on which the contract is deployed
    uint32 public immutable domain;
    uint32 public immutable version = 0;

    uint256 public outboundNonce = 0;
    uint256 public inboundUnprocessedNonce = 0;
    uint256 public inboundProcessedNonce = 0;
    mapping(uint32 => MockMailbox) public remoteMailboxes;
    mapping(uint256 => Message) public inboundMessages;

    struct Message {
        uint32 origin;
        address sender;
        address recipient;
        bytes body;
    }

    constructor(uint32 _domain) {
        domain = _domain;
    }

    function addRemoteMailbox(uint32 _domain, MockMailbox _mailbox) external {
        remoteMailboxes[_domain] = _mailbox;
    }

    function dispatch(
        uint32 _destinationDomain,
        bytes32 _recipientAddress,
        bytes calldata _messageBody
    ) external returns (bytes32) {
        MockMailbox _destinationMailbox = remoteMailboxes[_destinationDomain];
        require(
            address(_destinationMailbox) != address(0),
            "Missing remote mailbox"
        );
        _destinationMailbox.addInboundMessage(
            domain,
            msg.sender,
            bytes32ToAddress(_recipientAddress),
            _messageBody
        );
        outboundNonce++;
        return bytes32(0);
    }

    function addInboundMessage(
        uint32 _origin,
        address _sender,
        address _recipient,
        bytes calldata _body
    ) external {
        inboundMessages[inboundUnprocessedNonce] = Message(
            _origin,
            _sender,
            _recipient,
            _body
        );
        inboundUnprocessedNonce++;
    }

    function processNextInboundMessage() public {
        Message memory _message = inboundMessages[inboundProcessedNonce];
        IMessageRecipient(_message.recipient).handle(
            _message.origin,
            addressToBytes32(_message.sender),
            _message.body
        );
        inboundProcessedNonce++;
    }

    function bytes32ToAddress(bytes32 _buf) internal pure returns (address) {
        return address(uint160(uint256(_buf)));
    }
  
    function addressToBytes32(address _addr) internal pure returns (bytes32) {
        return bytes32(uint256(uint160(_addr)));
    }
}
