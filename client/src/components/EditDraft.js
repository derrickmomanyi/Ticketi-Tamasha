import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import EditDraftForm from "./EditDraftForm";


function EditDraft(){

    const { id } = useParams();

    const [drafts, setDrafts] = useState([])
    useEffect(() => {
        fetch(`/drafts/${id}`)
        .then((res) => res.json())
        .then((data) => {
            setDrafts(data)            
        })
    }, [])
   
    
   

    return(
        <>
        <EditDraftForm drafts={ drafts }/>      
        </>
    )
}
export default EditDraft;