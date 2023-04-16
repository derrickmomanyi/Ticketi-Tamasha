import React from "react";



function Calendar(){


  var gapi = window.gapi 
//   var CLIENT_ID = ""
//   var API_KEY = ""
//   var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
//   var SCOPES = "https://www.googleapis.com/auth/calendar.events"

    function handleClick(){
        gapi.load('client:auth2', () => {
            console.log('loaded client')

            // gapi.client.init({
            //     apiKey: API_KEY,
            //     clientId: CLIENT_ID,
            //     discoveryDocs: DISCOVERY_DOCS,
            //     scope: SCOPES,
            //   })

            //   gapi.client.load('calendar', 'v3', () => console.log('bam!'))
            //   gapi.auth2.getAuthInstance().signIn()
              
      
           
    })
}

    return(
        <>
        <button  type="button" className="btn btn-success calendar" onClick={handleClick}>SET REMINDER</button>        
        
        </>
    )
}
export default Calendar;