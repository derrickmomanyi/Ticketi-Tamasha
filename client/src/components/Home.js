import React from "react";
// import { useContext } from "react";
// import { UserContext } from "../context/user";
import '../css/Home.css';
import EventCard from "./EventCard";



function Home({ events, handleSearch, search }) {
    // const { user } = useContext(UserContext)

    return (
        <>
            <div className="home row" id="home">
                <div className="transbox">
                    <div className="text-home">
                        <h1>An Event To Remember for Life!</h1>
                        <p>Less work, more play. <br /> Whether you're into online streams, <br /> Weekend festivals or daytime get-togethers <br /> We have something for you. </p>
                        <form action="" className="searchbar">
                            <input type="search" className="form-control icon" required name="search" value={search} onChange={handleSearch} placeholder="Search event by category"></input>
                        </form>
                    </div>
                </div>
            </div><br />

            <div className="events-body">
                <div className="card-heading col-md-12">
                    <h2 >Events in Kenya</h2>
                    {/* <h5>Buy tickets in advance to popular events</h5> */}
                </div>
                <div className="row">
                    {events.map(event =>
                        <EventCard key={event.id} event={event} />
                    )}
                </div>
            </div>
        </>
    )
}
export default Home;