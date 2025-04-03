import { useState } from "react";
import StarRating from "../../StarRating";
import Loading from "../SelectedMovies/Loading";
import useMovieDetails from "../../hooks/useMovieDetails";

export default function MovieDetails({selectedMovie, onUnselectMovie, onAddToList, selectedMovies}){
    const isAddedToList = selectedMovies.map(m => m.id).includes(selectedMovie);
    const [userRating, setUserRating] = useState('');
    const selectedMovieUserRating =  selectedMovies.find(m => m.id === selectedMovie)?.userRating;
    const {movie, loading} = useMovieDetails(selectedMovie)

    function handleAddToList(){
        const newMovie = {
        ...movie,
        userRating
        }
        onAddToList(newMovie); 
    }
    return (
        <>   
        {
            loading ? <Loading /> :  
            <div className="border p-2 mb-3">
            <div className="row">
                <div className="col-4">
                <img src={
                movie.poster_path ?
                `https://media.themoviedb.org/t/p/w440_and_h660_face` + movie.poster_path 
                : './img/no-image.jpg'
            } alt={movie.title} className="img-fluid rounded"/>
                </div>
                <div className="col-8">
                <h6>{movie.title}</h6>
                <p>
                    <i className="bi bi-calendar-date me-1"></i>
                    <span>{movie.release_date}</span>
                </p>
                <p>
                <i className="bi bi-star-fill text-warning"></i>
                <span>{movie.vote_average}</span>
                </p>
                </div>
                <div className="col-12 border-top p-3 mt-3">
                    <p>{movie.overview}</p>
                    <p>
                    { movie.genres?.map((genre) => <span key={genre.id} className="badge text-bg-primary me-1">
                    {genre.name}
                    </span>)}
                    </p>
                    { !isAddedToList ? (
                    <>
                    <div className="my-4">
                        <StarRating maxRating={10} size={20} onRating={setUserRating}/>
                    </div>
                    <button className="btn btn-primary me-1 mb-1" onClick={() => handleAddToList(movie)}>AddToYourList</button>
                    </>
                    ) : (
                        <p className="rounded p-1 text-bg-success">Already in your list. Your rate: <i className="bi bi-star text-warning"></i>{selectedMovieUserRating}</p>
                    )}
                    <button className="btn btn-danger mb-1" onClick={onUnselectMovie}>Close</button>
                </div>
            </div>
            </div>
        }
        </>

    )
}