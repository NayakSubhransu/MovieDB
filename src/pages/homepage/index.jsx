import { useEffect, useState, useRef } from "react";

import { movieAPIInstance } from "../../API";
//Components
import Moviecard from "../../components/moviecard";
import Banner from "../../components/banner";
import Pagination from "../../components/pagination";
import Movielist from "../../components/Movielist";

const Homepage = (
    {
        watchlist,
        addToWatchlist,
        removeFromWatchlist,
    }
) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [curr, setCurr] = useState(1);
  const targetRef = useRef(null);
 

  //Map to trigger different API
  const myMap = {
    1: "popular",
    2: "top_rated",
    3: "now_playing",
    4: "upcoming",
  };

  //Setting page to render
  const nextPage = () => setPage((prev) => prev + 1);
  const prevPage = () => setPage((prev) => (prev > 1 ? prev - 1 : 1));

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
  

  //Rendering movies when either page or category changes
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const category = myMap[curr];
        const response = await movieAPIInstance.get(
          `/${category}?language=en-US&page=${page}`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [page, curr]);

  //scrolling up when page changes
  useEffect(() => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [page]);

  return (
    <>
      <Banner />
      <Movielist
        curr={curr}
        nextCategory={nextCategory}
        prevCategory={prevCategory}
      />
      <div ref={targetRef} className="flex flex-wrap justify-evenly gap-3">
        {movies.map((movie) => (
          <Moviecard
            key={movie.id}
            movie={movie}
            fav={watchlist.some((item) => item.id === movie.id)}
            addToWatchlist={addToWatchlist}
            removeFromWatchlist={removeFromWatchlist}
            title={movie.title}
            imgURL={movie.backdrop_path}
          />
        ))}
      </div>
      <Pagination page={page} nextPage={nextPage} prevPage={prevPage} />
    </>
  );
};

export default Homepage;
