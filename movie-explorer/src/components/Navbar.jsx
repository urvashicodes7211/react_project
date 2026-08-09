function Navbar() {
    return (
        <header>
            <nav className="navbar-custom">

                <a href="/" className="logo">
                    CINEXA
                </a>

                <div className="nav-link">
                    <a href="/">Home</a>
                    <a href="/movies">Movies</a>
                    <a href="/watchlist">Watchlist</a>
                </div>

                <form className="d-flex search-form">
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                    />

                    <button
                        className="btn btn-warning"
                        type="submit"
                    >
                        Search
                    </button>
                </form>

            </nav>
        </header>
    );
}

export default Navbar;