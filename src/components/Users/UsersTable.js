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

import axios from 'axios';

// import {userdata} from '../../datas/UserTableData'
import {userdata} from '../../datas/UserTableAll'


export default class UsersTable extends Component {

    constructor(props){
        super(props)
        this.state = {
            usersMainData: userdata,
            users: userdata,
            country: '',
            persons:[]
        };
    }


    
    // componentDidMount() {
    //     axios.get(`https://jsonplaceholder.typicode.com/users`)
    //       .then(res => {
    //         const persons = res.data;
    //         this.setState({ persons });
    //       })
    //   }

      componentDidMount() {
        axios.get(`https://www.learningall.me/api/people`)
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
          })
      }
      



    handleName=(event)=> {

        let name= event.target.value;

        let a = this.state.usersMainData;
        let term = name;
        let b = a.filter(item => item.name.first.toLowerCase().indexOf(term) > -1);
        this.setState({
            users: b
        })

        document.getElementById('usernameshow').innerHTML=name;
    }


    handleCountry=(event)=> {

        let cname= event.target.value;
    
        const users = cname == '' ?  this.state.usersMainData.filter(item=> item.nat) :  this.state.usersMainData.filter(item=> item.nat == cname);

        this.setState({
            users: users
        })

        document.getElementById('usernameshow').innerHTML=cname;

    }

    handleGender=(event)=> {
        let gender= event.target.value;

        let users = gender == '' ? this.state.usersMainData.filter(item=> item.gender) : this.state.usersMainData.filter(item=> item.gender == gender) ;

        this.setState({
            users: users
        })
        document.getElementById('usernameshow').innerHTML=gender;
    }


    render() {        
        return (
            <div className="container">
                <br/>
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-group">
                            <input type="text" className="form-control" id="username" placeholder="Search By Name" onChange={(e)=>this.handleName(e)}/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="form-group">
                        <select class="form-control" id="country" onChange={(e)=>this.handleCountry(e)}>
                            <option value="">All Country</option>
                            <option value="US">United States</option>
                            <option value="DK">Denmark</option>
                            <option value="FR">France</option>
                            <option value="GB">United Kingdom</option>

                        </select>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="form-group">
                        <select class="form-control" id="gender" onChange={(e)=>this.handleGender(e)}>
                            <option value="">All Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>

                        </select>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <h2>Showing results: <span id="usernameshow"></span></h2>
                    </div>
                </div>
                <br/>
                <table className="table mt-5">
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

                <ul>
        { this.state.persons.map(person => <li>{person.name}</li>)}
      </ul> 



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
                {/* <tbody>
                {this.state.users.filter(   
                    person => person.nat === this.state.country
                    ).map((users) => (
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
                </tbody> */}
            </table>
            </div> 
        )
    }
}
