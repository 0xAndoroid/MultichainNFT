export enum Network {
  Goerli,
  Fuji,
  Mumbai,
}

export interface NetworkConfig {
  network: Network;
  chainId: BigInt;
  domainId: BigInt;
  bridgeAddress: string;
  erc721multichain: string;
}

export function parseAnkr(network: string): Network {
  switch (network) {
    case "eth_goerli":
      return Network.Goerli;
    case "avalanche_fuji":
      return Network.Fuji;
    case "polygon_mumbai":
      return Network.Mumbai;
    default:
      throw new Error("Unknown network");
  }
}

export const getNetworkConfig = (network: Network): NetworkConfig => {
  if (network == Network.Goerli) {
    return {
      network: Network.Goerli,
      chainId: BigInt(5),
      domainId: BigInt(5),
      bridgeAddress: "0xF1BF44Eb007a1403E7b1ba5d59811C3566897d9F",
      erc721multichain: "0x09e638C5FF7A51E9b4831d8f5A9b901D8D09B731",
    };
  }
  if (network == Network.Fuji) {
    return {
      network: Network.Fuji,
      chainId: BigInt(43113),
      domainId: BigInt(43113),
      bridgeAddress: "0xF1BF44Eb007a1403E7b1ba5d59811C3566897d9F",
      erc721multichain: "0x09e638C5FF7A51E9b4831d8f5A9b901D8D09B731",
    };
  }
  if (network == Network.Mumbai) {
    return {
      network: Network.Mumbai,
      chainId: BigInt(80001),
      domainId: BigInt(80001),
      bridgeAddress: "0xF1BF44Eb007a1403E7b1ba5d59811C3566897d9F",
      erc721multichain: "0x09e638C5FF7A51E9b4831d8f5A9b901D8D09B731",
    };
  }
  throw new Error("Unknown network");
};
