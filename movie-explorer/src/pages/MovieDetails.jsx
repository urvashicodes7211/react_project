import "./info.css";

function MovieDetails() {
  return (
    <div className="container">

      <div className="poster">
        <img
          src="/image/poster/taare Zameen par.jpg"
          alt="Taare Zameen Par"
        />
      </div>

      <div className="details">

        <h1>Taare Zameen Par</h1>

        <div className="rating">
          ⭐ 8.3 / 10
        </div>

        <div className="info">
          <p><strong>Release Date:</strong> 21 December 2007</p>
          <p><strong>Runtime:</strong> 165 min</p>
          <p><strong>Genres:</strong> Drama, Family</p>
          <p><strong>Language:</strong> Hindi</p>
          <p><strong>Director:</strong> Aamir Khan</p>
          <p><strong>Writer:</strong> Amole Gupte</p>
          <p><strong>Production:</strong> Aamir Khan Productions</p>
          <p><strong>Budget:</strong> ₹12 Crore</p>
          <p><strong>Revenue:</strong> ₹98+ Crore</p>
        </div>

        <h2>Overview</h2>

        <p className="overview">
          Eight-year-old Ishaan struggles with dyslexia and is misunderstood
          by everyone around him. A compassionate art teacher discovers his
          hidden talent and helps him regain confidence.
        </p>

        <h2>Cast</h2>

        <ul>
          <li>Aamir Khan</li>
          <li>Darsheel Safary</li>
          <li>Tisca Chopra</li>
          <li>Vipin Sharma</li>
          <li>Tanay Chheda</li>
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