import { useEffect, useState } from "react";
const api_key = "be512d823a55f1c8498820c2938aa561";

export default function useMovieDetails(id){
    const [movie, setMovie] = useState({})
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getMovieDetails() {
          setLoading(true);
          const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`)
          const data = await res.json();
          setMovie(data);
          setLoading(false);
        }
        getMovieDetails()
      }, [id]);
      return {movie, loading}
}