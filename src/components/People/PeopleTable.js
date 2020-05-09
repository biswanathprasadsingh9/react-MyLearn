import React, { Component } from 'react'
import axios from 'axios'
import { MdVisibility } from "react-icons/md";
import { MdBuild } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

export default class PeopleTable extends Component {

    constructor(props){
        super(props)
        this.state = {
            mainPeople:[],
            people:[]
        }
    }

    //GET ALL PEOPLE DATA
    componentDidMount(){
        axios.get(`https://www.learningall.me/api/people`)
        .then(res => {
            const getPeople = res.data;
            this.setState({
                mainPeople: getPeople,
                people: getPeople
            });
        })
    }

    render() {
        return (
            <table className="table">
                <thead className="black white-text">
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">City</th>
                    <th scope="col">Country</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Age</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.people.map((data)=>(
                        <tr>
                        <th scope="row">{data.id}</th>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{data.city}</td>
                        <td>{data.country}</td>
                        <td>{data.phone}</td>
                        <td>{data.gender}</td>
                        <td>{data.age}</td>
                        <td><h6><Link to={`people/details/${data.id}`} ><MdVisibility /></Link>   <Link to={`people/edit/${data.id}`}><MdBuild /></Link>   <Link><MdDelete /></Link> </h6></td>
                    </tr>
                    ))}
                </tbody>
            </table>

        )
    }
}
