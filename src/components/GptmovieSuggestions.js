import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptmovieSuggestions = () => {
  const gpt = useSelector(store=>store.gpt)

  const {movieResults,movieNames} = gpt;

  if (!movieResults) return null;

  return (
    <div className='p-4 m-4 bg-black text-white bg-opacity-70'>
      {movieNames.map((movieName,index) =>(
      <MovieList 
      key={movieName} 
      title={movieName} 
      movies={movieResults[index]}
      />
      ))}
 
    

      
    </div>
  )
}

export default GptmovieSuggestions
