import React, { Component } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import PeopleAdd from '../components/People/PeopleAdd'

export default class PeopleCreate extends Component {
    
    render() {
        return (
            <section>
                <BreadCrumb pageName="Create" />
                <div className="container col-md-5 mt-5 mb-5">
                <PeopleAdd />
                </div>
            </section>
        )
    }
}
