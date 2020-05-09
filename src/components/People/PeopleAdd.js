import React, { Component } from 'react'
import axios from 'axios';
import Swal from "sweetalert2";
import { Redirect } from 'react-router-dom'

export default class PeopleAdd extends Component {

    constructor(props){
        super(props)
        this.state= {
            name:'',
            email:'',
            country:'',
            city:'',
            phone:'',
            gender:'',
            age:'',

            showmessage:''
        }
        this.onChangeValue = this.onChangeValue.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChangeValue(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }



    handleSubmit (event) {
        event.preventDefault();
        
        axios.post('https://www.learningall.me/api/people', {
            name: this.state.name,
            email: this.state.email,
            country: this.state.country,
            city: this.state.city,
            phone: this.state.phone,
            gender: this.state.gender,
            age: this.state.age,
        })
        .then(function (response) {
            console.log(response.data);
            console.log('Success');
            Swal.fire({  
                title: 'Success',  
                type: 'success',  
                text: 'Your work has been saved.', 
                confirmButtonText: "OK"
                }).then(function() {
                    // this.history.push('/people');
                    alert('hi')
                    return <Redirect to='/people' />
                }); 

            

                
        })
        .catch(function (error) {
            console.log(error);
        });
        
        this.setState({
            name:'',
            email:'',
            country:'',
            city:'',
            phone:'',
            gender:'',
            age:'',
        })
    }

    
    render() {
        return (
            <section>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeValue} name="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" value={this.state.email} onChange={this.onChangeValue} name="email" />
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlSelect1">Country</label>
                        <select className="form-control" value={this.state.country} onChange={this.onChangeValue} name="country">
                        <option>India</option>
                        <option>USA</option>
                        <option>UK</option>
                        <option>Russia</option>
                        <option>Japan</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">City</label>
                        <input type="text" className="form-control" value={this.state.city} onChange={this.onChangeValue} name="city" />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Phone</label>
                        <input type="text" className="form-control" value={this.state.phone} onChange={this.onChangeValue} name="phone" />
                    </div>

                    <div className="form-group">
                        <label for="exampleFormControlSelect1">Gender</label>
                            <select className="form-control" value={this.state.gender} onChange={this.onChangeValue} name="gender">
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Age</label>
                        <input type="text" className="form-control" value={this.state.age} onChange={this.onChangeValue} name="age" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <br/>
                <p>{this.state.showmessage}</p>
            </section>
        )
    }
}
