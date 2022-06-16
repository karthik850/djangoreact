import React, { useState } from 'react';
import useFetch from "./fetch";
import { useHistory } from 'react-router';

const Blogcreate = () => {
    const [title,setTitle]=useState('helllo')
    const [content,setContent]=useState('')
    const [category,setCategory]=useState(1)
    const [isPending, setIsPending]=useState(false)
    const { data: categorylist, isPending1, error}=useFetch("http://127.0.0.1:8000/api/categories/")

    
    const history=useHistory()
    
    const getCookie = (name) => {
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    const handleSubmit= (e) => {
        e.preventDefault()
        const post={title,content,category}
        var csrftoken =getCookie('csrftoken')
        setIsPending(true)
        var url='http://127.0.0.1:8000/api/post-create/'

        fetch(url,{
            method: 'POST',
            headers: {"Content-Type": "application/json",
                    'X-CSRFToken':csrftoken},
            body: JSON.stringify(post)
        }).then((post) => {
            console.log(post)
            setIsPending(false)
            history.push('/')
            
        })

    }

        return(
            <div className="col-12">
                <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="write" value={title} onChange={(e)=>setTitle(e.target.value)} />
                </div>
                <div className="form-group">
                    <label >Content</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={content} onChange={(e)=>setContent(e.target.value)}></textarea>
                </div>
                <select className="custom-select"  onChange={(e)=>setCategory(e.target.value)}>
                        {categorylist && categorylist.map(function(category){
                        return(
                            
                            <option value={category.id} >{category.categories}</option> 
                    )  
                    }) }   
                </select>
                <button type="submit" className="btn btn-outline-success">Success</button>
                </form>
            </div>
        )
    }




export default Blogcreate;



