import React, { Component } from 'react'
import {userdata} from '../datas/UserTableAll'
import { MdKeyboardBackspace } from "react-icons/md";

export default class UserDetails extends Component {

    constructor(props){
        super(props)
        this.state = {
            users: userdata
        };
    }
    
    render() {

        const userId = this.props.match.params.id;

        return (
            <>
            {this.state.users.filter(data => data.login.uuid == userId).map(userdata => (
                <div className="container mt-5 mb-5">
                    <center>
                        <img src={userdata.picture.large} alt=""/>
                        <h4 className="mt-5"><b>Name:</b> {userdata.name.title} {userdata.name.first} {userdata.name.last}</h4>
                        <h5><b>Gender: </b>{userdata.gender}</h5>

                        <h5><b>Email: </b>{userdata.email}</h5>
                        <h5><b>Phone: </b>{userdata.phone}</h5>

                        <h5><b>City: </b>{userdata.location.city}</h5>
                        <h5><b>State: </b>{userdata.location.state}</h5>
                        <h5><b>Country: </b>{userdata.location.country}</h5>
                        <h5><b>Age: </b>{userdata.dob.age}</h5>
                        <br/><br/><br/>
                        <button className="btn btn-sm btn-primary" onClick={this.props.history.goBack}><MdKeyboardBackspace />  Go Back</button>
                    </center> 
                    
                    <br/><br/><br/><br/><br/><br/><br/> 
                </div>             
            ))}
            </>
        )
    }
}