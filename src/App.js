import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import CoinList from "./views/CoinList";
import CoinData from "./views/CoinData";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CoinList />} />
          <Route path="/coinData" element={<CoinData />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
