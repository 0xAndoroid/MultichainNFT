import { ethers } from "ethers";
import erc721ABI from "../assets/ERC721Multichain.json";

export async function verifyNFTOnchain(
  blockchain: string,
  tokenAddress: string,
  tokenId: BigInt,
  owner: string
): Promise<[boolean, boolean]> {
  let rpc = "";
  if (blockchain == "eth_goerli") {
    rpc =
      "https://rpc.ankr.com/eth_goerli/70198da14bc97b46f10f1308cf9ef8e84ec9fbc90b6e7bd5dfee6d38c149ef11";
  } else {
    rpc =
      "https://rpc.ankr.com/avalanche_fuji/70198da14bc97b46f10f1308cf9ef8e84ec9fbc90b6e7bd5dfee6d38c149ef11";
  }
  let provider: ethers.JsonRpcProvider = new ethers.JsonRpcProvider(rpc);
  let contract = new ethers.Contract(tokenAddress, erc721ABI, provider);
  try {
    let ownerActual = await contract.ownerOf(tokenId);
    let mainChain = await contract.mainChain(tokenId);
    return [ownerActual == owner, mainChain == 0];
  } catch (e) {
    return [false, false];
  }
}

export async function getImageURL(
  blockchain: string,
  tokenAddress: string,
  tokenId: BigInt
): Promise<string> {
  let rpc = "";
  if (blockchain == "eth_goerli") {
    rpc =
      "https://rpc.ankr.com/eth_goerli/70198da14bc97b46f10f1308cf9ef8e84ec9fbc90b6e7bd5dfee6d38c149ef11";
  } else {
    rpc =
      "https://rpc.ankr.com/avalanche_fuji/70198da14bc97b46f10f1308cf9ef8e84ec9fbc90b6e7bd5dfee6d38c149ef11";
  }
  let provider: ethers.JsonRpcProvider = new ethers.JsonRpcProvider(rpc);
  let contract = new ethers.Contract(tokenAddress, erc721ABI, provider);
  let tokenURI = await contract.tokenURI(tokenId);
  let query = "https://ipfs.io/ipfs/" + tokenURI.split("ipfs://").pop();
  if (query == "https://ipfs.io/ipfs/") return "";
  let response = await fetch(query);
  let json = await response.json();
  if (json.image.startsWith("https://")) return json.image;
  return "https://ipfs.io/ipfs/" + json.image.split("ipfs://").pop();
}
