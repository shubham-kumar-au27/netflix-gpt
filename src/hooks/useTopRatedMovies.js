import { useDispatch, useSelector } from "react-redux"
import { addTopRatedMovies } from "../utils/moviesSlice"
import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"


const useTopRatedMovies = () => {
    const dispatch = useDispatch()
    const topRatedMovies = useSelector(store => store.movies.topRatedMovies)

    const getTopRatedMovies = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
        API_OPTIONS
        )

        const topRated = await data.json()

        dispatch(addTopRatedMovies(topRated.results))

    }
    useEffect(()=>{
        if (!topRatedMovies) getTopRatedMovies()

    },[])
  
}

export default useTopRatedMovies
