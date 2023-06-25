import { Connector } from "wagmi";
import { Network, getNetworkConfig } from "../structs/network";
import NFT from "../structs/NFT";
import NetworkIcon from "./NetworkIcon";
import { ethers } from "ethers";
import erc721multichain from "../assets/ERC721Multichain.json";

interface Props {
  nft: NFT;
  connector: Connector | undefined;
  mintState: [NFT | null, (value: NFT | null) => void];
  transferState: [NFT | null, (value: NFT | null) => void];
  burnState: [NFT | null, (value: NFT | null) => void];
}

function NFTComponent(props: Props) {
  let mintOnClick = () => {
    props.mintState[1](props.nft);
  };
  let transferOnClick = () => {
    props.transferState[1](props.nft);
  };
  let burnOnClick = () => {
    props.burnState[1](props.nft);
  };
  let unwrapOnClick = async () => { 
    if (!props.connector) return;
    // @ts-ignore
    let networkConfig = getNetworkConfig(props.nft.network);
    // @ts-ignore
    props.connector.switchChain(Number(networkConfig.chainId));

    let provider = await (new ethers.BrowserProvider(await props.connector?.getProvider())).getSigner();

    let contract = new ethers.Contract(networkConfig.erc721multichain, erc721multichain, provider);

    await contract.unwrap(props.nft.tokenId);
  };

  return (
    <div className="w-64 h-64 min-w-64 min-h-64 flex my-5 rounded-lg shadow-md hover:shadow-xl shadow-black">
      <img
        className="w-64 h-64 min-w-64 min-h-64 object-cover rounded-lg shadow-md shadow-black"
        src={
          props.nft.imageSrc
            ? props.nft.imageSrc
            : "https://st4.depositphotos.com/1915171/23982/v/450/depositphotos_239828168-stock-illustration-corrupted-document-icon-bad-file.jpg"
        }
      />
      <div className="absolute w-64 h-64">
        <div className="flex flex-row">
          {props.nft.allNetworks.map((network: Network) => {
            return network == props.nft.network ? (
              <NetworkIcon network={network} glow={true} />
            ) : (
              <NetworkIcon network={network} />
            );
          })}
        </div>

        <div className="absolute justify-between flex w-{15.5rem} h-6 bottom-1 left-1 right-1 ">
          <button
            className="px-1 w-auto h-6 text-black rounded-md hover:shadow-lg hover:scale-105 bg-red hover:shadow-black"
            onClick={transferOnClick}
          >
            Transfer
          </button>
          <button
            className="px-1 w-auto h-6 text-black rounded-md hover:shadow-lg hover:scale-105 bg-green hover:shadow-black"
            onClick={mintOnClick}
          >
            Mint
          </button>
          {props.nft.allNetworks.length == 1 ? (
            <button
              className="px-1 w-auto h-6 text-black rounded-md hover:shadow-lg hover:scale-105 bg-orange hover:shadow-black"
              onClick={unwrapOnClick}
            >
              Unwrap
            </button>
          ) : (
            <button
              className="px-1 w-auto h-6 text-black rounded-md hover:shadow-lg hover:scale-105 bg-orange hover:shadow-black"
              onClick={burnOnClick}
            >
              Burn
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default NFTComponent;
