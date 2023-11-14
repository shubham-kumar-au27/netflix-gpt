import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import {API_OPTIONS} from "../utils/constants"


const useMovieTrailer = (movieId) => {
    

    const dispatch = useDispatch();


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
    getMovieVideos();
},[])
}

export default useMovieTrailer
