import React from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Events from './components/Events';
import Organise from './components/Organise';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="events" element={<Events/>} />
      <Route path="organise" element={<Organise/>} />
      <Route path="login" element={<Login/>} />
      <Route path="sign" element={<SignUp/>} />
      </Routes>
    </div>
  );
}

export default App;

