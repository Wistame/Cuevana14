import { Outlet, Link } from "react-router-dom";
import {
  getWebSeriesQuotes,
  getWebSeriesNames,
  QuoteData,
} from "../../services/webSeriesService";
import { getOmbdAPIData, OmbdData } from "../../services/ombdAPIservice";
import Quote from "../../components/QuoteComponent";
import "./style.scss";

import { useEffect, useState } from "react";

const QuoteListComponent = () => {
  const [quotes, setQuotes] = useState<QuoteData[]>([]);
  const [seriesOmdb, setOmdb] = useState<any[]>([]);
  const [filterer, setFilterer] = useState<string>("");
  const [page, setPage] = useState<Pagination>({
    currentPage: 0,
    showsPerPage: 6,
  });
  const [totalPages, setTotalPages] = useState<number>(1);
  const [shows, setShows] = useState<any[]>([]);

  interface Pagination {
    currentPage: number;
    showsPerPage: number;
  }

  interface ShowData extends OmbdData {
    series: string;
  }

  const NavButton = () => {
    return (
      <div>
        <button></button>
      </div>
    );
  };

  useEffect(() => {
    const AvailableSeries = async () => {
      const getNames = await getWebSeriesNames();
      const shows = getNames.map(async (show: string): Promise<ShowData> => {
        const { Title, Poster } = await getOmbdAPIData(show);
        console.log("prehook omdb single", await Title);
        const serieInfo = { Title, Poster, series: show };
        return serieInfo;
      });
      Promise.all(shows).then((response) => {
        setOmdb(response);
      });
    };
    AvailableSeries();
  }, []);

  useEffect(() => {
    const match = quotes.filter(({ author }) =>
      author.toLocaleLowerCase().includes(filterer)
    );
    setTotalPages(Math.ceil(match.length / 6));

    const calculatePage = page.currentPage * page.showsPerPage;
    setShows(match.slice(calculatePage, calculatePage + page.showsPerPage));
    console.log(shows);
    console.log(quotes);
  }, [quotes, filterer, page]);

  useEffect(() => {
    const webSeriesQuotesAPI = async () => {
      const getQuotes = getWebSeriesQuotes();
      setQuotes(await getQuotes);
    };
    webSeriesQuotesAPI();
  }, []);

  const handleInput = (e: any): void => {
    setFilterer(e.target.value);
  };

  const hasPosterAndTitle = (
    seriesName: string
  ): { Poster: string; Title: string } => {
    const { Poster, Title } = seriesOmdb.find(
      ({ series }) => series === seriesName
    );
    return { Poster, Title };
  };
  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 0 && pageNumber <= totalPages) {
      setPage({ ...page, currentPage: pageNumber });
    }
  };

  const PageButtons = () => {
    const asArrays = [...Array(totalPages)].map((x, idx) => ({ pageNum: idx }));

    let asfilteredArray;

    if (page.currentPage < 6) {
      asfilteredArray = asArrays.slice(0, 12);
    } else if (page.currentPage > asArrays.length - 6) {
      asfilteredArray = asArrays.slice(-12);
    } else {
      asfilteredArray = asArrays.slice(
        page.currentPage - 6,
        page.currentPage + 6
      );
    }
    return asfilteredArray;
  };

  return (
    <div className="quoteComponent">
      <p>QUOTE INDEX</p>
      <nav>
        <Link to="/">HomePage</Link>
        <Link to="/About">About</Link>
      </nav>
      <input onChange={handleInput} />
      <div>page: {page.currentPage + 1}</div>
      <div onClick={() => handlePageChange(7)}>
        <p>7</p>
      </div>

      <button onClick={() => handlePageChange(page.currentPage + 1)}>
        {">"}
      </button>
      <div>
        <p>Shows</p>
        <div className="paginationWrapper">
          <div className="paginationPages">
            <button onClick={() => handlePageChange(page.currentPage - 1)}>
             <p>{"<"}</p>
            </button>
          </div>
          {totalPages &&
            PageButtons().map(({ pageNum }) => (
              <div className={`${(pageNum == page.currentPage) ? 'activePage' : 'paginationPages'}`}  key={pageNum}>
                <button onClick={() => handlePageChange(pageNum)}>
                  <p>{pageNum + 1}</p>
                </button>
              </div>
            ))}
          <div className="paginationPages">
          <button onClick={() => handlePageChange(page.currentPage + 1)}>
        <p>{">"}</p>
      </button>
          </div>
        </div>
      </div>
      <div className="quoteResult">
        {shows &&
          shows.map((quote) => {
            const { series, id } = quote;
            const posterAndTitle = hasPosterAndTitle(quote.series);
            const serieId = `${series}-${id}`;
            const { Poster } = posterAndTitle;
            return (
              <div
                key={serieId}
                className="singlQuote"
                style={{ backgroundImage: `url("${Poster}")` }}
              >
                <Quote {...posterAndTitle} {...quote} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default QuoteListComponent;
