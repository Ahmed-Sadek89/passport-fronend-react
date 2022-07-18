import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Post from "./Pages/Post/Post";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from "react";
import setCookie from "./Hooks/useSetCookie";
import getCookie from "./Hooks/useGetCookie";
import deleteCookie from "./Hooks/useDeleteCookie";


const App = () => {
  console.log(getCookie('userId'))
  console.log(getCookie('username'))
  const isAuth = getCookie('userId');
  const [ user, setUser ] = useState(null);
  useEffect(() => {
    const getUser = () => {
      fetch("https://file-api-sadek.herokuapp.com/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then( (res) => {
          console.log(res);
          const { user } = res
          const {userId} = user[0]
          if ( user.length > 0 ) { 
            console.log(user?.username);
            setCookie('userId', JSON.stringify(userId))
            setUser(...user);
          } else {
            deleteCookie('userId');
            setUser([]);
          }
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
