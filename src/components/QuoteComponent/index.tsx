import { FC, ReactElement } from "react";
import "./style.scss";
import { QuoteData } from "../../services/webSeriesService";

interface QuoteComponent extends QuoteData {
  Poster: string;
  Title: string;
}

//const placeholder = 'https://png.pngtree.com/thumb_back/fw800/background/20210409/pngtree-exotic-short-cat-pet-kitten-image_601092.jpg';

const QuoteComponent: FC<QuoteComponent> = ({
  author,
  quote,
}: QuoteComponent): ReactElement => {
  return (
    <>
      <div className="quoteLine">
        <p>{`"${quote}"`}</p>
      </div>
      <div className="author">
        <p>{author}</p>
      </div>
    </>
  );
};

export default QuoteComponent;

