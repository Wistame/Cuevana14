import "./App.scss";
import { Outlet } from "react-router-dom";
import Header from "./pages/HomePage";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <div className="app-header">
        <Header />
      </div>
      <div className="app-content">
        <Outlet />
      </div>
      <div className="app-footer">
        <About />
      </div>
    </div>
  );
}

export default App;
