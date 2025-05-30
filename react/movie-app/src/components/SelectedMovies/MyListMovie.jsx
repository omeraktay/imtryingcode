export default function MyListMovie({movie, onDeleteFromList}){
    return(
      <div className="card mb-2">
          <div className="row">
            <div className="col-4">
            <img src={
                movie.poster_path ?
                `https://media.themoviedb.org/t/p/w440_and_h660_face` + movie.poster_path 
                : './img/no-image.jpg'
              } alt={movie.title} className="img-fluid rounded-start"/>
            </div>
            <div className="col-8">
              <div className="card-body">
                <h6 className="card-title">{movie.title}</h6>
                <div>
                  <p>
                    <i className="bi bi-star-fill text-warning me-1"></i>
                    <span>{movie.vote_average}</span>  
                  </p>
                  <p>
                    <i className="bi bi-stars text-warning"></i>
                    <span>{movie.userRating}</span>
                  </p>
                  <p>
                    <i className="bi bi-hourglass text-success me-1"></i>
                    <span>{movie.runtime}</span>
                  </p>
                </div>
                <button className="btn btn-danger" onClick={() => onDeleteFromList(movie.id)}>Delete</button>
              </div>
            </div>
          </div>
        </div>
    )
  }