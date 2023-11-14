import React from 'react'
import Header from './Header'
import useNowPayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'


const Browse = () => {
  useNowPayingMovies()

 
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
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
