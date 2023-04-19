import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom'


    function EditDraft(){
        const { id } = useParams();
        const [draft , setDraft] = useState({
            title: '',
            category: '',
            hostedBy: '',
            featuring: '',
            dressCode: '',
            date: '',
            time: '',
            price: '',
            description: '',
            location: '',
            tickets: '',
           
        })
        
        useEffect(()=> {
            fetch(`/drafts/${id}`)
            .then((res) => res.json())
            .then((data) => setDraft(data))

        }, [id])

        const [title, setTitle] = useState( '')
        const [category, setCategory] = useState( '');
        const [hostedBy, setHostedBy] = useState('');
        const [featuring, setFeaturing] = useState( '');
        const [dressCode, setDressCode] = useState( '');
        const [description, setDescription] = useState('')
        const [location, setLocation] = useState('')
        const [date, setDate] = useState("")
        const [time, setTime] = useState( '' )
        const [tickets, setTickets] = useState( '' )
        const [price, setPrice] = useState( '')
        const [image, setImage] = useState("")
     
    
        useEffect(() => {
            setTitle(draft.title);
            setCategory(draft.category);
            setHostedBy(draft.hosted_by);
            setFeaturing(draft.featuring);
            setDressCode(draft.dress_code);
            setDescription(draft.description)
            setLocation(draft.location)
            setTickets(draft.tickets)
            setPrice(draft.price)
            setTime(draft.time)
        }, [draft]);

        console.log(image);   

        function handleSubmit(e){
            e.preventDefault()
            
        }

        return(
            <>
            <form onSubmit = {handleSubmit}>
                        <div className="card-addevent">
                        <h3>Edit an Event</h3>
                        <input className="form-control form-control-lg"
                            type="text" 
                            placeholder="Title" 
                            name="title" 
                            value={title}                           
                            onChange={(e) => setTitle(e.target.value)}                 
                            required/>
                            <br/>

                            <input className="form-control form-control-lg"                                                                           
                        type="file"
                        name='image'
                        placeholder="Image"
                        onChange={(e) => setImage(e.target.files[0])}               
                        required/>
                        <br/> 

                        <div>
                        <select value={category} onChange={(e) => setCategory(e.target.value)} className="form-control form-control-lg" name='category'>
                            <option value="">Choose a category</option>
                            <option value="Music">Music</option>
                            <option value="Sports">Sports</option>
                            <option value="Motor show">Motor show</option>
                            <option value="Culture">Culture</option>
                            <option value="Theatre plays">Theatre plays</option>
                        </select>
                        </div>
                        <br/>


                        <input className="form-control form-control-lg"
                        type="text"
                        placeholder="Hosted by?"
                        name="hosted_by"  
                        value={hostedBy}                        
                        onChange={(e) => setHostedBy(e.target.value)}                 
                        required/>
                        <br/> 

                        <input className="form-control form-control-lg"
                        type="text"
                        placeholder="Featuring"
                        name="featuring"  
                        value={featuring}                        
                        onChange={(e) => setFeaturing(e.target.value)}              
                        required/>
                        <br/> 

                        <input className="form-control form-control-lg"
                        type="text"
                        placeholder="Dress code"
                        name="dress_code"
                        value={dressCode}                        
                        onChange={(e) => setDressCode(e.target.value)}                 
                        required/>
                        <br/> 

                        <input className="form-control form-control-lg"
                        type="text"
                        placeholder="Location"
                        name="location"  
                        value={location}                        
                        onChange={(e) => setLocation(e.target.value)}                
                        required/>
                        <br/> 

                        <input className="form-control form-control-lg"
                        type="date"
                        placeholder="Date"
                        name="date"  
                        value={date}                        
                        onChange={(e) => setDate(e.target.value)}                 
                        required/>
                        <br/> 

                        <input className="form-control form-control-lg"
                        type="time"
                        placeholder="Time"
                        name="time"  
                        value={time}                        
                        onChange={(e) => setTime(e.target.value)}                 
                        required/>
                        <br/> 

                        <input className="form-control form-control-lg"
                        type="number"
                        placeholder="Tickets"
                        name="tickets" 
                        value={tickets} 
                       onChange={(e) => setTickets(e.target.value)}                
                        required/>
                        <br/> 

                        <input className="form-control form-control-lg"
                        type="number"
                        placeholder="Price"
                        name="price" 
                        value={price}                        
                       onChange={(e) => setPrice(e.target.value)}                
                        required/>
                        <br/> 

                        <textarea className="form-control form-control-lg"
                        type="text"
                        placeholder="Description"                        
                        value={description}                          
                       onChange={(e) => setDescription(e.target.value)}                
                        required/>
                        <br/> 

                         <button className="btn login btn-primary btn-lg" type="submit">Create Event</button>
                        </div>
                    </form>      
            </>
        )
    }
export default EditDraft;