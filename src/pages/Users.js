import React, { Component } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import UsersTable from '../components/Users/UsersTable'


export default class Users extends Component {
    render() {
        return (
            <div>
                <BreadCrumb pageName="Users" />
                <UsersTable />
            </div>
        )
    }
}
