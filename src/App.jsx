import { Routes, Route } from "react-router-dom";
import {useState, useEffect} from "react";

import Navbar from "./components/navbar";
import Homepage from "./pages/homepage";
import Watchlist from "./pages/watchlist";

import "./App.css";
import Darkmode from "./components/darkmode";
import React from "react";

function App() {
  const [watchlist, setWatchlist] = useState(
    JSON.parse(localStorage.getItem("watchlist")) || []
  );

  //Adding to Wachlist
  const addToWatchlist = (movieToAdd) => {
    const newWatchlist = [...watchlist, movieToAdd];
    setWatchlist(newWatchlist);
  };

  //Removing from watchlist
  const removeFromWatchlist = (movieToRemove) => {
    const filterWatchlist = watchlist.filter(
      (movieObj) => movieObj.id !== movieToRemove.id
    );
    setWatchlist(filterWatchlist);
  };

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  return (
    <>
      <Navbar />
      <Darkmode />
      <Routes>
        <Route path="/" element={<Homepage watchlist={watchlist} addToWatchlist={addToWatchlist} removeFromWatchlist={removeFromWatchlist} />} />
        <Route path="/watch-list" element={<Watchlist movies={watchlist} removeFromWatchlist={removeFromWatchlist} />} />
      </Routes>
    </>
  );
}

export default App;
