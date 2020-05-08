import React, { Component } from 'react'

export default class UsersTable extends Component {

    constructor(props){
        super(props)
        this.state = {
            users: [
                {
                    id:1,
                    name:'Ron',
                    class: 8,
                    mark: 200
                },
                {
                    id:2,
                    name:'Same',
                    class: 6,
                    mark: 500
                },
                {
                    id:3,
                    name:'Jems',
                    class: 7,
                    mark: 400
                },
                {
                    id:4,
                    name:'Mark',
                    class: 10,
                    mark: 700
                },
                {
                    id:5,
                    name:'Rony',
                    class: 4,
                    mark: 400
                },
                {
                    id:6,
                    name:'Soly',
                    class: 9,
                    mark: 600
                },
                {
                    id:7,
                    name:'Robin',
                    class: 3,
                    mark: 200
                },
            ]
        };
    }



    render() {
        return (
            <div className="container">
                <table className="table">
                <thead className="black white-text">
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Class</th>
                    <th scope="col">Mark</th>
                </tr>
                </thead>
                <tbody>
                {this.state.users.map((users) => (
                    <tr key={users.id}>
                        <th scope="row">{users.id}</th>
                        <td>{users.name}</td>
                        <td>{users.class}</td>
                        <td>{users.mark}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div> 
        )
    }
}
