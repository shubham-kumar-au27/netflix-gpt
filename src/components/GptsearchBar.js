import React from 'react';
import lang from '../utils/languageconstants';
import { useSelector } from 'react-redux';


const GptsearchBar = () => {

    const preferredLang = useSelector(store => store.config.lang)
  return (
    <div className='pt-[20%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12'>
            <input 
            type='text' 
            className=' p-4 m-4 col-span-9' 
            placeholder={lang[preferredLang].gptSearchPlaceholder}/>
            <button 
            className='col-span-3 py-2 px-4 bg-red-600 text-white m-4'
            >{lang[preferredLang].search}</button>
        </form>
    </div>
  )
}


export default GptsearchBar
