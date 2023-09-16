import React, { useRef,useState } from 'react'
import { auth } from '../firebase'

function Signin() {
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')




  const register=(e)=>{
    e.preventDefault()

    auth.createUserWithEmailAndPassword(email,password)
    .then((res)=>{console.log(res)}).catch((err)=>{alert(err.message)})

  
    
  }


  const signin=(e)=>{
    e.preventDefault()

    auth.signInWithEmailAndPassword(email,password).then((res)=>{
      console.log(res)
    }).catch((err)=>{alert(err.message)})
    
  }

  return (
    <div className='bg-black/95 px-12 pt-10 pb-10 md:py-16 md:px-20 z-50  flex flex-col rounded-xl'>

      <h1 className='text-white text-3xl font-semibold mb-5'>Sign In</h1>
          <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder='Email Adress' className='email-input'/>
          <input  onChange={(e)=>setPassword(e.target.value)}  value={password} type="password" placeholder='password' className='password-input'/>
          <button  onClick={signin} className='bg-[#e50914] text-sm text-white font-semibold py-2 rounded-md mb-4 md:py-3 md:text-[0.9rem]'>Sign In</button>
            <h4><span className='text-gray-400 text-xs md:text-sm'>New to Neflix?</span>
            <span onClick={register}  className='text-white md:text-sm text-xs cursor-pointer hover:underline'> Sign up now.</span></h4>
      </div>

  )
}

export default Signin