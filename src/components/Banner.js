import React, { useEffect, useState } from 'react'
import axios from '../axios'
import requests from '../requests'


function Banner() {
    const [movie,setMovie]=useState([])

    useEffect(()=>{

       axios.get(requests.fetchNetflixOriginals).then((res)=>{
        setMovie(res.data.results[
            Math.floor(Math.random() *res.data.results.length - 1)
        ])
       })

    },[])

  


    

    function truncate(string,n) {
        return string?.length > n ?string.substr(0, n - 1) + "..." : string;
    }




  return (

    <header className='relative w-full h-[600px] object-contain ' style={{
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"center center",

        
        }}>
            
            <div className='absolute z-30 mt-[210px]  ml-7 md:ml-20'>
                <h1 className='text-white text-5xl md:text-6xl font-semibold mb-4'>{movie?.name || movie?.title || movie?.original_name}</h1>

                <div className='space-x-4'>
                    <button className='banner-button'>Play</button>
                    <button className='banner-button'>My list</button>
                </div>

            <div>
                <h1 className='text-white mt-4 text-xs mr-4 md:mr-10'>{truncate(movie.overview,250)}</h1>
            </div>



           


            </div>
            <div className='absolute h-96 w-full bg-gradient-to-t from-black to-transparent bottom-0 '></div>
    
        
    
       
    </header>
   
  )
}

export default Banner