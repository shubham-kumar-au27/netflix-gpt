import React from 'react'
import Header from './Header'
import useNowPayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'


const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)
  useNowPayingMovies()
  usePopularMovies()
  useUpcomingMovies()
  useTopRatedMovies()

 
  return (
    <div>
      <Header/>
      {
        showGptSearch?  (<GptSearch/>) : 
        (
        <>
           <MainContainer/>
          <SecondaryContainer/>
        </>
        )
      }
    
   
      {/* 
        Main Container----
        - Video Background 
        - Video Title 
        
        Secondary Container----
        - Movie Lists *n
          - Cards * n 

      */
        
      }
    </div>
  )
}

export default Browse
