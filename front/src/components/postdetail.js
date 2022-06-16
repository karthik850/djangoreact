//import { useState,useEffect } from "react"

import {  Link, useParams } from "react-router-dom";
import useFetch from "./fetch";

const PostDetails = (props) => {
    const { id }=useParams()
    const { data: post, isPending, error}=useFetch("http://127.0.0.1:8000/api/post-detail/"+id)
    console.log(props.user.username)
    //const {data:user, isPending:userload, error:usererror}=useFetch("http://127.0.0.1:8000/api/user/")
    
    
    return ( 
                <div className="col-12">
                    <br />
                    {error && <div>{error}</div>}
                    {isPending && <div>Loading......</div>}
                    {post && (
                        <div key={post.id} className="card" >
                        <h5 className="card-header">Update</h5>
                        <div className="card-body">
                        <h5 className="card-title">{post.title}</h5>
                        <small>{post.author}-{post.date_posted}</small>
                         {post.author===props.user.username && <div><Link to={`/postdelete/${post.id}`} className="btn btn-danger">Delete</Link> <Link to={`/postupdate/${post.id}`} className="btn btn-success">update</Link></div>} 
                        
                        <p className="card-text">{post.content}.</p>
                        
                        </div>
                    </div> 
                    )}
                        
                    </div>
     );
}
 
export default PostDetails;