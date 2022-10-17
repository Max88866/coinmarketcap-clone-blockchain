export default function handler({ req, res }: any) {
  const getData = async () => {
    const response = await fetch(
      `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${process.env.NEXT_BACKEND_CMC_API_KEY}`,
      {
        method: "GET",
        headers: {
          Accept: "*/*",
        },
      }
    );
    console.log(response, "123");
    const data = await response.json();
  };

  getData();
}