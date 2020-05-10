import React, { Component } from 'react'
import axios from 'axios'
import Swal from "sweetalert2";
import { Link } from 'react-router';
import { Redirect } from 'react-router-dom'


export default class PeopleEdit extends Component {

    constructor(props){
        super(props)
        this.state= {
            id:'',
            name:'',
            email:'',
            country:'',
            city:'',
            phone:'',
            gender:'',
            age:'',
        }
        this.onChangeValue = this.onChangeValue.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

    }

    //GET ALL PEOPLE DATA
    componentDidMount(){
        const id= this.props.match.params.id;
        axios.get(`https://www.learningall.me/api/people/${id}/edit`)
        .then(res => {
            const userdetails = res.data;
            
            this.setState({
                id:res.data.id,
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

    onChangeValue(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }


    // handleSubmit (event) {

    //     event.preventDefault();
    //     const id=this.state.id;
        
    //     axios.patch(`https://www.learningall.me/api/people/${id}`, {
    //             name: this.state.name,
    //             email: this.state.email,
    //             country: this.state.country,
    //             city: this.state.city,
    //             phone: this.state.phone,
    //             gender: this.state.gender,
    //             age: this.state.age,
    //         })
    //         .then(function (response) {
    //             // this.props.history.push('/people');
    //             const { history } = this.props;
    //             history.push("/thePath")
    //             // Swal.fire({  
    //             //     title: 'Success',  
    //             //     type: 'success',  
    //             //     text: 'Your work has been saved.', 
    //             //     confirmButtonText: "OK"
    //             //     }).then(function() {
    //             //         // this.history.push('/people');
    //             //         alert('hi')
    //             //     }); 
        
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
            
    //         this.setState({
    //             id:'',
    //             name:'',
    //             email:'',
    //             country:'',
    //             city:'',
    //             phone:'',
    //             gender:'',
    //             age:'',
    //         })

    // }


    handleSubmit(event) {
        event.preventDefault();
        const products = {
            id: this.state.id,
            name: this.state.name,
            email: this.state.email,
            country: this.state.country,
            city: this.state.city,
            phone: this.state.phone,
            gender: this.state.gender,
            age: this.state.age,
        }
        let uri = 'https://www.learningall.me/api/people/'+this.state.id;
        axios.patch(uri, products).then((response) => {
              this.props.history.push('/people');
        });
      }

      handleDelete(event){
          event.preventDefault();
          const id = this.props.match.params.id;
          let uri = 'https://www.learningall.me/api/people/'+id;
          axios.delete(uri,{})
          .then(function(response){
            return <Redirect to='/people' />
          });
          // this.props.history.push('/people');
      }


    render() {
        return (
            <div className="container mt-5 mb-5">
                <section>
                    <center><h3>Edit User</h3></center>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.id} onChange={this.onChangeValue} name="id"  />
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
                <form onSubmit={this.handleDelete}>
                    <button className="btn btn-sm float-right btn-danger icon-left" type="submit">Delete</button>
                </form>
                <button className="btn btn-sm float-right btn-primary icon-left" onClick={this.props.history.goBack}>Go Back</button>
                <br/><br/><br/>
            </div>
        )
    }
}
