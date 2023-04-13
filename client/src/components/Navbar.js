import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';



function Navbar({user, setUser}) {
    const navigate = useNavigate();

    // const handleClickLogin = ()=> navigate("/login")
    // const handleClickSign = ()=> navigate("/sign")


    function handleClickLogout(){
        fetch('/logout', {
            method: 'DELETE'
          })
          .then((res) => {
            if (res.ok) {
              setUser(false);
              navigate(`/`); 
              
            }
          });
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid" style={{ height: "7vh" }}>
                    <a className="navbar-brand" href="/" style={{ color: "#008080" }}>
                        <strong>LOGO</strong>
                    </a>
                        <ul
                            className="navbar-nav me-auto mb-2 mb-lg-0"
                            style={{ paddingLeft: "50%" }}
                        >
                            <li className="nav-item">
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/events">Events</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/organise">Organise</NavLink>
                            </li>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-end" style={{paddingLeft:"60%"}}>

                               {user ?  <NavLink to='/logout' onClick={ handleClickLogout }><button className="btn btn-primary me-md-2" type="button">Logout</button></NavLink>
                                :  <NavLink to='/login'  ><button className="btn btn-primary me-md-2" type="button">Login</button></NavLink>
                                }

                                { user ? null :
                                    <NavLink to='/signup'>
                                         <button  className="btn btn-primary" type="button">SignUp</button>
                                    </NavLink>
                                }

                               
                            </div>
                        </ul>
                    </div>
            </nav>
        </>
    )
}
export default Navbar;