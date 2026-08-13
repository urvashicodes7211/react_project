import { Link } from "react-router-dom";

function MovieCard({ movie }) {
    return (
        <div className="col-6 col-md-4 col-lg-3">
            <div className="card h-100">

                <Link to={`/movie/${movie.id}`}>
                    <img
                        src={movie.image}
                        className="card-img-top"
                        alt={movie.title}
                    />
                </Link>

                <div className="card-body">
                    <h5 className="card-title">
                        {movie.title}
                    </h5>
                </div>

            </div>
        </div>
    );
}

export default MovieCard;