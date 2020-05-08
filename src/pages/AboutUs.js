import React, { Component } from 'react'

import BreadCrumb from '../components/BreadCrumb'
import Services from '../components/About/AboutServices'

export default class AboutUs extends Component {
    render() {
        return (
            <>
                <BreadCrumb pageName="About Us" />
                <Services />
            </>
        )
    }
}
