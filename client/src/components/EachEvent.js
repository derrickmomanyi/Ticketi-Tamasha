import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/user";


function EachEvent(){
    const [isLoaded, setIsLoaded] = useState(false)
    const [event, setEvent] = useState([])
    const { user } = useContext(UserContext) 
    const { id } = useParams(); 
    
    const [earlyBirdCount, setEarlyBirdCount] = useState(0);
    const [advanceCount, setAdvanceCount] = useState(0);
    const [VIPCount, setVIPCount] = useState(0);

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


        const earlyBirdSubtotal = earlyBirdCount * earlyBirdPrice;
        const advanceSubtotal = advanceCount *  advancePrice;
        const VIPSubtotal = VIPCount * VIPPrice;
        const totalItems = earlyBirdCount + advanceCount + VIPCount;
        const totalPrice = earlyBirdSubtotal + advanceSubtotal + VIPSubtotal;

      
        

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
                    <th scope="col">Unit Cost</th>
                    <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Early Bird<br/>Closes on {date}</td>
                        <td>Kshs {earlyBirdPrice}</td>
                        <td>Kshs {earlyBirdSubtotal}</td>
                    </tr>
                    <tr>                    
                        <td>Advance Tickets<br/>Closes on {date}</td>
                        <td>Kshs {advancePrice}</td>
                        <td>Kshs {advanceSubtotal}</td>
                    </tr>
                    <tr>                    
                        <td>VIP<br/>Closes {date}</td>
                        <td>Kshs {VIPPrice}</td>
                        <td>Kshs {VIPSubtotal}</td>
                    </tr>
                </tbody>
                </table>

                
            </div>


        </div>
       
        
        </>
    )
}
export default EachEvent;