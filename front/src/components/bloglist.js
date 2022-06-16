//import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Categorylist from "./category_list";
import useFetch from "./fetch";

const Bloglist = (props) => {
  const { data: postlist, isPending, error}=useFetch(props.url)

    return ( 
        <div className="col-12">
          
          {error && <div>{error}</div>}
          {isPending && <div>Loading.......</div>}
          {postlist && postlist.length!=0 ? postlist.map(function(post){
            return(
            <div>
              <br />
            <div key={post.id} className="card">
              <h5 className="card-header">{post.category}</h5>
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <small>{post.author}-{post.date_posted}</small>
                <p className="card-text">{post.content}.</p>
                <Link to={`/postdetail/${post.id}`} className="btn btn-primary">Edit</Link>
              </div>
            </div>
            </div>
          )  
          }):<div>404</div>}
          
        </div>
     );
}
 
export default Bloglist;