import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Post from "./Pages/Post/Post";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from "react";

const App = () => {
 
  const [ user, setUser ] = useState(null);
  useEffect(() => {
    const getUser = () => {
      fetch("https://file-api-sadek.herokuapp.com/auth/login/success", {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status === 200) return response.json();
        throw new Error("authentication has been failed!");
      })
      .then(({user}) => {
        console.log(...user);
        setUser(...user);
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
          <Login  user={user}/>
        }/>
        <Route path='/post/:id' element={
          <Post  user={user}/>
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
