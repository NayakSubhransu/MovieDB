import { useEffect, useState, useRef, useContext } from "react";

import { movieAPIInstance } from "../../API";
//Components
import Moviecard from "../../components/moviecard";
import Banner from "../../components/banner";
import Pagination from "../../components/pagination";
import Movielist from "../../components/Movielist";
import MovieContext from "../../context/movieContext";
import CategoryContext from "../../context/CategoryContext";
import PaginationContext from "../../context/paginationContext";

const Homepage = (
    // {
    //     watchlist,
    //     addToWatchlist,
    //     removeFromWatchlist,
    // }
) => {
  const [movies, setMovies] = useState([]);
  
  
  const targetRef = useRef(null);

  const {watchlist} = useContext(MovieContext);

  const {page} = useContext(PaginationContext);
  const {curr} = useContext(CategoryContext)
  
 

  //Map to trigger different API
  const myMap = {
    1: "popular",
    2: "top_rated",
    3: "now_playing",
    4: "upcoming",
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
        // curr={curr}
        // nextCategory={nextCategory}
        // prevCategory={prevCategory}
      />
      
      
      <div ref={targetRef} className="flex flex-wrap justify-around mr-6 ml-6 gap-2">
        {movies.map((movie) => (
          <Moviecard
            key={movie.id}
            movie={movie}
            fav={watchlist.some((item) => item.id === movie.id)}
            // addToWatchlist={addToWatchlist}
            // removeFromWatchlist={removeFromWatchlist}
            title={movie.title}
            imgURL={movie.backdrop_path}
            rating={movie.vote_average}
          />
        ))}
      </div>
      <Pagination
      //  page={page} 
      //  nextPage={nextPage} 
      //  prevPage={prevPage} 
       />
    </>
  );
};

export default Homepage;
