import React, {useState} from "react";


function EditDraftForm( {drafts}){
    console.log(drafts);

    const {title} = drafts
    console.log(title);
    const [titleEdit, setTitleEdit] = useState(title);
    return(
        <>
         <form >
                    <div className="card-addevent">
                    <h3>Create an Event</h3>
                    <input className="form-control form-control-lg"
                        type="text" 
                        // placeholder="Title" 
                        name="title" 
                        value={titleEdit}                           
                        onChange={(e) => setTitleEdit(e.target.value)}                 
                        required/>
                        <br/>
                        <button className="btn login btn-primary btn-lg" type="submit">Create Event</button>
                    </div>
                </form>
        
        </>
    )
}
export default EditDraftForm;