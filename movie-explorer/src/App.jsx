import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Movies from "./pages/movies";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <main>
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/movies" element={<Movies />} />

          <Route path="/taare-zameen-par" element={<MovieDetails />} />

        </Routes>
      </main>

      <Footer />

    </BrowserRouter>
  );
}

export default App;