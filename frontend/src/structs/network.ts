export enum Network {
  Goerli,
  Fuji,
}

export interface NetworkConfig {
  network: Network;
  chainId: BigInt;
  domainId: BigInt;
  bridgeAddress: string;
  erc721multichain: string;
}

export const getNetworkConfig = (network: Network): NetworkConfig => {
  if (network == Network.Goerli) {
    return {
      network: Network.Goerli,
      chainId: BigInt(5),
      domainId: BigInt(5),
      bridgeAddress: "0x655Cd3E60e9324D1E2078116c1EC3b9d0Fc6c89b",
      erc721multichain: "0x05b257682fF0394176F5E6c1BbdFbFFC80D84704",
    };
  }
  if (network == Network.Fuji) {
    return {
      network: Network.Fuji,
      chainId: BigInt(43113),
      domainId: BigInt(43113),
      bridgeAddress: "0x655Cd3E60e9324D1E2078116c1EC3b9d0Fc6c89b",
      erc721multichain: "0x05b257682fF0394176F5E6c1BbdFbFFC80D84704",
    };
  }
  throw new Error("Unknown network");
};
