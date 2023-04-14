import React from "react";
import '../css/EventCard.css';


function EventCard({ event }) {
    console.log(event)
    return (
        <>
            <div className="card" style={{ width: '18rem'}}>
                <img src={event.image} className="card-img-top"alt={event.image} />
                <div className="card-body">
                    <div>
                        <p className="card-text">{event.date}</p>
                    </div>
                    <div>
                        <h5 className="card-title">{event.title}</h5>
                        <p className="card-text">Available tickets:{event.tickets}</p>
                    </div>


                </div>
            </div>
        </>
    )
}
export default EventCard;
