import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink 
  } from "react-router-dom";
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import AboutUsDetails from '../pages/AboutUsDetails'
import ContactUs from '../pages/ContactUs';
import Users from '../pages/Users';
import UserDetails from '../pages/UserDetails';
import People from '../pages/People';
import PeopleCreate from '../pages/PeopleCreate'
import PeopleEdit from '../pages/PeopleEdit'





import MyErrorPage from '../pages/ErrorPage';

export default class Navbar extends Component {
    
    render() {
        return (
            <Router>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                        <NavLink exact  to="/" className="nav-link" activeClassName="myactive">Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink exact  to="/about" className="nav-link" activeClassName="myactive">About</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink exact  to="/contact" className="nav-link" activeClassName="myactive">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink exact  to="/users" className="nav-link" activeClassName="myactive">Users</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink exact  to="/people" className="nav-link" activeClassName="myactive">People</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={AboutUs} />
            <Route exact path="/about/:id" component={AboutUsDetails} />
            <Route exact path="/contact" component={ContactUs} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/userdetails/:id" component={UserDetails} />

            <Route exact path="/people" component={People} />
            <Route exact path="/people/create" component={PeopleCreate} />
            <Route exact path="/people/edit/:id" component={PeopleEdit} />




            {/* <Route component={MyErrorPage} /> */}
            {/* <Route path="*">
                <Error />
            </Route> */}
            </Router>
        )
    }
}
