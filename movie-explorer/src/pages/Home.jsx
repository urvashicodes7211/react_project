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
    return (
        <>
            <Hero />

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