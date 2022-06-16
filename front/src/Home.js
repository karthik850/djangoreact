
import React from 'react';
//import {  useParams } from 'react-router';
//import Navbar from './components/navbar';
import Bloglist from './components/bloglist';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import Blogcreate from './components/blogcreate';
import PostDetails from './components/postdetail';
//import { useEffect } from "react"
import Sidebar from './components/sidebar';
import Postdelete from './components/postdelete';
import Blogupdate from './components/blogupdate';
import Myposts from './components/mypost';
import Userposts from './components/userposts';
import useFetch from './components/fetch';
import Logout from './components/logout';
import Login from './components/login';
import Categorylist from './components/category_list';


const Home = () => {
  
  const {data:user, isPending:userload, error:usererror}=useFetch("http://127.0.0.1:8000/api/user/")
 
    return (
      <Router>
      <div className="row">
        <div className="col-2">
          
        </div>
        
        <Switch>
          <Route exact path="/">
            <Categorylist url="http://127.0.0.1:8000/api/categories/"/>
            <Bloglist url="http://127.0.0.1:8000/api/post-list/" />
          </Route>
          <Route exact path="/postdetail/:id">
            <Categorylist url="http://127.0.0.1:8000/api/categories/"/>
            <PostDetails user={user} />
          </Route>
          <Route exact path="/postdelete/:id">
            <Postdelete />
          </Route>
          <Route exact path="/postupdate/:id">
            <Blogupdate />
          </Route>
          <Route exact path="/myposts">
            <Categorylist url="http://127.0.0.1:8000/api/categories/"/>
            <Bloglist url="http://127.0.0.1:8000/api/myposts/" />
          </Route>
          <Route exact path="/user/:name">
            <Categorylist url="http://127.0.0.1:8000/api/categories/"/>
            <Userposts url="http://127.0.0.1:8000/api/user/" />
          </Route>
          <Route exact path="/category/:name">
            <Categorylist url="http://127.0.0.1:8000/api/categories/"/>
            <Userposts url="http://127.0.0.1:8000/api/category/" />
          </Route>
          <Route exact path="/category/:name">
            <Categorylist url="http://127.0.0.1:8000/api/categories/"/>
            <Userposts url="http://127.0.0.1:8000/api/category/" />
          </Route>
          <Route exact path="/create">
            <Blogcreate />
          </Route>

          
          {/* <Route exact path="/login">
             <Login />
          </Route> */}
        </Switch>
        <div className="col">
          <Sidebar />
        </div>
      </div>
    </Router>
      )
    }


export default Home;
