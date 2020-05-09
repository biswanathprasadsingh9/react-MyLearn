import React, { Component } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import PeopleTable from '../components/People/PeopleTable'
import {Link} from 'react-router-dom'
import { BsFillPersonPlusFill } from "react-icons/bs";

export default class People extends Component {
    render() {
        return (
            <>
              <BreadCrumb pageName="Peoples" />
              <center><Link to="people/create" className="btn btn-default"><BsFillPersonPlusFill /> Add People</Link></center>
              <div className="container mt-5 mb-5">
                  <PeopleTable />
              </div>  
            </>
        )
    }
}
