import { Link } from "react-router-dom";
import {  useParams } from 'react-router'
import { useState } from "react";
import Usersearch from "./Usersearch";

const Sidebar = () => {
    const name=useParams()
    console.log(name)
    const [id, setId]=useState("1")
    const click=(e)=>{
        setId(e.target.id)
    }
    console.log(id)
    return ( 
        <div className="list-group">
            <br />
            {id=="1" ? <Link to="/" id="1" className="list-group-item list-group-item-action active" onClick={click}>Latest</Link>:<Link to="/" id="1" className="list-group-item list-group-item-action" onClick={click}>Latest</Link>}
            {id=="2" ? <Link to="/myposts" id="2" className="list-group-item list-group-item-action active" onClick={click}>myposts</Link>:<Link to="/myposts" id="2" className="list-group-item list-group-item-action" onClick={click}>myposts</Link>}
            {id=="3" ? <Link to="#" id="3" className="list-group-item list-group-item-action active" onClick={click}><Usersearch /></Link>:<Link to="#" id="3" className="list-group-item list-group-item-action" onClick={click}><Usersearch /></Link>}

        </div>
     );
}
 
export default Sidebar ;