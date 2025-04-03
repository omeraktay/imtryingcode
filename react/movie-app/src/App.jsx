import { useState } from "react";
import useMovies from "./hooks/useMovies";
import useLocalStorage from "./hooks/useLocalStorage";
import Pagination from "./components/SelectedMovies/Pagination";
import ErrorMessage from './components/SelectedMovies/ErrorMessage';
import Loading from "./components/SelectedMovies/Loading";
import Nav from "./components/Navbar/Nav";
import Logo from './components/Navbar/Logo';
import Search from "./components/Navbar/Search";
import NavSearchResult from "./components/Navbar/NavSearchResult";
import Main from "./components/SelectedMovies/Main";
import ListContainer from "./components/SelectedMovies/ListContainer";
import MovieList from "./components/Movies/MovieList";
import MovieDetails from "./components/Movies/MovieDetails";
import MyListSummary from "./components/SelectedMovies/MyListSummary";
import MyMovieList from "./components/SelectedMovies/MyMovieList";

// const api_key = "be512d823a55f1c8498820c2938aa561";

export default function App() {
  const [selectedMovies, setSelectedMovies] = useLocalStorage([], "selectedMovies");
  const [query, setQuery] = useState("pokemon");
  const [selectedMovie, setSelectedMovie] = useState(null);

  const { movies, loading, error, currentPage, totalPages, totalResults, nextPage, previousPage } = useMovies(query);

  function handleSelectedMovie(id){
    setSelectedMovie(selectedMovie => id === selectedMovie ? null : id);
  }
  function handleUnselectedMovie(){
    setSelectedMovie(null)
  }

  function handleAddToList(movie){
    setSelectedMovies(selectedMovies => [...selectedMovies, movie]);
    handleUnselectedMovie();
  }

  function handleDeleteFromList(id){
    setSelectedMovies(selectedMovies => selectedMovies.filter(m => m.id !== id))
  }




  return (
    <>
    <Nav movies={movies}>
      <Logo />
      <Search query={query} setQuery={setQuery}/>
      <NavSearchResult total_results={totalResults}/>
    </Nav>
    <Main>
    <div className="row mt-2">
      <div className="col-md-9 mb-2">
        <ListContainer>
          {/* {loading ? <Loading /> : <MovieList movies={movies}/>} */}
          {loading && <Loading /> }
          {!loading && !error && (
            <>
            {movies.length > 0 && (
              <>
                <MovieList movies={movies} 
                onSelectMovie={handleSelectedMovie} 
                selectedMovie={selectedMovie}/>
                <Pagination 
                  nextPage={nextPage} 
                  previousPage={previousPage} 
                  currentPage={currentPage}
                  totalPages={totalPages}  
                />
              </>
            )}
            </>
          )}
          {error && <ErrorMessage message={error} />}
        </ListContainer>
      </div>
      <div className="col-md-3">
       <ListContainer>
          {selectedMovie ? (
            <MovieDetails selectedMovie={selectedMovie} 
            onUnselectMovie={handleUnselectedMovie} 
            onAddToList={handleAddToList}
            selectedMovies={selectedMovies}
            />
          ) : (
            <>
              <MyListSummary selectedMovies={selectedMovies} />
              <MyMovieList selectedMovies={selectedMovies} onDeleteFromList={handleDeleteFromList}/>
            </>
            )}
       </ListContainer>
      </div>
    </div>
    </Main>
    </>
  );
}