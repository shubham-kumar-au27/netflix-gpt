import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS } from '../utils/constants'
import { addUpcomingMovies } from '../utils/moviesSlice'

const useUpcomingMovies = () => {
    const dispatch = useDispatch()
    const getUpcomingMovies = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
        API_OPTIONS)
        const upcomingMovies = await data.json()

        console.log(upcomingMovies.results)
        
    
        dispatch(addUpcomingMovies(upcomingMovies.results))

    }
    useEffect(()=>{
        getUpcomingMovies()
    },[])
}

export default useUpcomingMovies
