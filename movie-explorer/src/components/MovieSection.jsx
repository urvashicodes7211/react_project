import MovieCard from "./MovieCard";

function MovieSection({ title, movies }) {
    return (
        <section className="Mv">
            <h3 className="mvheading">{title}</h3>

            <div className="container">
                <div className="row g-4">
                    {movies.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            movie={movie}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default MovieSection;