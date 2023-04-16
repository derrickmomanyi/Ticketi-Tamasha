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
            <div className="event-details-body">
                <img src={image} className="event-image" alt={title}/>
                <div className="date">
                    <span style={{ marginLeft: '45px', color:'white'}}>{dayInWords.toUpperCase()}  </span> <br/>
                    <span style={{ marginLeft: '45px', color:'white'}}>{day}<sup>{getOrdinalSuffix(day)}</sup></span> <br/> 
                    <span style={{ color:'white'}}>{monthInWords.toUpperCase()} 2023</span>
                </div>
                
                <div className="event-details">
                    <div>
                        <label>Runs till:<span>{dayInWords}, {monthInWords} {day}<sup>{getOrdinalSuffix(day)}</sup></span> </label>  <br/>                 
                        <label>Time:<span>{localTime} - {endTimeFormatted}</span> </label> <br/>
                        <label>Location:<span>{location}</span> </label> <br/>
                    </div>
                    <div style={{marginLeft:"100px"}}>
                        <label>Host:<span>{hosted_by}</span> </label> <br/>
                        <label>Featuring:<span>{featuring}</span></label> <br/>
                        <label>Dress Code:<span>{dress_code}</span><br/></label> <br/>
                    </div>                  
                </div>              
            </div>
              <div className="event-description">
                <span>{description}</span>
                </div>
          
            <div className="event-highlight">
                <p> Get your tickets to {title} </p>
                <h6>Kindly indicate how many tickets you'd like</h6>
            </div>
            <div className="event-table">              

                <table className="table">
                <thead className="thead-dark">
                    <tr className="thead-text">
                    <th scope="col">Ticket</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="trow-early">
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
                    <tr  className="trow-vip">                    
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
                    <tr className="trow-total">
                        <td></td>
                        <td></td>
                        <td>TOTAL TICKETS<br/>{totalTickets} Tickets</td>                        
                        <td>Kshs {totalPrice.toFixed(2)}</td>
                    </tr>
                </tbody>
                </table>

            </div>
            <div className="payment-details" id="payment">
                <h3 style={{marginLeft: "580px"}}>Enter Your Details</h3>
                <form >
                    <div >
                    <input className="form-control"
                    type="text" 
                    placeholder="Name" 
                    name="name"                     
                    required/>
                    <br/>

                    <input className="form-control"
                    type="email"
                    placeholder="Email"
                    name="email"                   
                    required/>
                    <br/>  

                    <input className="form-control"
                    type="number"
                    placeholder="Phone Number"
                    name="number"                   
                    required/>
                                      

                    <button className="btn btn-primary pay" type="submit">Proceed To Pay</button>
                    </div>                    
       
                </form>
                <div className="last-div">

                    </div>
            </div>


        </div>
       
        
        </>
    )
}
export default EachEvent;