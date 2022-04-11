import { Outlet, Link } from "react-router-dom";
import { getWebSeriesQuotes, QuoteData } from "../../services/webSeriesService";
import Quote from "../../components/QuoteComponent";

import { useEffect, useState } from "react";

const QuoteListComponent = () => {
  const [quotes, setQuotes] = useState<QuoteData[]>([]);
  const [filterer, setFilterer] = useState<string>("");

  useEffect(() => {
    // const allQuotes = localStorage.getItem("all-quotes");
    const webSeriesQuotesAPI = async () => {
      const getQuotes = getWebSeriesQuotes();
      setQuotes(await getQuotes);
    };
    //if (!allQuotes) { once I use localstorage, uncomment
    webSeriesQuotesAPI();
    //}
  }, []);
  useEffect(() => {
    localStorage.setItem("all-quotes", JSON.stringify(quotes));
  }, [quotes]);

  const handleInput = (e: any) => {
    setFilterer(e.target.value);
  };

  const filteredQuotes = quotes.filter((quoteInfo) =>
    quoteInfo.author.toLocaleLowerCase().includes(filterer)
  );
  return (
    <div>
      <p>testing text quote</p>
      <nav>
        <Link to="/">HomePage</Link>
        <Link to="/About">About</Link>
      </nav>
      <input onChange={handleInput} />

      <ul>
        {filteredQuotes &&
          filteredQuotes.map((quote) => {
            const { series, id } = quote;
            return (
              <li key={`${series}-${id}`}>
                <Quote {...quote} />
              </li>
            );
          })}
      </ul>

      <div></div>
    </div>
  );
};

export default QuoteListComponent;
