import { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";


function App() {
  const [movies, setMovies] = useState([]);

  const [searchValue, setSearchValue] = useState('')

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=adb78173`;
    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson);

    if(responseJson.Search) {
      setMovies(responseJson.Search);
    }

  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <div className="container-fluid  movie-app">
      <div className="row navBar d-flex align-items-center mt-4 mb-2">
        <MovieListHeading heading='Movies' />
        <SearchBox heading='Movies' setSearchValue={setSearchValue} />
      </div>
      <div className="row">
        <MovieList Movies={movies} />
      </div>
    </div>
  );
}

export default App;
