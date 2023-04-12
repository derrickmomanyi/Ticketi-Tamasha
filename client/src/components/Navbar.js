import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';



function Navbar() {
    const navigate = useNavigate();

    const handleClickLogin = ()=> navigate("/login")
    const handleClickSign = ()=> navigate("/sign")
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
                            <div class="d-grid gap-2 d-md-flex justify-content-md-end" style={{paddingLeft:"60%"}}>
                                <button onClick={handleClickLogin} class="btn btn-primary me-md-2" type="button">Login</button>
                                <button onClick={handleClickSign} class="btn btn-primary" type="button">SignUp</button>
                            </div>
                        </ul>
                    </div>
            </nav>
        </>
    )
}
export default Navbar;