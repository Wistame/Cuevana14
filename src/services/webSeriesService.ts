import axios from "axios";

const api = axios.create({ baseURL: "https://web-series-quotes-api.deta.dev" });


export interface QuoteData {
    id: String;
    author: String;
    quote: String;
    series: String;
  }

const getWebSeriesQuotes = async ():Promise<QuoteData[]> => {
  const result = await api.get("/all")
    .then((response) => {
        return response.data;
    })
    .catch(err => {
      console.error(err);
    });

    return result;
};

export { getWebSeriesQuotes };
