import { useEffect, useState } from "react";
import MintPopup from "./components/MintPopup";
import NFTComponent from "./components/NFTComponent";
import NewNFTComponent from "./components/NewNFTComponent";
import NFT from "./structs/NFT";
import TransferPopup from "./components/TransferPopup";
import BurnPopup from "./components/BurnPopup";
import { Network, getNetworkConfig } from "./structs/network";
import "@rainbow-me/rainbowkit/styles.css";
import {
  ConnectButton,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, useAccount, WagmiConfig } from "wagmi";
import { avalancheFuji, goerli } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { AnkrProvider } from "@ankr.com/ankr.js";
import { getImageURL, verifyNFTOnchain } from "./structs/verifyOwnership";

const { chains, publicClient } = configureChains(
  [goerli, avalancheFuji],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "MultichainNFT",
  projectId: "63af36926a9ad005a89d885e7f6a5924",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

function App() {
  let mintPopup = useState<NFT | null>(null);
  let transferPopup = useState<NFT | null>(null);
  let burnPopup = useState<NFT | null>(null);
  const { address, connector, isConnecting, isDisconnected } = useAccount();

  let [nfts, setNfts] = useState<NFT[]>([]);
  let [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchCollection = async (): Promise<Map<BigInt, NFT>> => {
    let out: Map<BigInt, NFT> = new Map();

    let provider = new AnkrProvider(
      "https://rpc.ankr.com/multichain/70198da14bc97b46f10f1308cf9ef8e84ec9fbc90b6e7bd5dfee6d38c149ef11"
    );
    let nfts = (
      await provider.getNFTsByOwner({
        walletAddress: address!,
        blockchain: ["eth_goerli", "avalanche_fuji"],
        pageSize: 25,
      })
    ).assets;
    for (let nft of nfts) {
      if (
        nft.contractAddress.toLowerCase() ==
        "0xEBe0C5Db625dAb34fBaD6cF29D31A39bE0dF09dB".toLowerCase()
      )
        continue;
      let network =
        nft.blockchain == "eth_goerli" ? Network.Goerli : Network.Fuji;
      if (
        nft.contractAddress.toLowerCase() !=
        getNetworkConfig(network).erc721multichain.toLowerCase()
      ) {
        let imgUrl = "";
        try {
          imgUrl = await getImageURL(
            nft.blockchain,
            nft.contractAddress,
            BigInt(nft.tokenId)
          );
        } catch (e) { }
        // It's not a multichain NFT
        out.set(BigInt(nft.tokenId), {
          isMultichain: false,
          network: network,
          allNetworks: [network],
          imageSrc: imgUrl,
          tokenId: BigInt(nft.tokenId),
          tokenAddress: nft.contractAddress,
        });
        continue;
      }
      let [isOwned, isOnMainChain] = await verifyNFTOnchain(
        nft.blockchain,
        nft.contractAddress,
        BigInt(nft.tokenId),
        address!
      );
      if (!isOwned) continue;
      let imgUrl = "";
      try {
        imgUrl = await getImageURL(
          nft.blockchain,
          nft.contractAddress,
          BigInt(nft.tokenId)
        );
      } catch (e) { }
      if (out.has(BigInt(nft.tokenId))) {
        let before = out.get(BigInt(nft.tokenId));
        before?.allNetworks.push(network);
        if (isOnMainChain && before) {
          before.imageSrc = imgUrl;
          before.network = network;
        }
        out.set(BigInt(nft.tokenId), before!);
      } else {
        let newNFT: NFT = {
          isMultichain: true,
          network: isOnMainChain ? network : null,
          allNetworks: [network],
          imageSrc: imgUrl,
          tokenId: BigInt(nft.tokenId),
          tokenAddress: nft.contractAddress,
        };
        out.set(BigInt(nft.tokenId), newNFT);
      }
    }
    return out;
  };
  useEffect(() => {
    if (address != null)
      fetchCollection().then((out: Map<BigInt, NFT>) => {
        setNfts(Array.from(out.values()));
        setIsLoading(false);
      });
  }, [address]);
  if (isConnecting) {
    return (
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains}>
          <div className="flex justify-end my-5 mx-10 w-auto">
            <ConnectButton />
          </div>
          <h1 className="text-3xl text-center animate-pulse">
            Connecting to your wallet...
          </h1>
        </RainbowKitProvider>
      </WagmiConfig>
    );
  }
  if (isDisconnected) {
    return (
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains}>
          <div className="flex justify-end my-5 mx-10 w-auto">
            <ConnectButton />
          </div>
          <h1 className="text-3xl text-center animate-pulse">
            Please connect to your wallet to continue.
          </h1>
        </RainbowKitProvider>
      </WagmiConfig>
    );
  }
  if (isLoading) {
    return (
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains}>
          <div className="flex justify-end my-5 mx-10 w-auto">
            <ConnectButton />
          </div>
          <h1 className="text-3xl text-center animate-pulse">
            We are loading your NFTs, please wait...
          </h1>
        </RainbowKitProvider>
      </WagmiConfig>
    );
  }
  let props = {
    connector,
    mintState: mintPopup,
    transferState: transferPopup,
    burnState: burnPopup,
  };
  let nftComponents = nfts.map((nft) => {
    if (nft.isMultichain) return <NFTComponent {...props} nft={nft} />;
    else return <NewNFTComponent {...props} nft={nft} />;
  });
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <div className="flex justify-end my-5 mx-10 w-auto">
          <ConnectButton />
        </div>
        <div className="flex flex-shrink-0 flex-wrap">{nftComponents}</div>
        <MintPopup mintPopup={mintPopup} connector={props.connector} />
        <TransferPopup
          transferPopup={transferPopup}
          connector={props.connector}
        />
        <BurnPopup burnPopup={burnPopup} connector={props.connector} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
