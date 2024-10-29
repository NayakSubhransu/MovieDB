const movielist = {
    1: "Trending",
    2: "Top Rated",
    3: "In Cinema",
    4: "Upcoming"
};

const Movielist = ({ curr, nextCategory, prevCategory }) => {
    return (
        <div className="flex justify-center items-center gap-4 my-4">
            <img
                onClick={prevCategory}
                className="h-10  hover: transition-transform transform hover:-translate-x-1 cursor-pointer"
                src="./public/backArrow.png"
                alt="Previous Category"
            />
            <p className="text-center text-6xl font-bold">{movielist[curr]}</p>
            <img
                onClick={nextCategory}
                className="h-10  hover: transition-transform transform hover:translate-x-1 cursor-pointer"
                src="./public/frontArrow.png"
                alt="Next Category"
            />
        </div>
    );
};

export default Movielist;