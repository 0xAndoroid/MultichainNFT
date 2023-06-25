import { Network } from "../structs/network";

function NetworkIcon(props: { network: Network, glow?: boolean }) {
  let styles = "w-6 h-6 mr-0 m-1" + (props.glow ? " drop-shadow-md shadow-yellow-400" : "");
  if (props.network == Network.Goerli) {
    return <img className={styles} src="https://github.com/spothq/cryptocurrency-icons/blob/master/128/color/eth.png?raw=true" />;
  }
  if (props.network == Network.Fuji) {
    return <img title="Test" className={styles} src="https://github.com/spothq/cryptocurrency-icons/blob/master/128/color/avax.png?raw=true" />;
  }
  return <></>;
}

export default NetworkIcon;
