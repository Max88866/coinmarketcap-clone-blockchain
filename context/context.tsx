import { createContext, useState, useEffect } from "react";

export const CoinMarketContext = createContext<any>(null);

export const CoinMarketProvider = ({ children }: any) => {
  const getTopTenCoins = async () => {
    try {
      const res = await fetch(
        "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
        {
          headers: {
            "X-CMC_PRO_API_KEY": "CMC_PRO_API_KEY",
          },
        }
      );
      const data = await res.json();
      console.log(res, "1233");
      return data.data.data;
    } catch (e: any) {
      console.log(e.message);
    }
  };

  return (
    <CoinMarketContext.Provider value={{ getTopTenCoins }}>
      {children}
    </CoinMarketContext.Provider>
  );
};
