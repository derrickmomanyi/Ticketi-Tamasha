import React from "react";


function Login(){
    return(
        <>
        <div className="card-login">
        <h4>Welcome back!</h4>
        <input className="form-control" type="text" placeholder="Enter Username" name="uname" required/><br/>
        <input className="form-control" type="password" placeholder="Enter Password" name="psw" required/><br/>
        <button className="btn login btn-primary" type="submit">Login</button>
        </div>
        </>
    )
}
export default Login;