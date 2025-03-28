import { useEffect, useState } from "react";

const getAverage = (array) => array.reduce((sum, value) => sum + value / array.length, 0);

const api_key = "be512d823a55f1c8498820c2938aa561";
const query = 'father'

export default function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovies, setSelectedMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {    
    async function getMovies() {
      try{
        setLoading(true);
        setError('');
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}`)
        if(!res.ok){
          throw new Error("Unknown error.")
        }
        const data = await res.json();
        if(data.total_results === 0){
          throw new Error("Movie not found");
        }
        setMovies(data.results)
      }
      catch(err){
        setError(err.message);
      }
      setLoading(false);
    }
    getMovies();
  }, [])


  return (
    <>
    <Nav movies={movies}>
      <Logo />
      <Search />
      <NavSearchResult movies={movies}/>
    </Nav>
    <Main>
    <div className="row mt-2">
      <div className="col-md-9 mb-2">
        <ListContainer>
          {/* {loading ? <Loading /> : <MovieList movies={movies}/>} */}
          {loading && <Loading /> }
          {!loading && !error && <MovieList movies={movies}/>}
          {error && <ErrorMessage message={error} />}
        </ListContainer>
      </div>
      <div className="col-md-3">
       <ListContainer>
        <>
          <MyListSummary selectedMovies={selectedMovies} />
          <MyMovieList selectedMovies={selectedMovies} />
          </>
       </ListContainer>
      </div>
    </div>
    </Main>
    </>
  );
}

function ErrorMessage({message}){
  return <div className="alert alert-primary">{message}</div>
}

function Loading(){
  return(
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  )
}

function Nav({children}){
  return (
    <nav className="bg-primary text-white p-2">
    <div className="container">
      <div className="row align-content-center">
        {children}
      </div>
    </div>
  </nav>
  )
}

function Logo(){
  return(
    <div className="col-4"><i className="bi bi-camera-reels me-2"></i>Moview App</div>
  )
}
function Search(){
  return(
    <div className="col-4">
      <input
        type="text"
        className="form-control"
        placeholder="Search movie..."
      />
    </div>
  )
}
function NavSearchResult({movies}){
  return(
    <div className="col-4 text-end">
      <strong>{movies.length}</strong> movies found.
    </div>
  )
}

function Main({children}){
  return(
    <main className="container">
      {children}
    </main>
  )
}

function ListContainer({children}){

  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="movie-list">
    <button className="btn btn-sm btn-outline-primary mb-2" onClick={() => setIsOpen(val => !val)}>
      {
        isOpen ? (<i className="bi bi-chevron-up"></i>) : <i className="bi bi-chevron-down"></i>
      }
    </button>
    {isOpen && children}
  </div>
  )
}
function MovieList({movies}){
  return(
    (
      <div className="row row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-4">
        {movies.map((movie) => (
          <Movie movie={movie} key={movie.id}/>
        ))}
      </div>
    )
  )
}
function Movie({movie}){
  return (

    <div className="col-mb-2">
    <div className="card">
      <img src={
        movie.poster_path ?
        `https://media.themoviedb.org/t/p/w440_and_h660_face` + movie.poster_path 
        : './img/no-image.jpg'
      } alt={movie.title} className="card-img-top"/>
      <div className="card-body">
        <h6 className="card-title">{movie.title}</h6>
        <div>
        <i className="bi bi-calendar-date me-1"></i>
        <span>{movie.release_date}</span>
        </div>
      </div>
    </div>
  </div>
  )
}

// function MyMovieListContainer(){
//   const [selectedMovies, setSelectedMovies] = useState(selected_movie_list);
//   const [isOpen2, setIsOpen2] = useState(true);
//   return(
//     <div className="movie-list">
//     <button className="btn btn-sm btn-outline-primary mb-2" onClick={() => setIsOpen2(val => !val)}>
//         {
//           isOpen2 ? (<i className="bi bi-chevron-up"></i>) : <i className="bi bi-chevron-down"></i>
//         }
//       </button>
//         {isOpen2 &&
//           <>
//           <MyListSummary selectedMovies={selectedMovies} />
//           <MyMovieList selectedMovies={selectedMovies} />
//           </>
//         }
//     </div>
//   )
// }

function MyListSummary({selectedMovies}){
  const avgRating = getAverage(selectedMovies.map(m => m.Rating))
  const avgDuration = getAverage(selectedMovies.map(m => m.Duration))
  return(
    <div className="card mb-2">
    <div className="card-body">
      <h5>My List / {selectedMovies.length} movies</h5>
      <div>
        <p>
          <i className="bi bi-star-fill text-warning"></i>
          <span>{avgRating.toFixed(2)}</span>
        </p>
        <p>
          <i className="bi bi-hourglass text-success"></i>
          <span>{avgDuration.toFixed(2)}</span>
        </p>
      </div>
    </div>
  </div>
  )
}
function MyMovieList({selectedMovies}){
  return(
    selectedMovies.map((movie) => (
      <MyListMovie movie={movie} key={movie.id} />
    ))
  )
}
function MyListMovie({movie}){
  return(
    <div className="card mb-2">
        <div className="row">
          <div className="col-4">
            <img src={movie.Poster} alt={movie.Title} className="img-fluid rounded-start" />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h6 className="card-title">{movie.Title}</h6>
              <div>
                <p>
                  <i className="bi bi-star-fill text-warning me-1"></i>
                  <span>{movie.Rating}</span>  
                </p>
                <p>
                  <i className="bi bi-hourglass text-success me-1"></i>
                  <span>{movie.Duration}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}