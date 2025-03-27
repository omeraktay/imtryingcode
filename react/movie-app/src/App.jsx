import { useState } from "react";

const movie_list = [
  {
    Id: "769",
    Title: "GoodFellas",
    Year: "1990",
    Poster:
      "https://image.tmdb.org/t/p/original/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
  },
  {
    Id: "120",
    Title: "The Lord of the Rings",
    Year: "2001",
    Poster:
      "https://image.tmdb.org/t/p/original/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
  },
  {
    Id: "27205",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://image.tmdb.org/t/p/original/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg",
  },
  
  {
    Id: "105",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://image.tmdb.org/t/p/original/fNOH9f1aA7XRTzl1sAOx9iF553Q.jpg",
  },
];

const selected_movie_list = [
  {
    Id: "769",
    Title: "GoodFellas",
    Year: "1990",
    Poster:
      "https://image.tmdb.org/t/p/original/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
    Duration: 120,
    Rating: 8.4
  },
  {
    Id: "120",
    Title: "The Lord of the Rings",
    Year: "2001",
    Poster:
      "https://image.tmdb.org/t/p/original/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
      Duration: 125,
      Rating: 8.8
  }
];

const getAverage = (array) => array.reduce((sum, value) => sum + value, 0) / array.length;

export default function App() {
  const [movies, setMovies] = useState(movie_list);
  const [selectedMovies, setSelectedMovies] = useState(selected_movie_list);
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
          <MovieList movies={movies}/>
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
          <Movie movie={movie} key={movie.Id}/>
        ))}
      </div>
    )
  )
}
function Movie({movie}){
  return (

    <div className="col-mb-2">
    <div className="card">
      <img src={movie.Poster} alt={movie.Title} className="card-img-top"/>
      <div className="card-body">
        <h6 className="card-title">{movie.Title}</h6>
        <div>
        <i className="bi bi-calendar-date me-1"></i>
        <span>{movie.Year}</span>
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
  const avgRating = getAverage(selected_movie_list.map(m => m.Rating))
  const avgDuration = getAverage(selected_movie_list.map(m => m.Duration))
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
      <MyListMovie movie={movie} key={movie.Id} />
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