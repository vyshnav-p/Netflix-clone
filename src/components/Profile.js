import React, { useContext,useState } from 'react'
import {useNavigate } from 'react-router';
import { UserContext } from '../context';
import { auth } from '../firebase'



import Nav from './Nav'

function Profile() {

  const user = useContext(UserContext);

  const[current,setCurrent]=useState('Premium')

  const navigate=useNavigate()


  const logout = ()=>{

    auth.signOut()

    navigate("/")
     

  }


  return (
    <div className='w-full h-screen  flex justify-center items-center'style={{backgroundImage:`url(https://magid.com/wp-content/uploads/2022/03/GettyImages-1198358870-1440x906.jpg)`,backgroundRepeat:'no-repeat',backgroundSize:'100% 100%'}} >
      <div className='absolute w-full h-screen bg-black/20'></div>
        <Nav/>

      
  
       <h1 onClick={()=>{logout()}} className='absolute top-7 right-16  md:top-9 md:right-20 text-white font-bold text-xs  md:text-[0.8rem] px-2 md:px-3 py-1 rounded-md bg-slate-400/30 hover:scale-95 transition uppercase duration-300 z-50 tracking-wider hover:bg-slate-400/70'>Logout</h1>

      

        

        <div className='max-w-[600px] bg-black rounded-md z-50 shadow-black shadow-2xl px-5 md:px-12 py-20'> 

       
       <h1 className='text-3xl text-white md:text-5xl '>Profile</h1>
       
        <div className='flex items-center justify-center gap-5 md:gap-5 pt-3 border-t-2 border-gray-700/40'>
          <img className='w-10 md:w-[4.7rem]' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEWFpz7///+BpDWDpjuApDR8oSl+oi57oSb8/fmvxIqJqkF/oy34+vS2yY3q8N7R3bqOrkrw9Onj69Xr8OGvxYKYtV709/CzyIm7zpbz9+vW4cLO27Wgum2Ws1qTsVSPr03D1KXf6M6ct2apwnu4zJTB0qHT3sGatmTK2K6iu3OCWtI8AAAEMUlEQVR4nO3c63aiPBQGYMgOkS+gnJEiIii2eP83+ImddjyQmSoZsF3v86P9t9feOZCIiYYBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPCNEXExm80szibOgwnrmIZgpDuu8ZbVaZqGVeFPWCOxMvaiNI28uCStNbJlbX5YZFJz+309je3K/kjDbROhLTBx7zNwJ5yoG61lep5GEAtNTc2SyLyUFlOUKL2rNMyW64nsLK4jm2k5folWe5OGmTkaAhPdNF03Gf2x5yLb9aTh7jS0NNvZPaHNauROpM3tSDK7R8Lw0KLui2wG5bidyJreNMzhnUib/shmPG4nit4uNM3aGhqZzRUV5vpWo68gRRq2HBpZ5IrQ6UxH4l/FClWFxdDZYl2vhfoa7x5sqUjDnA+dLeoKN2M+atQV7oeu+j+/D5Xz0H2SeTh4ueCZIvTIz1L5z4YSlYrQy5HXQ8VsCQevh6o9zcuT7Gk0bDwUc7wdeedN66AvjYWGfSkZfc+aaPzPFn0tbWvZO5J/OwXsZPzPh87qtsK9nscd275cBXZHfsy8kzeDydM1kJh/GTsqx10pPsz27nka6Vzjqyhqfn94cfebqd4n8uKsqfNCazszKtqgs9oZul/G3pMGW2dhl0adbfS/ExaW9KUjpn7nzR3u+8c/0zUzAAAAAAAAAAAAAAAA/DwkJv8m7J8ikbSv3px+ao2Mkvx0OjvYTvtFIgnpS123Is7COsXn1ZKXtylLZGUeBIHn6/1CmrEkPzuy4E1zbOKEL98b2q5KTVc/uqB+XF+eORl+su1RJD9bOlrq+eKdCdksrm9HjHqU9wI/v4qSNuXQGon7h55zUeaoR3kvyMsLBFG7th6ekER8llRhT33my6hHeS/411ck7HC3YY8Uybgss9Dtq0/DMeiHkdFzCeRltdw496XEhH+o6t6rSZ12ukFq8KovIzuol1LwY1/+tTOJMS5k7EWK3jtyG2PC5ZCc6zONZ13ZHEo61qlKj5hw/PWu8VRXBU6CjE97Nopt/5Cfuwi9ptg4M0d0PfqBC2FZM5nE7WsYKYfmezNla33L7IOIKvUA+yUNvbaaHx0O3d+sXf2tshM7iqc8Qvgb3/atYMPlS5q8/35h7KB+Dj7IbgvjmT40MSvxes/ZP1he3UjtvzcwFLG3SvlYvbO+6iCfZXheOO65itehRdpBXsye+L0Fc5JGdUvsKxaruHzi8k6IURnn6f3PHTsNs8R4aEc7OmKO3LX5PeM1ylfxxvpWx7oZN9ZFs1Lczb4QtvPt2lDv7Z4WnX7shiXxvg7DKHIv9j22m0aLsPay3cbpfoZG74+0jIrouAkluU4OxX+dqmq6f4dDsS4l/8Ou/HuhrtCzfXf35zt3GwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjOF/yuszsUKzmWMAAAAASUVORK5CYII=" alt="" />
           <div>
            <h3 className='bg-gray-500/40 p-3 pr-20 text-gray-400 hover:text-white text-sm md:text-lg md:p-6 md:pr-64'>{user ? user.email : "logged out"}</h3>

           </div>
        </div>

        <div className='flex flex-col items-center space-y-5'>
         <h3 className='text-white mt-7 mb-5 md:text-2xl'> PLANS  <span className='text-xs md:text-sm'> ( current : {current} ) </span></h3>
         
         
         <div className='flex items-center gap-24 md:gap-64'>
          <div className='flex flex-col text-gray-300 text-sm md:text-base'>
          <h1>Netflix Standard </h1>
          <h1>1080p</h1>
          </div>
          <button onClick={()=>{setCurrent('standard')}} className={current==='standard' ? 'subscribed-button'  :'subscribe-button'}>{current === 'standard' ? 'Subscribed' : 'Subscribe' }</button>
         </div>

           
         <div className='flex items-center gap-[120px] md:gap-[285px]'>
          <div className='flex flex-col text-gray-300 text-sm md:text-base'>
          <h1 >Netflix Basic</h1>
          <h1>480p</h1>
          </div>
          <button onClick={()=>{setCurrent('Basic')}}  className={current === 'Basic' ? 'subscribed-button'  :'subscribe-button'}>{current === 'Basic' ? 'Subscribed' : 'Subscribe' }</button>
         </div>

            
         <div className='flex items-center gap-[100px] md:gap-[260px]'>
          <div className='flex flex-col text-gray-300 text-sm md:text-base'>
          <h1 >Netflix Premium</h1>
          <h1>4k+HDR</h1>
          </div>
          <button onClick={()=>{setCurrent('Premium')}} className={current === 'Premium' ? 'subscribed-button': 'subscribe-button'}>{current === 'Premium' ? 'Subscribed' : 'Subscribe' }</button>
         </div>

        </div>
            
        </div>
    </div>
  )
}

export default Profile