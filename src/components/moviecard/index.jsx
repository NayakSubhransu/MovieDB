
const Moviecard = ({
  movie,
  fav,
  addToWatchlist,
  removeFromWatchlist,
  title,
  imgURL
}) => {


  return (
    <div className=" hover:scale-110 duration-300 cursor-pointer relative m-4 rounded-[1rem] overflow-hidden">
      <img
        className="h-[18rem] w-[13rem] object-cover rounded-lg"
        src={`https://image.tmdb.org/t/p/original${imgURL}`}
        alt={title}
      />
      <div className="absolute left-0 bottom-0 w-full bg-slate-900 opacity-70 rounded-b-lg">
        <p className="text-center text-white text-lg p-2 whitespace-normal">{title}</p>
      </div>
      <div class=" absolute top-2 right-2">

        {fav ? <img onClick={() => removeFromWatchlist(movie)} className="h-10 " src="./public/star.png" alt="  Loading..." />
          : <img onClick={() => addToWatchlist(movie)} className="h-8 " src="./public/cb.png" alt="Loading..." />}
      </div>

    </div>
  );
}

export default Moviecard;