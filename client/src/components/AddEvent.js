
import React, { useEffect, useState} from "react";
import '../css/AddEvent.css';
import AddEventForm from "./AddEventForm";


function AddEvent(){
       
       const [drafts, setDrafts] = useState([])

       useEffect(() => {
           fetch('/drafts')
             .then((res) => res.json())
             .then((data) => setDrafts(data))
         }, [])
   
        console.log(drafts);   
      const handleAddDrafts = (newDraft) =>{
        const updatedDraft = [...drafts, newDraft]
        setDrafts(updatedDraft)  
      }

    
    return(

        <>
        <AddEventForm onAddDrafts={ handleAddDrafts }/>
        </>


    )
}
export default AddEvent;