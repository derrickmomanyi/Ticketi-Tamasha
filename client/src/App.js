import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Events from './components/Events';
import Organise from './components/Organise';
import Login from './components/Login';
import SignUp from './components/SignUp';
import CustomerEvents from './components/CustomerEvents';
import OrganizerEvents from './components/OrganizerEvents';
import AddEvent from './components/AddEvent';

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="events" element={<Events/>} />
      <Route path="organise" element={<Organise/>} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path= "customerevents" element={<CustomerEvents />}/>
      <Route path= "organizerevents" element={<OrganizerEvents />} />
      <Route path = "addevent" element = {<AddEvent />}/>
    </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;