
import './App.css';
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


const App = () => {
  
  const {data:user, isPending:userload, error:usererror}=useFetch("http://127.0.0.1:8000/api/user/")
 
    return (
      <Router>
    <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <Link to="/" className="navbar-brand" href="#">django react</Link>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              
                
                {user ?
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                 <li className="nav-item">
                 <Link className="nav-link" to="/create">create</Link>
                  </li>
                 <li className="nav-item ">
                  <Link className="nav-link" to="#">{user && user.username}</Link>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="/logout">logout</a>
                </li>

                </ul>:<ul className="navbar-nav mr-auto mt-2 mt-lg-0"> <li className="nav-item ">
                  <a className="nav-link" href="/login">login</a>
                </li> 
                </ul>}
                
                
              
              {/* <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form> */}
            </div>
      </nav>
      <div className="row">
        <div className="col-2">
          
        </div>
        <div className="col-7">
        <Switch>
          <Route exact path="/">
            <Categorylist url="http://127.0.0.1:8000/api/categories/"/>
            <Bloglist url = "http://127.0.0.1:8000/api/post-list/" />
          </Route>
          <Route exact path="/create">
            <Blogcreate />
          </Route>
          <Route exact path="/postdetail/:id">
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
            <Bloglist url="http://127.0.0.1:8000/api/myposts/" user={user}/>
          </Route>
          <Route exact path="/user/:name">
            <Categorylist url="http://127.0.0.1:8000/api/categories/"/>
            <Userposts url="http://127.0.0.1:8000/api/user/" />
          </Route>
          <Route exact path="/category/:name">
            <Categorylist url="http://127.0.0.1:8000/api/categories/"/>
            <Userposts url="http://127.0.0.1:8000/api/category/" />
          </Route>
          <Route exact path="/logout">
            <Logout />
          </Route>
          {/* <Route exact path="/login">
             <Login />
          </Route> */}
        </Switch>
        </div>
        <div className="col">
          <Sidebar />
        </div>
      </div>
    </div>
    </Router>
      )
    }


export default App;
