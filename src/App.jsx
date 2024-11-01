import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/navbar";
import Homepage from "./pages/homepage";
import Watchlist from "./pages/watchlist";
import Darkmode from "./components/darkmode";
import MovieContext from "./context/movieContext";
import CategoryContext from "./context/CategoryContext";
import "./App.css";

import PaginationContext from "./context/paginationContext";

function App() {
  const [watchlist, setWatchlist] = useState(
    JSON.parse(localStorage.getItem("watchlist")) || []
  );
  const [page, setPage] = useState(1);
  const [curr, setCurr] = useState(1);


  //Setting page to render
  const nextPage = () => setPage((prev) => prev + 1);
  const prevPage = () => setPage((prev) => (prev > 1 ? prev - 1 : 1));

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

   //Setting category to render
   const nextCategory = () => {
    if (curr < 4) {
      setPage(1);
      setCurr(curr + 1);
    }
    else{
        setPage(1);
        setCurr(1)
    }
  };

  const prevCategory = () => {
    if (curr > 1) {
      setPage(1);
      setCurr(curr - 1);
    }
    else{
        setPage(1);
        setCurr(4);
    }
  };
  

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  return (
    <>
      <Navbar />
      <Darkmode />
      <MovieContext.Provider
        value={{
          watchlist,
          addToWatchlist,
          removeFromWatchlist,
          setWatchlist,
        }}
      >
        
        <Routes>
          <Route
            path="/"
            element={
              <>
              <CategoryContext.Provider value={{curr,nextCategory,prevCategory}}>
                <PaginationContext.Provider
                  value={{ page, prevPage, nextPage }}
                >
                  <Homepage />
                </PaginationContext.Provider>
                </CategoryContext.Provider>
              </>
            }
          />
          <Route
            path="/watch-list"
            element={
              <Watchlist
                movies={watchlist}
                removeFromWatchlist={removeFromWatchlist}
                setWatchlist={setWatchlist}
              />
            }
          />
        </Routes>
      </MovieContext.Provider>
    </>
  );
}

export default App;
