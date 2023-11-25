import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import {API_OPTIONS} from "../utils/constants"


const useMovieTrailer = (movieId) => {
    

    const dispatch = useDispatch();

    const TrailerVideo = useSelector(store => store.movies.trailerVideo)




    //fetchTrailer video and updating the store with trailer video data ----
const getMovieVideos = async ()=>{
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`,API_OPTIONS);

    const json = await data.json();
    // console.log(json)
    const filterData = json.results.filter(video => video.type === "Trailer");

    const Trailer = filterData.length ? filterData[0] : json.results[0]

   
    dispatch(addTrailerVideo(Trailer));

}
useEffect(()=>{
    if (!TrailerVideo) getMovieVideos();

 
},[])
}

export default useMovieTrailer
