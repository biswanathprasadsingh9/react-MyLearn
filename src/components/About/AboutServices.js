import React, { Component } from 'react'

import AboutServicesBlock from './AboutServicesBlock'

export default class AboutServices extends Component {

    render() {

      const service= [
        {
          ser: "Web-Development",
          url: "/web-development",
          det: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis. Cras pulvinar mattis nunc sed blandit libero volutpat. In metus vulputate eu scelerisque. Pretium aenean pharetra magna ac. At tellus at urna condimentum mattis pellentesque id nibh. Quis eleifend quam adipiscing vitae. Ullamcorper dignissim cras tincidunt lobortis. Tellus in hac habitasse platea."
        },
        {
          ser: "Web-Design",
          url: "/web-design",
          det: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis. Cras pulvinar mattis nunc sed blandit libero volutpat. In metus vulputate eu scelerisque. Pretium aenean pharetra magna ac. At tellus at urna condimentum mattis pellentesque id nibh. Quis eleifend quam adipiscing vitae. Ullamcorper dignissim cras tincidunt lobortis. Tellus in hac habitasse platea."
        },
        {
          ser: "SEO",
          url: "/seo",
          det: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis. Cras pulvinar mattis nunc sed blandit libero volutpat. In metus vulputate eu scelerisque. Pretium aenean pharetra magna ac. At tellus at urna condimentum mattis pellentesque id nibh. Quis eleifend quam adipiscing vitae. Ullamcorper dignissim cras tincidunt lobortis. Tellus in hac habitasse platea."
        },
        {
          ser: "PPC",
          url: "/ppc",
          det: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis. Cras pulvinar mattis nunc sed blandit libero volutpat. In metus vulputate eu scelerisque. Pretium aenean pharetra magna ac. At tellus at urna condimentum mattis pellentesque id nibh. Quis eleifend quam adipiscing vitae. Ullamcorper dignissim cras tincidunt lobortis. Tellus in hac habitasse platea."
        },
        {
          ser: "Content Writting",
          url: "/content-writting",
          det: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis. Cras pulvinar mattis nunc sed blandit libero volutpat. In metus vulputate eu scelerisque. Pretium aenean pharetra magna ac. At tellus at urna condimentum mattis pellentesque id nibh. Quis eleifend quam adipiscing vitae. Ullamcorper dignissim cras tincidunt lobortis. Tellus in hac habitasse platea."
        },
        {
          ser: "SMO",
          url: "/smo",
          det: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis. Cras pulvinar mattis nunc sed blandit libero volutpat. In metus vulputate eu scelerisque. Pretium aenean pharetra magna ac. At tellus at urna condimentum mattis pellentesque id nibh. Quis eleifend quam adipiscing vitae. Ullamcorper dignissim cras tincidunt lobortis. Tellus in hac habitasse platea."
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
