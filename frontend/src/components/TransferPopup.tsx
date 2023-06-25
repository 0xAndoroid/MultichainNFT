import { Connector } from "wagmi";
import NFT from "../structs/NFT";
import { getNetworkConfig } from "../structs/network";
import erc721multichain from "../assets/ERC721Multichain.json";
import bridge from "../assets/IBridge.json";
import { ethers } from "ethers";

function TransferPopup(props: {
  transferPopup: [NFT | null, React.Dispatch<React.SetStateAction<NFT | null>>];
  connector: Connector | undefined;
}) {
  let styles =
    "absolute top-0 right-0 bottom-0 left-0 w-screen h-screen backdrop-blur-md" +
    (props.transferPopup[0] ? "" : " opacity-0 pointer-events-none");
  let hidePopup = () => {
    props.transferPopup[1](null);
  };
  const submit = async () => {
    if (!props.connector) return;
    if (!props.transferPopup[0]) return;

    if (props.transferPopup[0].allNetworks.length == 1) {
      // NFT is only on main chan, can be transferred via tarnsferFrom
      let network = props.transferPopup[0].network;
      // @ts-ignore
      let networkConfig = getNetworkConfig(network);
      // @ts-ignore
      props.connector.switchChain(Number(networkConfig.chainId));
      let provider = await new ethers.BrowserProvider(
        await props.connector?.getProvider()
      ).getSigner();

      let contract = new ethers.Contract(
        networkConfig.erc721multichain,
        erc721multichain,
        provider
      );

      let destinationAddr = (
        document.getElementById("transferAddress") as HTMLInputElement | null
      )?.value;
      contract.transferFrom(
        await provider.getAddress(),
        destinationAddr,
        props.transferPopup[0].tokenId
      );
    } else {
      // NFT is on multiple chains, must be transferred via multiTransferFrom
      let network = props.transferPopup[0].network!;
      let networkConfig = getNetworkConfig(network);
      // @ts-ignore
      props.connector.switchChain(
        // @ts-ignore
        Number(networkConfig.chainId)
      );
      let provider = await new ethers.BrowserProvider(
        await props.connector?.getProvider()
      ).getSigner();

      let contract = new ethers.Contract(
        networkConfig.erc721multichain,
        erc721multichain,
        provider
      );
      let contractBridge = new ethers.Contract(
        networkConfig.bridgeAddress,
        bridge,
        provider
      );
      let neededVal = 0n;
      for (let n of props.transferPopup[0].allNetworks) {
          if (n == network) continue;
          neededVal += await contractBridge.quoteFeeTransfer(getNetworkConfig(n).domainId);
      }

      let destinationAddr = (
        document.getElementById("transferAddress") as HTMLInputElement | null
      )?.value;
      let opts = { value: neededVal };
      await contract.multichainTransferFrom(
        await provider.getAddress(),
        destinationAddr,
        props.transferPopup[0].tokenId,
        opts
      );
    }
  };
  return (
    <div className={styles}>
      <div className="flex flex-col mx-auto mt-10 max-w-sm h-auto rounded-lg shadow-md bg-bg2 shadow-black">
        <div className="flex justify-end w-full">
          <svg
            onClick={hidePopup}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="m-1 text-white cursor-pointer"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>
        <input
          className="mt-5 mx-5 mb-10 w-auto text-lg font-mono text-black bg-red rounded-lg"
          placeholder="Address"
          id="transferAddress"
        ></input>
        <button
          onClick={submit}
          className="px-1 mx-auto mb-7 w-auto h-auto text-xl text-black rounded-md hover:shadow-lg bg-red hover:shadow-black"
        >
          Transfer
        </button>
      </div>
    </div>
  );
}

export default TransferPopup;
