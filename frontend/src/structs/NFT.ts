import { Network } from "./network";

export interface NFT {
  isMultichain: boolean;
  network: Network | null;
  allNetworks: Network[];
  tokenAddress: string;
  tokenId: BigInt;
  imageSrc: string | null;
}

export default NFT;
