# Multichain NFT

_This project is a submition to ETHGlobal Waterloo 2023 hackaton. [Project page](https://ethglobal.com/showcase/multichainnft-mnrzy)_

Multichain NFTs have all of the properties of regular NFTs, but can exist on many chains **at the same time.** NFTs are often used as a proof of something. Many protocols are working on different chains at the same time, yet users, who bought the NFT, can access services only on one chain, because of challenges blockchain interoperability possesses.   

## Protocol
A `ERC721Multichain` contract is fully compatible with regular `ERC721`, but adds several new functions on top. 
1. `ERC721Multichain` can wrap other NFTs. Basically, you send your precious NFT to this contract, and receive an NFT that serves as proof of deposit. Token can be easily wrapped & unwrapped at any time, as long as you have this proof of deposit NFT. 
2. Having an `ERC721Multichain`, you can mint `ERC721Multichain` on other chains just with a call of a function on source chain.
3. `ERC721Multichain` on all chains share the same `tokenId`. Even better, `tokenId` is fully deterministic, and is calculated as 
```solidity
uint256(keccak256(abi.encode(originalNftContract, originalNftTokenId)))
```
4. Every token has its **main chain** - where the original NFT is locked. Token metadata is accessible only through main chain.
5. When a token is transferred on one chain, it is guaranteed to be transferred on all other chains as well.
6. When a token is approved on one chain, spender will be able to transfer token on all chains at the same time.
7. In order to unwrap token, it needs to be burned on all other chains.
8. Token on main chain keeps track of all tokens on other chains. Adding new chains can only be done through the main chain.

### Overview of additional functions
```solidity
// Perform transfer on all chains at the same time
function multichainTransferFrom(
    address from,
    address to,
    uint256 tokenId
) public payable;

// Mint a token on another chain
function bridgeToken(uint32 destination, uint256 tokenId) public payable;

// Burn a token on a non-main chain
// On main chain unwrap() has to be used
function burn(uint256 tokenId) external payable;

function wrap(address originalToken, uint256 originalTokenId) external;
function unwrap(uint256 tokenId) external;
```

## Bridge contract
A huge role in interchain communication serves `Bridge` contract. From the point of view of `ERC721Multichain` contract, it sends message to `Bridge` contract, and receives this message on destination chain from `Bridge` contract. 

## Interchain communication
`Bridge` contract uses [Hyperlane](https://hyperlane.xyz) protocol to send and receive interchain messages. 

## Terminology
- **Transfer**. In case token exists only on one chain, a regular `transferFrom` will be performed. In case token exists on many chains, a `multichainTransferFrom` will be called.
- **Mint**. Create the token on a new chain.
- **Burn**. Remove the token from a chain. A token can't be removed from main chain.
- **Wrap**. Lock an NFT to receive a fancier Multichain NFT
- **Unwrap**. Give up your Multichain NFT, get back your regular NFT.

## Frontend client
In frontend client you can see any

![frontend](https://i.imgur.com/6A6vfxA.png)
