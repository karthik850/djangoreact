import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router';
//import useFetch from './fetch';
import getCookie from './getCookie';

const Login = () => {
    const [username, setUsername]=useState('')
    const [password, setPassword]=useState('')
    const history=useHistory()
    const handleSubmit = (e) =>{
        const values={username,password}
        var csrftoken =getCookie('csrftoken')
        //setIsloading(true)
        var url = 'http://127.0.0.1:8000/api/login/'

    
        fetch(url,{
            method: 'POST',
            headers: {"Content-Type": "application/json",
                    'X-CSRFToken':csrftoken},
            body: JSON.stringify(values)
        }).then((res) => {
            console.log(res.ok)
            //setIsloading(false)
            if (res.ok=="True"){
                history.push('/')
            }
            
            
        })

    }



    return ( 
        <div className="col-7">
            <form className=" p-4" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)} />
                </div>
                <div className="form-group">
                    <label >Password</label>
                    <input type="password" className="form-control" id="exampleDropdownFormPassword2" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
        </div>
     );
}
 
export default Login;