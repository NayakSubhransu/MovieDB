import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import React, {Suspense} from "react";

//Components
const Banner = React.lazy(() => import("../../components/banner"));
const Moviecard = React.lazy(() => import("../../components/moviecard"));
const Pagination = React.lazy(() => import("../../components/pagination"));
const Movielist = React.lazy(() => import("../../components/Movielist"));


import moviesMiddleware from "../../redux/movie/moviesMiddleware";

//Map to trigger different API
const myMap = {
  1: "popular",
  2: "top_rated",
  3: "now_playing",
  4: "upcoming",
};

const Homepage = () => {
  const targetRef = useRef(null);

  const { page } = useSelector((store) => store.paginationState);

  const { curr } = useSelector((store) => store.categoryState);

  const { movies, error } = useSelector((store) => store.movieState);
  const dispatch = useDispatch();

  const watchlist = useSelector((state) => state.watchlistState);

  //Rendering movies when either page or category changes
  useEffect(() => {
    const category = myMap[curr];
    dispatch(moviesMiddleware(page, category));
  }, [page, curr]);

  //scrolling up when page changes
  useEffect(() => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [page]);

  if (error) {
    return (
      <h1 className="text-center font-bold text-4xl h-[33.5rem">
        Oops...Something went wrong!
      </h1>
    );
  }

  return (
    <Suspense fallback={<h1 className="text-center">Loading...</h1>}>
      <Banner />

      <Movielist />

      <div
        ref={targetRef}
        className="flex flex-wrap justify-around mr-6 ml-6 gap-2"
      >
        {movies.map((movie) => (
          <Moviecard
            key={movie.id}
            movie={movie}
            fav={watchlist.some((item) => item.id === movie.id)}
            title={movie.title}
            imgURL={movie.backdrop_path}
            rating={movie.vote_average}
          />
        ))}
      </div>
      <Pagination />
      </Suspense>
  );
};

export default Homepage;
