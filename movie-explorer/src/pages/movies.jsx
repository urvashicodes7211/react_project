import Hero from "../components/Hero";
import MovieSection from "../components/MovieSection";

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

function Movies() {
    const movieHero = {
        id: 3,
        title: "3 IDIOTS",
        image: "/poster/3 idiots.jpg",
        description:
            "Three friends navigate college life, friendship, dreams, and the pressure to succeed while discovering the true meaning of life.",
        rating: "8.4"
    };
    return (
        <>

            <Hero movie={movieHero} />

            <MovieSection
                title="🔥 Popular"
                movies={popularMovies}
            />

            <MovieSection
                title="⭐ Top Rated"
                movies={topRated}
            />

            <MovieSection
                title="🎥 Now Playing"
                movies={nowPlaying}
            />

            <MovieSection
                title="⏳ Upcoming"
                movies={upcoming}
            />

            <MovieSection
                title="💥 Action"
                movies={actionMovies}
            />

            <MovieSection
                title="😂 Comedy"
                movies={comedyMovies}
            />

            <MovieSection
                title="❤️ Romance"
                movies={romanceMovies}
            />

            <MovieSection
                title="😱 Horror"
                movies={horrorMovies}
            />

        </>
    );
}

export default Movies;