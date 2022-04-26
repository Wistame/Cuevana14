import Navigator from "../../components/NavigatorComponent";
import SeriesSelectorComponent from "../../components/SeriesSelectorComponent/Index";
import "./style.scss";



const TitleComponent = () => (
  <div className="headerTitle">
    <p>@QuoteMe</p>
  </div>
);

const HomePage = () => {
  return (
    <div className="header">
      <TitleComponent />
      <Navigator />
    </div>
  );
};

export default HomePage;
