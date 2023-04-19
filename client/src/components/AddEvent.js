<<<<<<< HEAD
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
=======
=======
>>>>>>> f982d38 (patched)

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
<<<<<<< HEAD
>>>>>>> aab5d2a (Added form clearing after submit)
=======
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
>>>>>>> 3b8d702 (capstone project and gem)
>>>>>>> f982d38 (patched)
export default AddEvent;