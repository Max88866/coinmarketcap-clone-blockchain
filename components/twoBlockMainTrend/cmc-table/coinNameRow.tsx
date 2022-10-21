import { useContext } from "react";
import Image from "next/image";
import btc from "../../../assets/btc.png";
import eth from "../../../assets/eth.png";
import usdc from "../../../assets/usdc.png";
import usdt from "../../../assets/usdt.png";
import xrp from "../../../assets/xrp.png";
import cardano from "../../../assets/cardano.png";
import tera from "../../../assets/tera.png";
import solana from "../../../assets/solana.png";
import avalanche from "../../../assets/avalanche.png";
import bnb from "../../../assets/bnb.png";

// import { CoinMarketContext } from "../context/context";

const styles = {
  coinNameRow: "flex items-center",
  buyButton: `bg-[#1A1F3A] text-[#6188FF] p-1 px-3 text-sm rounded-lg cursor-pointer hover:opacity-50`,
};

const CoinNameRow = ({ name, icon, clicked }: any) => {
  //   const { openModal } = useContext(CoinMarketContext);

  const coinIcon = () => {
    switch (name) {
      case "Bitcoin":
        return (
          <Image
            src={btc}
            className="rounded-full"
            width={20}
            height={20}
            alt=""
          />
        );

      case "Ethereum":
        return (
          <Image
            src={eth}
            className="rounded-full"
            width={20}
            height={20}
            alt=""
          />
        );

      case "Tether":
        return (
          <Image
            src={usdt}
            className="rounded-full"
            width={20}
            height={20}
            alt=""
          />
        );

      default:
        return (
          <Image
            src={btc}
            className="rounded-full"
            width={20}
            height={20}
            alt=""
          />
        );
    }
  };

  return (
    <div className={styles.coinNameRow}>
      <div className="mr-3 flex" onClick={clicked}>
        <div className="mr-2">{coinIcon()}</div>
        {name}
      </div>

      <p>
        {name === "Bitcoin" || name === "Ethereum" || name === "Tether" ? (
          <span
            className={styles.buyButton}
            // onClick={() => openModal()}
          >
            Buy
          </span>
        ) : (
          <></>
        )}
      </p>
    </div>
  );
};

export default CoinNameRow;
