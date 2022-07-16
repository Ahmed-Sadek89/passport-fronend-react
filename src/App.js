import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Post from "./Pages/Post/Post";
import axios from 'axios'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from "react";


const App = () => {
 
  const [ user, setUser ] = useState(null);
  useEffect(() => {
    // const getUser = () => {
    //   // https://file-api-sadek.herokuapp.com/auth/logout
    //   // https://file-api-sadek.herokuapp.com/auth/login/success
    //   // http://localhost:5000/auth/login/success
    //    fetch("https://file-api-sadek.herokuapp.com/auth/login/success", {
    //     method: "GET",
    //     headers: {
    //       "Accept": "application/json",
    //       "Content-Type": "application/json",
    //       "Access-Control-Allow-Origin": "*",
    //     },
    //   })
    //     .then((response) => {
    //       if (response.status === 200) return response.json();
    //       throw new Error("authentication has been failed!");
    //     })
    //     .then((resObject) => {
    //       setUser(resObject.user);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // };
    const getUser = async () => {
      await axios.get('https://file-api-sadek.herokuapp.com/', {
        headers: {
          "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
        }
      })
      .then(res => setUser(res.data.user))
      .catch(err => console.log(err))
    }
    // const getCors = async () => {
    //   await axios.get('https://file-api-sadek.herokuapp.com/', {
    //     headers: {
    //       "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    //     }
    //   })
    //   .then(res => setUser(res.data.auth))
    //   .catch(err => console.log(err))
    // }
    //getCors()
   getUser();
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
