import { useState } from "react"
import { Link } from "react-router-dom";

const Usersearch = () => {
    const [name, setName]=useState("")
    
    return ( 
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="username" value={name} onChange={(e)=>setName(e.target.value)} />
            <div className="input-group-append">
                <Link to={`/user/${name}`} className="input-group-text" id="basic-addon2">Search</Link>
            </div>
            </div>
     );
}
 
export default Usersearch;