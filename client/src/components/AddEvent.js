<<<<<<< HEAD
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
=======

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
>>>>>>> origin/buffer
export default AddEvent;