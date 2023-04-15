import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/user";


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

        const {title, image, category, description, hosted_by, featuring, dress_code, location, date, time ,tickets, price} = event
        
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
        
        

    return(
        <>
        <div className="event_body">
            <div className="event-title">
                 <h1>{title}</h1>
            </div>
            <div className="event-details">

            </div>
            <div className="event-highlight">
                <p> Get your events to {title}</p>
                <span>KIndly indicate how many tickets you'd like</span>
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
                        <td>Early Bird<br/>Closes on {date}</td>
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
                        <td>Advance Tickets<br/>Closes on {date}</td>
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
                        <td>VIP<br/>Closes {date}</td>
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
            <div className="payment_details">

            </div>


        </div>
       
        
        </>
    )
}
export default EachEvent;