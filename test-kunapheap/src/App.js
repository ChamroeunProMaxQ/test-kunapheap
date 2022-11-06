import "./App.css";
import { Helmet } from "react-helmet";
import { Link, Route, Routes } from "react-router-dom";
import Team from "./components/Team";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Kunapheap Store</title>
      </Helmet>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/team" element={<Team/>} />
      </Routes>
    </>
  );
}

export default App;
