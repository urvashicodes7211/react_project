import "./info.css";
import { useParams } from "react-router-dom";

import {
    popularMovies,
    topRated,
    nowPlaying,
    upcoming,
    actionMovies,
    comedyMovies,
    romanceMovies,
    horrorMovies
} from "../data/movie";


function MovieDetails() {

    const { id } = useParams();

    // બધા movies ને એક array માં લાવીએ
    const allMovies = [
        ...popularMovies,
        ...topRated,
        ...nowPlaying,
        ...upcoming,
        ...actionMovies,
        ...comedyMovies,
        ...romanceMovies,
        ...horrorMovies
    ];

    // URL માંથી આવેલ id પ્રમાણે movie શોધવી
    const movie = allMovies.find((m) => m.id === Number(id));

    // જો movie ના મળે
    if (!movie) {
        return <h1>Movie Not Found</h1>;
    }

    return (
        <div className="container">

            <div className="poster">
                <img
                    src={movie.image}
                    alt={movie.title}
                />
            </div>

            <div className="details">

                <h1>{movie.title}</h1>

                <div className="rating">
                    ⭐ {movie.rating} / 10
                </div>

                <div className="info">

                    <p>
                        <strong>Release Date:</strong>{" "}
                        {movie.releaseDate}
                    </p>

                    <p>
                        <strong>Runtime:</strong>{" "}
                        {movie.runtime}
                    </p>

                    <p>
                        <strong>Genres:</strong>{" "}
                        {movie.genres}
                    </p>

                    <p>
                        <strong>Language:</strong>{" "}
                        {movie.language}
                    </p>

                    <p>
                        <strong>Director:</strong>{" "}
                        {movie.director}
                    </p>

                    <p>
                        <strong>Writer:</strong>{" "}
                        {movie.writer}
                    </p>

                    <p>
                        <strong>Production:</strong>{" "}
                        {movie.production}
                    </p>

                    <p>
                        <strong>Budget:</strong>{" "}
                        {movie.budget}
                    </p>

                    <p>
                        <strong>Revenue:</strong>{" "}
                        {movie.revenue}
                    </p>

                </div>

                <h2>Overview</h2>

                <p className="overview">
                    {movie.overview}
                </p>

                <h2>Cast</h2>

                <ul>
                    {movie.cast.map((actor, index) => (
                        <li key={index}>{actor}</li>
                    ))}
                </ul>

                <div className="buttons">
                    <button>▶ Watch Trailer</button>
                    <button>❤ Add Watchlist</button>
                </div>

            </div>

        </div>
    );
}

export default MovieDetails;