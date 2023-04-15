import React from "react";
import { NavLink } from "react-router-dom";
import '../css/EventCard.css';


function EventCard({ event }) {
    const {image, title, date, location} = event

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
      }

    const dates = new Date(date);
    const dayInWords = dates.toLocaleString("default", { weekday: "long" }).slice(0,3) // "WED"
    const day = dates.toLocaleString("default", { day: "numeric" })// "15"
    const monthInWords = dates.toLocaleString("default", { month: "long" }).slice(0,3) // "APR"
    

    function getOrdinalSuffix(day) {
        const j = day % 10, k = day % 100;
        if (j === 1 && k !== 11) {
          return "st";
        }
        if (j === 2 && k !== 12) {
          return "nd";
        }
        if (j === 3 && k !== 13) {
          return "rd";
        }
        return "th";
      }


         
    return (
        <>
            <div className="card " style={{ width: '18rem'}}>
            <NavLink  to={`/events/${event.id}`}>
                <img src={image} className="card-img-top"alt={image} />
                </NavLink>
                <div className="card-body">                    
                    <div>
                        <h5 className="card-title">{truncate(title, 20)}</h5>
                        <div className="date-box">                       
                            <span>{dayInWords}, {monthInWords} {day}<sup>{getOrdinalSuffix(day)}</sup></span>                        
                        </div>
                        <label>{location.toUpperCase()}</label>                        
                    </div>


                </div>
            </div>
        </>
    )
}
export default EventCard;
