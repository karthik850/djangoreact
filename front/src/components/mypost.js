import { Link } from "react-router-dom";
import useFetch from "./fetch";

const Myposts = () => {
    const { data: postlist, isPending, error}=useFetch("http://127.0.0.1:8000/api/myposts/")
    return ( 
        <div className="col-12">
          
          {error && <div>{error}</div>}
          {isPending && <div>Loading.......</div>}
          {postlist && postlist.map(function(post){
            return(
            <div>
                <br />
            <div key={post.id} className="card">
              <h5 className="card-header">Featured</h5>
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <small>{post.author}-{post.date_posted}</small>
                <p className="card-text">{post.content}.</p>
                <Link to={`/postdetail/${post.id}`} className="btn btn-primary">Go somewhere</Link>
              </div>
            </div>
            </div>
          )  
          })}
          
        </div>
     );
}
 
export default Myposts;