function Hero({ movie }) {
    return (
        <div
            className="hero"
            style={{
                backgroundImage: `url("${movie.image}")`
            }}
        >
            <div className="hero-content">
                <h1>{movie.title}</h1>

                <p>{movie.description}</p>

                <p>⭐⭐⭐⭐⭐ {movie.rating}</p>

                <button className="hero-btn">
                    ▶ Watch Now
                </button>

                <a
                    href={`/movie/${movie.id}`}
                    className="hero-btn"
                >
                    More Info
                </a>
            </div>
        </div>
    );
}

export default Hero;