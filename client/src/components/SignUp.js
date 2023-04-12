import React from "react";
import './SignUp.css';


function SignUp(){
    return(
        <>
        <div className="signup">
        <div className="card-signup">
        <h4>Customer Sign Up</h4>
        <input className="form-control" type="text" placeholder="Enter Username" name="uname" required/><br/>
        <input className="form-control" type="email" placeholder="Enter Your Email" name="uname" required/><br/>
        <input className="form-control" type="password" placeholder="Enter Password" name="psw" required/><br/>
        <input className="form-control" type="password" placeholder="Confirm Password" name="psw" required/><br/>
        <button className="btn sign btn-primary" type="submit">Create Account</button>
        </div>  
        <div className="card-signup2">
        <h4>Organiser Sign Up</h4>
        <input className="form-control" type="text" placeholder="Enter Username" name="uname" required/><br/>
        <input className="form-control" type="email" placeholder="Enter Your Email" name="uname" required/><br/>
        <input className="form-control" type="password" placeholder="Enter Password" name="psw" required/><br/>
        <input className="form-control" type="password" placeholder="Confirm Password" name="psw" required/><br/>
        <button className="btn sign btn-primary" type="submit">Create Account</button>
        </div> 
        </div>     
         </>
    )
}
export default SignUp;