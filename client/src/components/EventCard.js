import React from "react";
import { NavLink } from "react-router-dom";
import '../css/EventCard.css';


function EventCard({ event }) {
    const {id, image, title, date, tickets} = event

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
      }

    return (
        <>
            <div className="card " style={{ width: '18rem'}}>
            <NavLink  to={`/events/${event.id}`}>
                <img src={image} className="card-img-top"alt={image} />
                </NavLink>
                <div className="card-body">
                    <div>
                        <p className="card-text">{date}</p>
                    </div>
                    <div>
                        <h5 className="card-title">{truncate(title, 20)}</h5>
                        <p className="card-text">Available tickets:{tickets}</p>
                    </div>


                </div>
            </div>
        </>
    )
}
export default EventCard;
