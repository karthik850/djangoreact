import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router';
import useFetch from './fetch';
import getCookie from './getCookie';

const Blogupdate = () => {
    const [title,setTitle]=useState("")
    const [content,setContent]=useState("")
    const [category,setCategory]=useState("")
    //const [isloading, setIsloading]=useState(false)
    const { id } = useParams()
    const history = useHistory()
    const { data: post, isPending, error}=useFetch("http://127.0.0.1:8000/api/post-detail/"+id)
    const [iseditingt,setIseditingt]=useState(false)
    const [iseditingc,setIseditingc]=useState(false)

    const { data: categorylist, isPending1, error1 }=useFetch("http://127.0.0.1:8000/api/categories/")

    
    const handleSubmit= (e) => {
        e.preventDefault()
        const post1={title,content}
        var csrftoken =getCookie('csrftoken')
        var url = 'http://127.0.0.1:8000/api/post-update/'+id+'/'

    
        fetch(url,{
            method: 'POST',
            headers: {"Content-Type": "application/json",
                     'X-CSRFToken':csrftoken},
            body: JSON.stringify(post1)
        }).then((post1) => {
            console.log(post1)
            history.push('/')
            
        })

    }

        return(
            <div className="col-12">
                {post && (<form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="write" value={(!iseditingt && post.title) ||title } onChange={(e)=>(setTitle(e.target.value),setIseditingt(true))} />
                </div>
                <div className="form-group">
                    <label >Content</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={ (!iseditingc && post.content) ||content} onChange={(e)=>(setContent(e.target.value),setIseditingc(true))}></textarea>
                </div>
                {/* <select className="custom-select"value={category} onChange={(e)=>setCategory(e.target.value)}>
                        {categorylist && categorylist.map(function(category){
                        return(
                            
                            <option value={category.id}>{category.categories}</option> 
                    )  
                    }) }   
                </select> */}
                <button type="submit" className="btn btn-outline-success">Success</button>
                </form>)}
            </div>
        )
    }




export default Blogupdate;



