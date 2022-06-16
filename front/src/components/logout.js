import { Link } from "react-router-dom";

const Logout = () => {
    fetch("http://127.0.0.1:8000/logout")
    return ( 
        <div className="col-12">
            success
            please <a href="/login">Login</a> here
        </div>
     );
}
 
export default Logout;