import { useParams } from "react-router-dom"
import getCookie from "./getCookie"
import { useHistory } from 'react-router';



const Postdelete = () => {

    const history=useHistory()
    const { id }=useParams()
    var csrftoken =getCookie('csrftoken')
    var url="http://127.0.0.1:8000/api/post-delete/"+id
    fetch(url,{
        method: 'DELETE',
        headers: {"Content-Type": "application/json",
                'X-CSRFToken':csrftoken}
    }).then((post) => {

        history.push('/')
        
    })
    return ( <div>
        succesfully dleted
    </div> );
}
 
export default Postdelete;