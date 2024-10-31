import { useState } from "react";

const Moviecard = ({
  movie,
  fav,
  addToWatchlist,
  removeFromWatchlist,
  title,
  imgURL,
  rating,
}) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (movie) => {
    setSelectedItem(movie);
  };
  const handleMouseLeave = () => {
    setSelectedItem(null);
  };
  return (
  <div 
  className="relative hover:scale-110 duration-300 cursor-pointer ml-8 mr-8 m-4 rounded-[1rem] z-10 overflow-visible"
  onClick={() => handleClick(movie)}
  onMouseLeave={handleMouseLeave}
>
  {selectedItem && (
    <div 
      className={`absolute bg-gray-200 rounded-lg shadow-lg z-[100] overflow-visible transform -translate-x-1/2`}
      style={{
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)',
        minWidth: '250px',
        maxWidth: '300px',
        width: '80vw',
        minHeight: '200px',
        maxHeight: '220px', 
        height:'60vh'
      }}
    >
      <img 
        src={`https://image.tmdb.org/t/p/original${imgURL}`} 
        alt="" 
        className="rounded-lg w-full h-full opacity-55" 
      />
      <div className="mt-2 ml-2 font-bold absolute text-lg top-[2px] left-[4px]">
        {movie.title}
      </div>
      <div className="absolute top-[40px] left-2 pr-3 w-full h-full pl-2 text-xs text-wrap">
        {movie.overview}
      </div>
      <div className="w-10 border-4 border-rose-900 absolute top-[-35px] left-4 rounded-[100%] p-2 text-sm bg-slate-900">
          {Math.round(rating * 10) / 10}
        </div>
    </div>
  )}
      <img
        className="h-[18rem] w-[13rem] object-cover rounded-lg"
        src={`https://image.tmdb.org/t/p/original${imgURL}`}
        alt={title}
      />
      <div className="absolute left-0 bottom-0 w-full bg-slate-900 opacity-70 rounded-b-lg">
        <p className="text-center text-white text-lg p-2 whitespace-normal">
          {title}
        </p>
        <div className="w-10 border-4 border-rose-900 absolute top-[-35px] left-4 rounded-[100%] p-2 text-sm bg-slate-900">
          {Math.round(rating * 10) / 10}
        </div>
      </div>
      <div class=" absolute top-2 right-2">
        {fav ? (
          <img
            onClick={() => removeFromWatchlist(movie)}
            className="h-10 "
            src="./public/star.png"
            alt="  Loading..."
          />
        ) : (
          <img
            onClick={() => addToWatchlist(movie)}
            className="h-8 "
            src="./public/cb.png"
            alt="Loading..."
          />
        )}
      </div>
    </div>
  );
};

export default Moviecard;
