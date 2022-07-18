import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Post from "./Pages/Post/Post";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from 'axios'

const App = () => {
  
  const [ user, setUser ] = useState(null);
  useEffect(() => {
    
    const getUser = () => {
      axios.get("https://file-api-sadek.herokuapp.com/auth/login/success", { 
        withCredentials: true 
      })
      .then(({data}) => {
        console.log(data);
        if (data) {
          setUser(data.user2);
        }
      }).catch(err => {
        console.log(err);
      })
    }
    getUser()
   
  }, []);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home user={user}/>} />
        <Route path='/login' element={
          user ? <Navigate to='/' /> : <Login user={user}/> 
        }/>
        <Route path='/post/:id' element={
          user ? <Post user={user}/> : <Navigate to='/login' /> 
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
