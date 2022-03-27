import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Statistics from "./Pages/Statistics";
import ProductList from "./Pages/ProductList";
import Home from "./Pages/Home";
import Header from "./Components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Components/Loading/Loading";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.isLoading);
  useEffect(() => {
    async function init() {
      try {
        const resp = await axios.get("http://localhost:3004/productDetails");
        dispatch({ type: "INITIALISE", payload: resp.data });
      } catch (e) {
        dispatch({ type: "ERROR" });
      }
    }
    init();
  });

  return (
    <Router>
      <Header />
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productList" element={<ProductList />} />
          <Route path="/statistics" element={<Statistics />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
