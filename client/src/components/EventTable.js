import React, { useState } from "react";


function EventTable( {price, endTimeFormatted} ){
    const [earlyBirdTicket, setEarlyBirdTicket] = useState(0);
    const [advanceTicket, setAdvanceTicket] = useState(0);
    const [VIPTicket, setVIPTicket] = useState(0);


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
        
        
        </>
    )
}
export default EventTable;