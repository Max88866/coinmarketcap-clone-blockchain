import { useContext, useEffect, useState, useCallback } from "react";
import btc from "../../../assets/btc.png";
import { CoinMarketContext } from "../../../context/context";
import CMCtableHeader from "./cmcTableHeader";
import CMCtableRow from "./CMCtableRow";

const CMCtable = () => {
  // let { getTopTenCoins } = useContext(CoinMarketContext);
  let [coinData, setCoinData] = useState<any[]>([
    {
      name: "Bitcoin",
      symbol: "BTC",
      circulating_supply: 19183443,
      total_supply: 19183443,
      cmc_rank: 1,
      quote: {
        USD: {
          price: 19174.41241395587,
          volume_24h: 28288531113.36102,
          percent_change_24h: -2.09401732,
          percent_change_7d: 0.16755775,
          market_cap: 367831247601.6148,
        },
      },
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      circulating_supply: 122373863.499,
      total_supply: 122373863.499,
      cmc_rank: 2,
      quote: {
        USD: {
          price: 1296.4913585027898,
          volume_24h: 9915169981.982658,
          percent_change_24h: -2.40886003,
          percent_change_7d: -0.27655782,
          market_cap: 158656656533.05347,
        },
      },
    },
    {
      name: "Tether",
      symbol: "USDT",
      circulating_supply: 68452559802.34376,
      total_supply: 70146125803.79472,
      cmc_rank: 3,
      quote: {
        USD: {
          price: 1.0000751898314852,
          volume_24h: 37869962004.05896,
          percent_change_24h: -0.00794241,
          percent_change_7d: 0.01069628,
          market_cap: 68457706738.78003,
        },
      },
    },
  ]);

  // useEffect(() => {
  //   setData();
  // const setData = useCallback(async () => {
  // try {
  //   let apiResponse = await getTopTenCoins();
  //   let filteredResponse = [];
  //   for (let i = 0; i < apiResponse.length; i++) {
  //     const element = apiResponse[i];
  //     if (element.cmc_rank <= 10) filteredResponse.push(element);
  //   }
  //   setCoinData(filteredResponse);
  // } catch (e: any) {
  //   console.log(e.message);
  // }
  // }, []);
  // }, []);

  return (
    <div className="text-white font-bold">
      <div className="mx-auto max-w-screen-2xl">
        <table className="w-full">
          <CMCtableHeader />

          {coinData && coinData ? (
            coinData.map((coin: any, index: number) => {
              return (
                <CMCtableRow
                  key={index}
                  starNum={coin.cmc_rank}
                  coinName={coin.name}
                  coinSymbol={coin.symbol}
                  coinIcon={btc}
                  showBuy={true}
                  hRate={coin.quote.USD.percent_change_24h}
                  dRate={coin.quote.USD.percent_change_7d}
                  hRateIsIncrement={true}
                  price={coin.quote.USD.price}
                  marketCapValue={coin.quote.USD.market_cap}
                  volumeCryptoValue={coin.quote.USD.volume_24h}
                  volumeValue={coin.total_supply}
                  circulatingSupply={coin.circulating_supply}
                />
              );
            })
          ) : (
            <></>
          )}
        </table>
      </div>
    </div>
  );
};

export default CMCtable;
