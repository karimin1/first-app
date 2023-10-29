import React,{ useState,useEffect }  from 'react'
import axios from "axios"
 function Flighting(){
    const [flights,setFlight]=useState([])
    
    useEffect(()=>{
       axios.get('https://api.spacexdata.com/v2/launches').then((res)=>{
       setFlight(res.data)
      }).catch((error)=>{console.error(error)})
 
   },[])
    return(
    <div >
<ul className='flights-list'>
{flights.map((flight)=>(

      <li key={flight.mission_id}>
      <div class='flight-info'>
         <img src={flight.links.mission_patch_small}
        alt={flight.mission_name} />
      </div>
        <div class='flight-data'>
        <h1>original:{flight.launch_date_unix}</h1>
        <p>mission:{flight.mission_name}</p> 
        <p>launch_year:{flight.launch_year}</p> 
        </div>
    </li>
     
      
  ))}
</ul>  
</div>
)
  }
  export default   Flighting

