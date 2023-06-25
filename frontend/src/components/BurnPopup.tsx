import { ethers } from "ethers";
import NFT from "../structs/NFT";
import { Network, getNetworkConfig } from "../structs/network";
import erc721multichain from "../assets/ERC721Multichain.json";
import bridge from "../assets/IBridge.json";
import { Connector } from "wagmi";

function BurnPopup(props: {
  burnPopup: [NFT | null, React.Dispatch<React.SetStateAction<NFT | null>>];
  connector: Connector | undefined;
}) {
  let networksForBurn = props.burnPopup[0]?.allNetworks
    .filter((n) => n !== props.burnPopup[0]?.network)
    .map((n) => <option value={Network[n]}>{Network[n]}</option>);
  let styles =
    "absolute top-0 right-0 bottom-0 left-0 w-screen h-screen backdrop-blur-md" +
    (props.burnPopup[0] ? "" : " opacity-0 pointer-events-none");
  let hidePopup = () => {
    props.burnPopup[1](null);
  };
  const submit = async () => {
    if (!props.connector) return;
    if (!props.burnPopup[0]) return;
    let networkStr = (
      document.getElementById("burnNetworkSelect") as HTMLSelectElement | null
    )?.value;
    console.log(networkStr);
    let network = Network[networkStr as keyof typeof Network];
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

    let contractBridge = new ethers.Contract(networkConfig.bridgeAddress, bridge, provider);
    let neededVal = await contractBridge.quoteFeeBurn(getNetworkConfig(props.burnPopup[0]?.network!).domainId);

    let opts = { value: neededVal };
    await contract.burn(props.burnPopup[0]?.tokenId, opts);
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
        <div className="flex justify-around p-2 mt-5 w-full">
          <span className="text-xl text-white">Network:</span>
          <select
            id="burnNetworkSelect"
            className="w-24 h-6 text-xl text-white rounded-md bg-bg1"
          >
            {networksForBurn}
          </select>
        </div>
        <button
          onClick={submit}
          className="px-1 mx-auto mb-7 w-auto h-auto text-xl text-black rounded-md hover:shadow-lg bg-orange hover:shadow-black"
        >
          Burn
        </button>
      </div>
    </div>
  );
}

export default BurnPopup;
