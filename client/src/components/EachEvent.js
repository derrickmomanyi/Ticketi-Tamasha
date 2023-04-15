import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/user";
import '../css/EachEvent.css';


function EachEvent(){
    const [isLoaded, setIsLoaded] = useState(false)
    const [event, setEvent] = useState([])
    const { user } = useContext(UserContext) 
    const { id } = useParams(); 
    
    const [earlyBirdTicket, setEarlyBirdTicket] = useState(0);
    const [advanceTicket, setAdvanceTicket] = useState(0);
    const [VIPTicket, setVIPTicket] = useState(0);

    useEffect(() => {
        fetch(`/events/${id}`)
        .then((res) => res.json())
        .then(event => {
          setEvent(event);
          setIsLoaded(true)
      })
    }, [id])
    

        if (!isLoaded) return <h2 className='loading'>Loading...</h2>

        const {title, image, description, hosted_by, featuring, dress_code, location, date, time, price} = event
        
        const earlyBirdPrice = price;
        const advancePrice = price * 2;
        const VIPPrice = price * 4;


        const earlyBirdSubtotal = earlyBirdTicket * earlyBirdPrice;
        const advanceSubtotal = advanceTicket *  advancePrice;
        const VIPSubtotal = VIPTicket * VIPPrice;
        const totalTickets = earlyBirdTicket + advanceTicket + VIPTicket;
        const totalPrice = earlyBirdSubtotal + advanceSubtotal + VIPSubtotal;

        const handleEarlyBirdChange = (event) => {
            setEarlyBirdTicket(parseInt(event.target.value));
          };

        const handleAdvancedChange = (event) => {
        setAdvanceTicket(parseInt(event.target.value));
        };
    
        const handleVIPChange = (event) => {
        setVIPTicket(parseInt(event.target.value));
        };


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

          const localTime = new Date(time).toLocaleString(undefined, {
            hour: "numeric",
            minute: "numeric",
            hour12: true
            
          });
         
          const endTime = new Date(time);
          endTime.setHours(23, 59, 59);
          const endTimeFormatted = endTime.toLocaleString(undefined, {
            hour: "numeric",
            minute: "numeric",
            hour12: true
          });
        
        

    return(
        <>
        <div className="event-body">
            <div className="event-title">
                 <h1>{title}</h1>
                 <a href="#payment"><button  type="button" className="btn btn-danger">BUY TICKET</button></a>
            </div>
            <div className="event-details-body" style={{display:"flex"}}>
                <img src={image} className="event-image" alt={title}/>
                <div className="date">
                    <span style={{ marginLeft: '45px'}}>{dayInWords.toUpperCase()}  </span> <br/>
                    <span style={{ marginLeft: '45px'}}>{day}<sup>{getOrdinalSuffix(day)}</sup></span> <br/> 
                    <span>{monthInWords.toUpperCase()} 2023</span>
                </div>
                
                <div className="event-details">
                    <span>Runs till: {dayInWords}, {monthInWords} {day}<sup>{getOrdinalSuffix(day)}</sup></span> <br/>                    
                    <span>Time: {localTime} - {endTimeFormatted}</span> <br/>
                    <span>Location: {location}</span> <br/>
                    <span>Host: {hosted_by}</span> <br/>
                    <span>Featuring: {featuring}</span><br/>
                    <span>Dress Code: {dress_code}</span><br/>
                    <span>{description}</span>
                </div>

            </div>
            <div className="event-highlight">
                <p> Get your tickets to {title}</p>
                <span>Kindly indicate how many tickets you'd like</span>
            </div>
            <div className="event-table">              

                <table className="table">
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">Ticket</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Early Bird<br/>Closes on {endTimeFormatted}</td>
                        <td>Kshs {earlyBirdPrice.toFixed(2)}</td>
                        <td>
                            <select value={earlyBirdTicket} onChange={handleEarlyBirdChange}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>                            
                            </select>
                         </td>
                        <td>Kshs {earlyBirdSubtotal.toFixed(2)}</td>
                    </tr>
                    <tr>                    
                        <td>Regular<br/>Closes on {endTimeFormatted}</td>
                        <td>Kshs {advancePrice.toFixed(2)}</td>
                        <td>
                            <select value={advanceTicket} onChange={handleAdvancedChange}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>                            
                            </select>
                         </td>
                        <td>Kshs {advanceSubtotal.toFixed(2)}</td>
                    </tr>
                    <tr>                    
                        <td>VIP<br/>Closes {endTimeFormatted}</td>
                        <td>Kshs {VIPPrice.toFixed(2)}</td>
                        <td>
                            <select value={VIPTicket} onChange={handleVIPChange}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>                            
                            </select>
                         </td>
                        <td>Kshs {VIPSubtotal.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>TOTAL TICKETS<br/>{totalTickets} Tickets</td>                        
                        <td>Kshs {totalPrice.toFixed(2)}</td>
                    </tr>
                </tbody>
                </table>

            </div>
            <div className="payment_details" id="payment">

            </div>


        </div>
       
        
        </>
    )
}
export default EachEvent;