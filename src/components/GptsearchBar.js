import React, { useRef } from 'react';
import lang from '../utils/languageconstants';
import { useSelector } from 'react-redux';
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addGptMovieResults } from '../utils/gptSlice';


const GptsearchBar =  () => {
  const dispatch = useDispatch();
  const preferredLang = useSelector((store)=>store.config.lang)
  const searchText = useRef(null)
//movie Search TMDB--

const searchMovieTmdb = async (movie)=>{
  console.log('movies =>',movie)
  const data =  await fetch("https://api.themoviedb.org/3/search/movie?query="+
  movie
  +"&include_adult=false&language=en-US&page=1",
  API_OPTIONS)

  const json = await data.json()

  // console.log(json.results)

  return json.results;
}
  
    const handleGptSearchClick = async()=>{
      // console.log(searchText)
      const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query :" + 
      searchText.current.value + 
      "only give me names of 5 movie, comma separated like the example result given ahead. Example Results: Gadar2,Sholay,Don,Golmaal,Koi Mil Gaya";
      
      //Make and Api call to GPT API and get Movie Results---

      const gptResults = await openai.chat.completions.create({
        messages:[{role:"user",content:gptQuery}],
        model:"gpt-3.5-turbo"

      })

      if (!gptResults.choices) {
        //To do write error Handling.. 
      }
      // console.log(gptResults.choices?.[0]?.message?.content)
      //Andaz Apna Apna,HearPheri.........
      const gptMovieList = gptResults.choices?.[0]?.message?.content.split(",")
      // console.log(gptMovieList)

      //for each movie search TMDB API----

      const PromiseArray = gptMovieList.map((movie)=> searchMovieTmdb(movie));

      const movieResults = await Promise.all(PromiseArray)

      dispatch(addGptMovieResults({movieNames:gptMovieList,movieResults:movieResults}));


    };

  
  return (
    <div className='pt-[20%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12' 
        onSubmit={(e) =>  e.preventDefault()}
        >
            <input 
            ref={searchText}
            type='text' 
            className=' p-4 m-4 col-span-9' 
            placeholder={lang[preferredLang].gptSearchPlaceholder}/>
            <button 
            className='col-span-3 py-2 px-4 bg-red-600 text-white m-4'
            onClick={handleGptSearchClick}
            >{lang[preferredLang].search}</button>  
        </form>
    </div>
  )
}
export default GptsearchBar
