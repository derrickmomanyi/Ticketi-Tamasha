import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/user";
import '../css/Home.css';


function Home( {events, handleSearch, search }){
    const { user } = useContext(UserContext)
    console.log(events);



    return(
        <div className="body">
            <div className="banner">
                <div className="heading">
                    <h1>At the heart of the best events</h1>
                </div>
                <div>
                    <h3>Less work, more play. <br/>
                        Whether you're into online streams,weekend festivals or daytime get-togethers; <br/>
                        We have something for you. <br/>
                        Find what you're looking for and join the movement.
                    </h3>
                </div>


            <div>
                    <form action="" className="searchbar">
                        <div>
                            <i className="bi bi-search icon"><svg xmlns="http://www.w3.org/2000/svg" 
                                                                width="16"
                                                                height="16" 
                                                                fill="currentColor" 
                                                                className="bi bi-search" 
                                                                viewBox="0 0 16 16">
                                                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                                                </svg>
                            </i>
                            <input type="search" required  name = "search" value = {search} onChange={handleSearch} placeholder = "Search event by category"></input>
                        </div>
                    </form>
                </div>
            </div>

            <div>
                <h2>Events</h2>
                <h5>Buy tickets in advance to popular events</h5>
                <div className="events-container">
                    {events.map((event) => event.title)}
                </div>
            </div>







      {user && !user?.admin ? <h1>Home customer</h1> : ''}
       { user?.admin ? <h1>Home organizer </h1> : ''}
        </div>
    )
}
export default Home;