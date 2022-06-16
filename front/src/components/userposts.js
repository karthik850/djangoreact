
import useFetch from "./fetch";
import {  Link, useParams } from "react-router-dom";

const Userposts = (props) => {
    const {name}=useParams()
    var url=props.url+name
    const { data: postlist, isPending, error}=useFetch(url)


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
                <Link to={`/postdetail/${post.id}`} className="btn btn-primary">Go somewhere</Link>
              </div>
            </div>
            </div>
          )  
          }): <div>404</div>}
          
        </div>
     );
}
 
export default Userposts;