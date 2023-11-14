import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store)=> store.movies)

  return (
  
    <div className=' bg-black'>
      <div className='-mt-52 pl-12 relative z-20'>
        <MovieList title={"Now Playing "} movies={movies?.nowPlayingMovies}/>
        <MovieList title={"trending "} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Popular"} movies={movies?.popularMovies}/>
        <MovieList title={"Upcoming Movies"} movies={movies?.upcomingMovies}/>
        <MovieList title={"Horror Movies"} movies={movies.nowPlayingMovies}/>

      </div>
        

      {/* {
        Movie List -popular
          -MovieCard * n 
        Movie List - Now Playing 
        Movie List - Trending 
        Movie List - horror 

      } */}
    </div>
  )
}

export default SecondaryContainer
