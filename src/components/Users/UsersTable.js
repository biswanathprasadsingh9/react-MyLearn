import React, { Component } from 'react'
import { MdSearch } from 'react-icons/md';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useParams,
    useRouteMatch
  } from "react-router-dom";

// import {userdata} from '../../datas/UserTableData'
import {userdata} from '../../datas/UserTableAll'


export default class UsersTable extends Component {

    constructor(props){
        super(props)
        this.state = {
            users: userdata
        };
    }



    render() {
        return (
            <div className="container">
                <table className="table">
                <thead className="black white-text">
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">City</th>
                    <th scope="col">Country</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {this.state.users.map((users) => (
                    <tr key={users.login.uuid}>
                        <th><img src={users.picture.thumbnail} alt=""/></th>
                        <th>{users.name.first} {users.name.last}</th>
                        <th>{users.gender}</th>
                        <td>{users.email}</td>
                        <td>{users.phone}</td>
                        <td>{users.location.city}</td>
                        <td>{users.location.country}</td>
                        <td><h5><Link to={`userdetails/${users.login.uuid}`}><MdSearch /></Link></h5></td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div> 
        )
    }
}
