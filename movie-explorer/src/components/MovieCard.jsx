function MovieCard({ movie }) {
    return (
        <div className="col-6 col-md-4 col-lg-3">
            <div className="card h-100">

                <a href={movie.link}>
                    <img
                        src={movie.image}
                        className="card-img-top"
                        alt={movie.title}
                    />
                </a>

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