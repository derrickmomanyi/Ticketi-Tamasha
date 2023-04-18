import React, {useState} from "react";
import { useContext } from "react";
import { UserContext } from "../context/user";
import '../css/AddEvent.css';


function AddEvent({events}){
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    const [hosted_by, setHosted_by] = useState("")
    const [featuring, setFeaturing] = useState("")
    const [dress_code, setDress_code] =useState("")
    const [location, setLocation] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [tickets, setTickets] = useState("")
    const [price, setPrice] =useState("")
    const { user } = useContext(UserContext)

    const handleSubmit = (e) =>{
        e.preventDefault();
        const event ={title, image, category, description, hosted_by, featuring, dress_code, location, date, time, tickets, price}


        fetch("",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(event)
        })
        .then((res) => {
            if (res.ok){
                setTitle('')
                setImage('')
                setCategory('')
                setDescription('')
                setHosted_by('')
                setFeaturing('')
                setDress_code('')
                setLocation('')
                setDate('')
                setTime('')
                setTickets('')
                setPrice('')
            }
            else{
                // imput error message here
            }
        })
        .catch((error) =>{
            console.log(error);

        });
    };

    
    return(
        <div className="add-Event">
            {user?.admin?<>
                <form onSubmit={handleSubmit}>
                    <div className="card-addevent">
                    <h3>Create an Event</h3>
                    <input className="form-control"
                        type="text" 
                        placeholder="Title" 
                        name="Title" 
                        value={title}   
                        onChange={(e) => setTitle(e.target.value)}                 
                        required/>
                        <br/>

                        <input className="form-control"
                        type="text"
                        placeholder="image"
                        name="image" 
                        value={image}  
                        onChange={(e) => setImage(e.target.value)}                
                        required/>
                        <br/> 

                        <div>
                        <select value={category} onChange={e => setCategory(e.target.value)} className="form-control">
                            <option value="">Choose a category</option>
                            <option value="Music">Music</option>
                            <option value="Sports">Sports</option>
                            <option value="Motor show">Motor show</option>
                            <option value="Culture">Culture</option>
                            <option value="Theatre plays">Theatre plays</option>
                        </select>
                        </div>
                        <br/>


                        <input className="form-control"
                        type="text"
                        placeholder="Hosted_by"
                        name="Hosted_by"  
                        value={hosted_by}
                        onChange={(e) => setHosted_by(e.target.value)}                 
                        required/>
                        <br/> 

                        <input className="form-control"
                        type="text"
                        placeholder="Featuring"
                        name="featuring"  
                        value={featuring}
                        onChange={(e) => setFeaturing(e.target.value)}                 
                        required/>
                        <br/> 

                        <input className="form-control"
                        type="text"
                        placeholder="Dress_code"
                        name="Dress_code"  
                        value={dress_code}
                        onChange={(e) => setDress_code(e.target.value)}                 
                        required/>
                        <br/> 

                        <input className="form-control"
                        type="text"
                        placeholder="Loaction"
                        name="Loaction"  
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}                 
                        required/>
                        <br/> 

                        <input className="form-control"
                        type="Date"
                        placeholder="Date"
                        name="Date"  
                        value={date}
                        onChange={(e) => setDate(e.target.value)}                 
                        required/>
                        <br/> 

                        <input className="form-control"
                        type="time"
                        placeholder="Time"
                        name="Time"  
                        value={time}
                        onChange={(e) => setTime(e.target.value)}                 
                        required/>
                        <br/> 

                        <input className="form-control"
                        type="text"
                        placeholder="tickets"
                        name="tickets"  
                        value={tickets}
                        onChange={(e) => setTickets(e.target.value)}                 
                        required/>
                        <br/> 

                        <input className="form-control"
                        type="text"
                        placeholder="Price"
                        name="Price"  
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}                 
                        required/>
                        <br/> 

                        <textarea className="form-control"
                        type="text"
                        placeholder="Description"
                        name="Description"  
                        value={category}
                        onChange={(e) => setDescription(e.target.value)}                 
                        required/>
                        <br/> 

                        <button className="btn sign btn-primary" type="submit">Create Event</button>
                    </div>
                    
                </form>
            </>:<h3 style={{marginLeft:"35%"}}>Login to add an event</h3>}
        </div>
    )
}
export default AddEvent;