import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/user";


function EachEvent(){
    const [isLoaded, setIsLoaded] = useState(false)
    const [event, setEvent] = useState([])
    const { user } = useContext(UserContext) 
    const { id } = useParams();
    

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
    return(
        <>
        <h1>{title}</h1>
        
        </>
    )
}
export default EachEvent;