import React, { useEffect, useState } from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { UserContext } from './context';
import Homescreen from './pages/Homescreen';
import Login from './pages/Login';
import { auth } from './firebase';
import Profile from './components/Profile';





function App() {

  const[user,setUser]=useState()

  useEffect(()=>{

    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
        
      }
      })

  })



  return (
    <div className="App">


   
      <Router>
      <UserContext.Provider value={user}>
        <Routes>

          {user ? ( <Route path='/' element={<Homescreen/>}></Route> ) : 
          ( <Route path='/' element={<Login/>}></Route> )}

          <Route path='/profile' element={<Profile/>}></Route>
        

    </Routes>
      </UserContext.Provider>
    </Router>
  
    

  

     

    
     
    </div>
  );
}

export default App;
