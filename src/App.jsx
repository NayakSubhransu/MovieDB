import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Homepage from "./pages/homepage";
import Watchlist from "./pages/watchlist";
import Darkmode from "./components/darkmode";

import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const watchlist = useSelector((state) => state.watchlistState);

  return (
    <>
      <Navbar />
      <Darkmode />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Homepage />
            </>
          }
        />
        <Route path="/watch-list" element={<Watchlist />} />
      </Routes>
    </>
  );
}

export default App;
