import React from "react";


function PaymentForm(){

    return(
        <>
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
                                      

                    <button className="btn pay" type="submit">Proceed To Pay</button>
                    </div>                    
       
                </form>
        
        
        </>
    )
}
export default PaymentForm;