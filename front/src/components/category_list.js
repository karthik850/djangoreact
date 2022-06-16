//import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "./fetch";

const Categorylist = (props) => {
  const { data: postlist, isPending, error}=useFetch(props.url)

    return ( 
        <div className="col-12">
          <ul className="nav">
          {error && <div>{error}</div>}
          {isPending && <div>Loading.......</div>}
          {postlist && postlist.length!=0 ? postlist.map(function(post){
            return(
                
                <li className="nav-item">
                    <Link className="nav-link active" to={ `/category/${post.categories}/`}>{post.categories}</Link>
                </li>
                
          )  
          }):<div>404</div>}
          </ul>
        </div>
     );
}
 
export default Categorylist;