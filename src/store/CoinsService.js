const apiURL = "https://api.coingecko.com/api/v3/coins/";
const CoinsService = {
  // Method to get all the coins market data
  getCoinsForMarket: (vsCurrency, order, noPerPage, page) => {
    return fetch(
      apiURL +
        "markets?" +
        new URLSearchParams({
          vs_currency: vsCurrency,
          order: order,
          per_page: noPerPage,
          page: page,
          sparkline: false,
        })
    ).then((response) => {
      if (response.status != 200) {
        return response.json().then(() => {
          const error = new Error(`Something went wrong! `);
          throw error;
        });
      }
      return response.json().then((data) => data);
    });
  },

  // Method to get the details of the coin by ID
  getCoinDetailsById: (id) => {
    return fetch(apiURL + id).then((response) => {
      if (response.status != 200) {
        return response.json().then((errResData) => {
          const error = new Error(
            `Something went wrong! ${errResData.data.msgBody}`
          );
          error.data = errResData;
          throw error;
        });
      }
      return response.json().then((data) => data);
    });
  },
};

export default CoinsService;
