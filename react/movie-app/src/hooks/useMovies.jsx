import { useEffect, useState } from "react";

const api_key = "be512d823a55f1c8498820c2938aa561";

export default function useMovies(query){

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [totalResults, setTotalResults] = useState(0);

    function nextPage(){
        setCurrentPage(currentPage + 1);
    }
        function previousPage(){
        setCurrentPage(currentPage - 1);
    }

    useEffect(() => {  
        const controller = new AbortController();
        const signal = controller.signal;  
        async function getMovies(page) {
          try{
            setLoading(true);
            setError('');
            const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}&page=${page}`, { signal: signal })
            if(!res.ok){
              throw new Error("Unknown error.")
            }
            const data = await res.json();
            if(data.total_results === 0){
              throw new Error("Movie not found");
            }
            setMovies(data.results);
            setTotalPages(data.total_pages);
            setTotalResults(data.total_results)
          }
          catch(err){
            if(err.name === "AbortError"){
              console.log("aborted...");
            }
            else{
              setError(err.message);
            }
          }
          setLoading(false);
        }
        if(query.length < 3){
          setMovies([]);
          setError("");
          return;
        }
        getMovies(currentPage);
        return () => {
          controller.abort();
        }
      }, [query, currentPage]);

      return { movies, loading, error, currentPage, totalPages, totalResults, nextPage, previousPage }
}