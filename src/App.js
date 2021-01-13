import React from "react";
import './App.scss'
import Header from "./Header/Header";
import About from "./About/About";
import Work from "./Work/Work"
import Contact from "./Contact/Contact";
import {Route,Link} from "react-router-dom";

import {Navbar} from "react-bootstrap";

function App() {
  return (

    <div>
        <Navbar  variant='dark'>
            <nav id="main-nav">
                {/*<img src="img/logo.png" alt="My Portfolio" id="logo"/>*/}
                <ul>
                  <li>  <Link to='/home' >Home</Link></li>
                    <li> <Link to ='/about'>About</Link></li>
                        <li><Link  to='/work'>Work</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </nav>
        </Navbar>
        <div>

            <Route exact  path ='/'  component ={ Header }    />
            <Route path ='/home' component ={Header }   />
            <Route path ='/about' component ={About}    />
            <Route path ='/work' component = {Work}    />
            <Route path ='/contact' component ={Contact}    />
            {/*<Header/>*/}
            {/*<About/>*/}
            {/*<Work/>*/}
            {/*<Contact/>*/}
            {/*<Footer/>*/}
        </div>
    </div>
  );
}

export default App;
