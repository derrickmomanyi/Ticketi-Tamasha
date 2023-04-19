<<<<<<< HEAD
import React, { useState, useEffect } from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import CustomerEvents from './components/CustomerEvents';
import OrganizerDrafts from './components/OrganizerDrafts';
import AddEvent from './components/AddEvent';
import Layout from './components/Layout';
import Home from './components/Home';
import EachEvent from './components/EachEvent';
import EachDraft from './components/EachDraft';

function App() {

  const [events, setEvents] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch('/events')
      .then((res) => res.json())
      .then((data) => setEvents(data))
  }, [])


  function handleSearch(e) {
    setSearch(e.target.value)
  }

  const displayEvents = events.filter(event => event.category.toLowerCase().includes(search.toLowerCase()) || event.title.toLowerCase().includes(search.toLowerCase()))
  

  return (
    <BrowserRouter>
      <div className="container-fluid">

        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home events={displayEvents} handleSearch={handleSearch} search={search} />} />
            <Route path="customers/:id/events" element={<CustomerEvents />} />
            <Route path="/organizers/:id/drafts" element={<OrganizerDrafts />} />
            <Route path="addevent" element={<AddEvent />} />
            <Route path="/events/:id" element = {<EachEvent />} />
            <Route path="/drafts/:id" element = {<EachDraft />} />
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>


      </div>
    </BrowserRouter>
  );
}

export default App;
=======
import React, { useState, useEffect } from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import CustomerEvents from './components/CustomerEvents';
import OrganizerDrafts from './components/OrganizerDrafts';
import AddEvent from './components/AddEvent';
import Layout from './components/Layout';
import Home from './components/Home';
import EachEvent from './components/EachEvent';
import EachDraft from './components/EachDraft';
import EditDraft from './components/EditDraft';

function App() {

  const [events, setEvents] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch('/events')
      .then((res) => res.json())
      .then((data) => setEvents(data))
  }, [])


  function handleSearch(e) {
    setSearch(e.target.value)
  }

  const displayEvents = events.filter(event => event.category.toLowerCase().includes(search.toLowerCase()) || event.title.toLowerCase().includes(search.toLowerCase()))
  

  return (
    <BrowserRouter>
      <div className="container-fluid">

        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home events={displayEvents} handleSearch={handleSearch} search={search} />} />
            <Route path="customers/:id/events" element={<CustomerEvents />} />
            <Route path="/organizers/:id/drafts" element={<OrganizerDrafts />} />
            <Route path="addevent" element={<AddEvent />} />
            <Route path="/events/:id" element = {<EachEvent />} />
            <Route path="/drafts/:id" element = {<EachDraft />} />
            <Route path="/editdraft" element = {<EditDraft />} />
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>


      </div>
    </BrowserRouter>
  );
}

export default App;
>>>>>>> f53e410 (Added redirect icon to edit)
