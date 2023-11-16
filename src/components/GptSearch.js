import React from 'react'
import GptsearchBar from './GptsearchBar'
import GptmovieSuggestions from './GptmovieSuggestions'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
      <div className='absolute -z-10'>
        <img src={BG_URL}
        alt='logo'
        />
      </div>
      <GptsearchBar/>
      <GptmovieSuggestions/>
    </div>
  )
}

export default GptSearch
