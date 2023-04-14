import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/user";


function Home(){
    const { user } = useContext(UserContext)
    console.log(user?.admin);
    return(
        <>
      {user && !user?.admin ? <h1>Home customer</h1> : ''}
       { user?.admin ? <h1>Home organizer </h1> : ''}
        </>
    )
}
export default Home;