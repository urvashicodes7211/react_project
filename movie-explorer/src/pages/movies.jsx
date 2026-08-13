import MovieHero from "../components/Hero";
import MovieSection from "../components/MovieSection";
import Footer from "../components/Footer";

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
    return (
        <>

            <MovieHero />

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

            <Footer />

        </>
    );
}

export default Movies;