import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Post from "./Pages/Post/Post";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from "react";


const App = () => {
 
  const [ user, setUser ] = useState(null);
  useEffect(() => {
    const getUser = () => {
      const proxyurl = "https://file-api-sadek.herokuapp.com/auth/login/success";
      fetch(proxyurl)
      // fetch("https://file-api-sadek.herokuapp.com/auth/login/success", {
      //   method: "GET",
      //   credentials: "include",
      //   headers: {
      //     "Accept": "application/json",
      //     "Content-Type": "application/json",
      //     "Access-Control-Allow-Credentials": true,
      //     "Access-Control-Allow-Origin": "https://passport-fronend-react.vercel.app",
      //   },
      // })
        .then((response) => response.json())
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
   getUser()
  }, []);

  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home user={user}/>} />
        <Route path='/login' element={
          user ? <Navigate to='/' /> : <Login  user={user}/>
        }/>
        <Route path='/post/:id' element={
          user ? <Post  user={user}/> : <Navigate to='/login' />
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
