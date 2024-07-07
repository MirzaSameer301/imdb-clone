import { FiThumbsUp } from "react-icons/fi";

export default async function MoviePage({ params }) {
  const movieId = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  const movie = await res.json();
  return (
    <div className="w-full">
        <div className=" p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
      <img
        src={`https://image.tmdb.org/t/p/original/${
          movie.backdrop_path || movie.poster_path
        }`}
        alt="pic"
        width={500}
        height={300}
        style={{ maxWidth: "100%", height: "100%" }}
        className="rounded-lg"
      />
      <div className=" p-2">
      <p className="">{movie.overview}</p>
          <h2 className="text-lg font-bold mb-3">
            {movie.title || movie.name}
          </h2>
          <p className="mb-3">
            <span className="font-semibold mr-1">Released Date:</span>
            {movie.release_date || movie.first_air_date}
            </p>
          <p className="flex items-center gap-2 mb-3">
            <span className="font-semibold mr-1">voted:</span>
            <FiThumbsUp/>
            {movie.vote_count}
          </p>
          <p className="mb-3">
          <span className="font-semibold mr-1">Ratings:</span>
          {movie.vote_average}
          </p>
      </div>
        </div>
    </div>
  );
}
