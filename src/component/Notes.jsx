import React, { useContext } from 'react'
import {MyContext} from './App'
function Notes(){
    const {v,changeValue}=useContext(MyContext)
    return(
    <div class="note">
    <h1 >this is content {v}</h1>
    <p>helloo hello hello helloo hello hello
    ello hello si said  keep going  don't think don't lookat behind you</p>
    <button onClick={()=>{changeValue("si said ca va ")}}>click me </button>
    </div>
    )
}
export default Notes
