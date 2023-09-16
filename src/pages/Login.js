import React, { useState } from 'react'
import Signin from '../components/Signin'

function Login() {
    const[signIn,setSignIn]=useState(false)
  return (

    <div className='w-full h-screen relative object-contain flex justify-center'
     style={{backgroundImage: `url("https://assets.nflxext.com/ffe/siteui/vlv3/83e8c151-107d-4e8f-b95a-d2ba99d49bb9/f1ac72e1-5adc-4caf-bceb-e8ec775414ac/IN-en-20230213-popsignuptwoweeks-perspective_alpha_website_medium.jpg")`, 
      backgroundSize:"cover",}}>
        <div className=' absolute w-full h-screen bg-gradient-to-b  from-black/90 to-black/20'></div>

        <div>
            <img className='fixed left-0 top-0 w-24 object-contain pl-3 pt-3 md:w-36 md:pl-5' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
        </div>

        <button onClick={()=>{setSignIn(true)}} className='text-white fixed right-0 top-0 px-3 py-1 rounded-sm bg-[#e50914] hover:scale-110 font-bold transition trasform duration-200 text-sm mt-5 mr-5 md:px-5 md:py-2 md:mr-7 md:mt-7'>Sign in</button>
         <div className='absolute top-[25%] md:p-10 text-center'>
            
           {signIn ? (<Signin/>) : (
                      <>
                   <h1 className='text-white md:text-5xl font-semibold text-4xl px-14'>Unlimited films,TV programmes and more.</h1>
                   <h2 className='text-white mt-5 md:text-2xl  text-lg '>Watch anywhere. Cancel at any time.</h2>
                   <h3 className='text-white mt-10 font-light text-sm md:text-[1rem] md:font-light '>Ready to watch? Enter your email to create or restart your membership</h3>
                   <div className='pt-4 '>
                   <form>
                       <input className='w-[50%] max-w-[600px] border-none cursor-pointer pl-4 py-2 outline-none' type="email" placeholder='Email Adress' />
                       <button onClick={()=>{setSignIn(true)}} className='text-white  border-none font-semibold px-3 bg-[#e50914]  py-2'>GET STARTED  </button>
                       </form>
                   </div>
                   </>
           )}
     
           
         </div>
       
     </div>

    

   
  )
}

export default Login