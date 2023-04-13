import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import CustomerEvents from './components/CustomerEvents';
import OrganizerEvents from './components/OrganizerEvents';
import AddEvent from './components/AddEvent';
import Layout from './components/Layout';
import Home from './components/Home';

function App() {

  return (
    <BrowserRouter>
    <div className="App">      

    <Routes> 
      <Route path = '/' element = { <Layout />}/> 
      <Route index element = { <Home />}/>      
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