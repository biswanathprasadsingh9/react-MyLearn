import React, { Component } from 'react'
import axios from 'axios'

export default class PeopleEdit extends Component {

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
        }
    }


    //GET ALL PEOPLE DATA
    componentDidMount(){
        const id= this.props.match.params.id;
        axios.get(`https://www.learningall.me/api/people/3/edit`)
        .then(res => {
            const userdetails = res.data;
            
            this.setState({
                name:res.data.name,
                email:res.data.email,
                country:res.data.country,
                city:res.data.city,
                phone:res.data.phone,
                gender:res.data.gender,
                age:res.data.age,
            });
        })
    }

    render() {
        return (
            <div className="container mt-5 mb-5">
                <section>
                    <center><h3>Edit User</h3></center>
                    <form>
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
                <br/>
                <button className="btn btn-sm float-right btn-primary icon-left" onClick={this.props.history.goBack}>Go Back</button>
                <br/><br/><br/>
            </div>
        )
    }
}
