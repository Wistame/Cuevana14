import { FC, ReactElement } from "react";

import { QuoteData } from "../../services/webSeriesService";

const QuoteComponent: FC<QuoteData> = ({
  series,
  author,
  quote,
}: QuoteData): ReactElement => {
  return (
    <div>
        <div></div>
      <h1>{series}</h1>
      <p>{author}</p>
      <p>{quote}</p>
    </div>
  );
};

export default QuoteComponent;
