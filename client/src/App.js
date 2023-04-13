import React, { useState, useEffect} from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Events from './components/Events';
import Organise from './components/Organise';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  const [user, setUser] = useState(null);

   //check if user is authorized after logging in
   useEffect(() => {
    fetch('/me')
    .then((res) => {
      if (res.ok){
        res.json().then((user) => {
          setUser(user);
        })
      }
      else{
        res.json().then( (json) => {
          if (json.errors !== undefined) {
            alert(json.errors);
          }
        });
      }
    })
   }, [])
  return (
    <div className="App">
      <Navbar user={ user } setUser={ setUser }/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="events" element={<Events/>} />
      <Route path="organise" element={<Organise/>} />
      <Route path="login" element={<Login setUser={ setUser }/>} />
      <Route path="signup" element={<SignUp setUser={ setUser }/>} />
    </Routes>
    </div>
  );
}

export default App;

