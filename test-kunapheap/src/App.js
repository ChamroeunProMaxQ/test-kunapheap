import "./App.css";
import { Helmet } from "react-helmet";
import { Route, Routes } from "react-router-dom";
import Team from "./components/Team";
import Home from "./components/Home";
import logo168 from "./assets/168.png";

function App() {

  
  return (
    <>
    
        <div>
          <Helmet>
            <title>Kunapheap Store</title>
            <meta charSet="utf-8" />
            <meta property="og:title" content="Kunapheap Store" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://kunapheap.com/" />
            <meta property="og:image" content={logo168} />
          </Helmet>
        </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </>
  );
}

export default App;
