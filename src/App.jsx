import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Post from "./Pages/Post/Post";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from "react";
import setCookie from "./Hooks/useSetCookie";
import getCookie from "./Hooks/useGetCookie";
import deleteCookie from "./Hooks/useDeleteCookie";
import axios from 'axios'

const App = () => {
  console.log(getCookie('userId'))
  console.log(getCookie('username'))
  const isAuth = getCookie('userId');
  const [ user, setUser ] = useState(null);
  useEffect(() => {
    
    const getUser = () => {
      axios.get("https://file-api-sadek.herokuapp.com/auth/login/success", { withCredentials: true }).then((res) => {
            console.log(res);
            if (res.data) {
                setUser(res.data.user2);
            }
        })
    }
    getUser()
   
  }, []);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home user={user}/>} />
        <Route path='/login' element={
         isAuth ?  <Navigate to='/' /> : <Login user={user}/> 
        }/>
        <Route path='/post/:id' element={
          isAuth ?  <Post user={user}/> : <Navigate to='/login' /> 
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
