import React, { Component } from 'react'
import HomeSlider from '../components/Home/HomeSlider'
import HomeFeatures from '../components/Home/HomeFeatures'
import HomeProject from '../components/Home/HomeProjects'


export default class Home extends Component {
    render() {
        return (
            <>
            <HomeSlider />
            <HomeFeatures />
            <HomeProject />
            </>
        )
    }
}
