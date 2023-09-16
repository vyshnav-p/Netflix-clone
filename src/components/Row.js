import axios from '../axios'
import React, { useEffect, useState } from 'react'


function Row({ title, fetchurl, islargerow=false}) {

    const[movies,setMovies]=useState([])

    useEffect(()=>{

        axios.get(fetchurl).then((res)=>{
           setMovies(res.data.results)
           
        
        })

        
        
        
    },[])
    console.log(movies)
   

    const BASE_URL="https://image.tmdb.org/t/p/original/"

  return ( 
    <div className='text-white  pl-3 pr-3 '>

        <h1 className='font-semibold text-2xl mt-8 md:mt-16 ml-6 '>{title}</h1>



     <div className='flex  overflow-x-scroll scrollbar-hide  '>
        
      
       {movies.map(res=>((islargerow && res.poster_path) || (!islargerow && res.backdrop_path)) &&


       (
         
        <img  className={ islargerow ?  "large-cards"  : "small-cards"} 
         src={`${BASE_URL}${islargerow ? res.poster_path : res.backdrop_path}`} alt={res.name} />
       
        )
       
           
      
       )}
     
       
       </div>
   

     
     






    </div>
  )
}

export default Row