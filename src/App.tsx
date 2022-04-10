import "./App.css";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Quote from "./pages/Quote";
import NotFound from "./pages/NotFound";
import About from "./pages/About";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="quote" element={<Quote />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
