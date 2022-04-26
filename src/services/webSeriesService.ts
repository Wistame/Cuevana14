import axios from "axios";

const api = axios.create({ baseURL: "https://web-series-quotes-api.deta.dev" });

export interface QuoteData {
  id: string;
  author: string;
  quote: string;
  series: string;
}

const getWebSeriesQuotes = async (): Promise<QuoteData[]> =>
  await api
    .get("/all")
    .then(({ data }) => data)
    .catch(err => { console.error(err); });

const getWebSeriesNames = async (): Promise<string[]> =>
  await api
    .get("/series")
    .then(({ data }) => data)
    .catch(err => { console.error(err); });

export { getWebSeriesQuotes, getWebSeriesNames };
