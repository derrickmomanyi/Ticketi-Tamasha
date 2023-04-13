import React, {useState} from "react"
import { useNavigate } from 'react-router-dom';
import '../css/SignUp.css';


function SignUp({ setUser }){
    //customer signup state variables
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState(null)
    const navigate = useNavigate();

    //organizer signup state variables
    const [usernameOrg, setUsernameOrg] = useState("");
    const [emailOrg, setEmailOrg] = useState("");
    const [passwordOrg, setPasswordOrg] = useState("");
    const [passwordConfirmationOrg, setPasswordConfirmationOrg] = useState("");
    const [errorsOrg, setErrorsOrg] = useState(null)

    function handleSubmit(e){
        e.preventDefault();

        const newSignup = {
            username: username,
            email: email,
            password: password,
            password_confirmation: passwordConfirmation
        }
        // console.log(newSignup);

        if (username.length < 4) {
            setErrors("Username must be at least 4 characters long!!");            
          } 
          else if (password.length < 4 ){
            setErrors("Password must be at least 4 characters long!!"); 
          }
          else if (!password.includes('@')){
            setErrors("Password should include an @")
          }
          else if (password !== passwordConfirmation) {
            setErrors("Passwords do not match");            
          } 
          else{
            fetch('/customers', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                  },
                body: JSON.stringify(newSignup) 
            })
            .then((res) => {
                if(res.ok) {
                    res.json().then((user) => setUser(user));
                    navigate(`/login`); 
                }
                else {
                    res.json().then((err) => alert(err.errors));
                }
            })

          } 
    }

    function handleSubmitOrg(e){
        e.preventDefault();

        const newSignupOrg = {
            username: usernameOrg,
            email: emailOrg,
            password: passwordOrg,
            password_confirmation: passwordConfirmationOrg
        }
        // console.log(newSignupOrg);

        if (usernameOrg.length < 4) {
            setErrorsOrg("Username must be at least 4 characters long!!");            
          } 
          else if (passwordOrg.length < 4 ){
            setErrorsOrg("Password must be at least 4 characters long!!"); 
          }
          else if (!passwordOrg.includes('@')){
            setErrorsOrg("Password should include an @")
          }
          else if (passwordOrg !== passwordConfirmationOrg) {
            setErrorsOrg("Passwords do not match");            
          } 
          else{
            fetch('/organizers', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                  },
                body: JSON.stringify(newSignupOrg) 
            })
            .then((res) => {
                if(res.ok) {
                    res.json().then((user) => setUser(user));
                    navigate(`/login`); 
                }
                else {
                    res.json().then((err) => alert(err.errors));
                }
            })

          } 
    }

    return(
        <>
        <div className="signup">
        
        
        <div className="card-signup">
        <form onSubmit = {handleSubmit}>
            <h4>Customer Sign Up</h4>

            <input className="form-control" 
                type="text" 
                placeholder="Enter Username"
                value = {username} 
                name="username" 
                required
                onChange ={(e) => setUsername(e.target.value)}/>
            <br/>

            <input className="form-control"
                type="email" 
                placeholder="Enter Your Email" 
                name="email" 
                value={email}
                onChange ={(e) => setEmail(e.target.value)}
                required/>
            <br/>

            <input className="form-control" 
                type="password" 
                placeholder="Enter Password" 
                name ='password'
                value = {password} 
                required
                onChange ={(e) => setPassword(e.target.value)}/>
            <br/>

            <input className="form-control"
                type="password"
                placeholder="Match Your Password"
                name="passwordConfirmation" 
                value = {passwordConfirmation}
                onChange ={(e) =>  setPasswordConfirmation(e.target.value)}
                required/>
            <br/>

            <p style={{color: 'red'}}>{errors}</p>

            <button className="btn login btn-primary" type="submit">Create Account</button>
            </form>
        </div>  
       

         
        <div className="card-signup2">

        <form onSubmit={handleSubmitOrg}>

        <h4>Organiser Sign Up</h4>

            <input className="form-control" 
                type="text" 
                placeholder="Enter Username"
                value = {usernameOrg} 
                name="username" 
                required
                onChange ={(e) => setUsernameOrg(e.target.value)}/>
            <br/>

            <input className="form-control"
                type="email" 
                placeholder="Enter Your Email" 
                name="email" 
                value={emailOrg}
                onChange ={(e) => setEmailOrg(e.target.value)}
                required/>
            <br/>

            <input className="form-control" 
                type="password" 
                placeholder="Enter Password" 
                name ='password'
                value = {passwordOrg} 
                required
                onChange ={(e) => setPasswordOrg(e.target.value)}/>
            <br/>

            <input className="form-control"
                type="password"
                placeholder="Match Your Password"
                name="passwordConfirmation" 
                value = {passwordConfirmationOrg}
                onChange ={(e) =>  setPasswordConfirmationOrg(e.target.value)}
                required/>
            <br/>

            <p style={{color: 'red'}}>{errorsOrg}</p>

        
        <button className="btn login btn-primary" type="submit">Create Account</button>
        </form>
        </div> 
        
        </div>     
         </>
    )
}
export default SignUp;