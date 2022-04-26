import AvailableSeries from "../AvailableSeries";
import { useEffect, useState } from "react";
import {
  getWebSeriesQuotes,
  getWebSeriesNames,
  QuoteData,
} from "../../services/webSeriesService";
import { getOmbdAPIData, OmbdData } from "../../services/ombdAPIservice";
import "./style.scss";

interface ShowData extends OmbdData {
  series: string;
}

const SeriesSelectorComponent = () => {
  const [showCard, setShowCard] = useState<any[]>([]);

  useEffect(() => {
    const getAvailableSeries = async () => {
      const getNames = await getWebSeriesNames();
      const shows = getNames.map(async (show: string): Promise<ShowData> => {
        const { Title, Poster } = await getOmbdAPIData(show);
        const serieInfo = { Title, Poster, series: show };
        return serieInfo;
      });
      Promise.all(shows).then((response) => {
        setShowCard(response);
      });
    };
    getAvailableSeries();
  }, []);

  return (
    
    <div className="selectorWrapper">
      <div className="selectorTitle"><p>Complete quotes</p></div>

      <div className="selectorList">
      {showCard ?
        showCard.map((show) => (
          <AvailableSeries {...show} key={`${show.title}-key`} />
        ))
        : null}
        </div>

    </div>
  );
};

export default SeriesSelectorComponent;
