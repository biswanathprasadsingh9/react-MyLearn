import React, { Component } from 'react'

import AboutServicesBlock from './AboutServicesBlock'

export default class AboutServices extends Component {

    render() {

      const service= [
        {
          ser: "Web-Development",
          url: "/web-development",
          det: "Web design refers to the design of websites that are displayed on the internet..."
        },
        {
          ser: "Web-Design",
          url: "/web-design",
          det: "Web development is the work involved in developing a website for the Internet..."
        },
        {
          ser: "SEO",
          url: "/seo",
          det: "If you own, manage, monetize, or promote online content via Google Search,..."
        },
        {
          ser: "PPC",
          url: "/ppc",
          det: "PPC stands for pay-per-click, a model of internet marketing in which advertisers..."
        },
        {
          ser: "Content Writting",
          url: "/content-writting",
          det: "Content writing services (also known as online content writing services and content..."
        },
        {
          ser: "SMO",
          url: "/smo",
          det: "Social media optimization (SMO) is the use of a number of outlets and communities..."
        },
      ];

        return (
        <div className="container my-5 py-5">
        {/* Section */}
        <section>
          <h6 className="font-weight-bold text-center grey-text text-uppercase small mb-4">Services</h6>
          <h3 className="font-weight-bold text-center dark-grey-text pb-2">Our Services</h3>
          <hr className="w-header my-4" />
          <p className="lead text-center text-muted pt-2 mb-5">Join thousands of satisfied customers using our template
            globally.</p>
          <div className="row d-flex justify-content-center">
            <AboutServicesBlock datatypes={service[0]} />
            <AboutServicesBlock datatypes={service[1]} />
            <AboutServicesBlock datatypes={service[2]} />
            <AboutServicesBlock datatypes={service[3]} />
            <AboutServicesBlock datatypes={service[4]} />
            <AboutServicesBlock datatypes={service[5]} />
          </div>
        </section>
        {/* Section */}
      </div>
        )
    }
}
