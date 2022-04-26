import "./style.scss";

interface Show {
  Title: string;
  Poster: string;
  series: string;
}

const AvailableSeries = ({ Title, Poster, series }: Show) => {
  const handleOnclick = () => {
    console.log(series);
  };

  return (
    <div
      className="container"
      onClick={handleOnclick}
      style={{
        backgroundImage: `url("${Poster}")`,
      }}
    >
      <div className="title">
        <p>{Title}</p>
      </div>
    </div>
  );
};

export default AvailableSeries;
