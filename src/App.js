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
      const url = 'https://api.liveconnect.in/backend/web/erpsync/get-all-orders?data=dbCode=UAT04M%7Cidx=100%7CuserId=6214%7Cres_format=1'; // site that doesn’t send Access-Control-*
      fetch(proxyurl + url)
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
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
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
