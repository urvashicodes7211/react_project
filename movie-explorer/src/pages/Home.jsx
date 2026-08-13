import Hero from "../components/Hero"
import MovieSection from "../components/MovieSection";

import {
    top10,
    trending,
    popularMovies,
    topRated,
    upcoming,
    nowPlaying,
    popularTVShows,
    topRatedTVShows
} from "../data/Home-movies";

function Home() {
    const homeHeroMovie = {
        id: 1,
        title: "TAARE ZAMEEN PAR",
        image: "/poster/taare Zameen par.jpg",
        description:
            "An 8-year-old boy with dyslexia discovers his true potential after an inspiring art teacher changes the way he sees the world.",
        rating: "8.3"
    };
    return (
        <>
            <Hero movie={homeHeroMovie} />

            <MovieSection
                title="🔥 Top 10 Today"
                movies={top10}
            />

            <MovieSection
                title="Trending Today"
                movies={trending}
            />

            <MovieSection
                title="Popular Movies"
                movies={popularMovies}
            />

            <MovieSection
                title="Top Rated"
                movies={topRated}
            />

            <MovieSection
                title="Upcoming"
                movies={upcoming}
            />

            <MovieSection
                title="Now Playing"
                movies={nowPlaying}
            />

            <MovieSection
                title="Popular TV Shows"
                movies={popularTVShows}
            />

            <MovieSection
                title="Top Rated TV Shows"
                movies={topRatedTVShows}
            />
        </>
    );
}

export default Home;