import {getAverage} from '../../Helpers.js'

export default function MyListSummary({selectedMovies}){
    const avgRating = getAverage(selectedMovies.map(m => m.vote_average));
    const avgUserRating = getAverage(selectedMovies.map(m => m.userRating));
    const avgDuration = getAverage(selectedMovies.map(m => m.runtime));
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
            <i className="bi bi-stars text-warning"></i>
            <span>{avgUserRating.toFixed(2)}</span>
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