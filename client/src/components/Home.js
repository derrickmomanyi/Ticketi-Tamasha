import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/user";
import '../css/Home.css';
import EventCard from "./EventCard";


function Home({ events, handleSearch, search }) {
    const { user } = useContext(UserContext)
    console.log(events);



    return (
        <>
            <div className="home row" id="home">
                <div className="transbox">
                    <div className="text-home">
                        <h1>What you need, is an Event, to remember for a lifetime!!!</h1>
                        <p>Less work, more play. Whether you're into online streams weekend festivals or daytime get-togethers; we have something for you. Find what you're looking for and join the movement.</p>
                        <form action="" className="searchbar">
                            <input type="search" className="form-control" required name="search" value={search} onChange={handleSearch} placeholder="Search event by category"></input>
                        </form>
                    </div>
                </div>
            </div><br />


            <div className="row">
                <div className="card-heading col-md-12">
                    <h2>Events</h2>
                    <h5>Buy tickets in advance to popular events</h5>
                </div>
                <div className="row">
                    {events.map((event) =>
                        <div className="col-md-3">
                            <EventCard key={event.id} event={event} />
                        </div>

                    )}
                </div>
            </div>







            {user && !user?.admin ? <h1>Home customer</h1> : ''}
            {user?.admin ? <h1>Home organizer </h1> : ''}
        </>
    )
}
export default Home;