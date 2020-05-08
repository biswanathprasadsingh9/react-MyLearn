import React, { Component } from 'react'

export default class HomeProjects extends Component {
    render() {
        return (
            <div className="container my-5">
        {/* Section: Block Content */}
        <section className="dark-grey-text text-center">
          <h3 className="font-weight-bold mb-4 pb-2">Our best projects</h3>
          <p className="text-muted w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>
          {/* Grid row */}
          <div className="row">
            {/* Grid column */}
            <div className="col-md-6 mb-4">
              <div className="view overlay rounded z-depth-1">
                <img src="https://mdbootstrap.com/img/Photos/Others/laptop-sm.jpg" className="img-fluid" alt="Sample project image" />
                <a>
                  <div className="mask rgba-white-slight" />
                </a>
              </div>
              <div className="px-3 pt-3 mx-1 mt-1 pb-0">
                <a className="orange-text">
                  <h6 className="font-weight-bold mt-2 mb-3"><i className="fas fa-chart-line pr-2" />Marketing</h6>
                </a>
                <h4 className="font-weight-bold mb-3">Title of the news</h4>
                <p className="text-muted">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, adipisci velit cupidatat proident voluptatem quia numquam.</p>
                <a className="btn btn-success btn-rounded btn-md"> View more</a>
              </div>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-6 mb-4">
              <div className="view overlay rounded z-depth-1">
                <img src="https://mdbootstrap.com/img/Photos/Others/images/19.jpg" className="img-fluid" alt="Sample project image" />
                <a>
                  <div className="mask rgba-white-slight" />
                </a>
              </div>
              <div className="px-3 pt-3 mx-1 mt-1 pb-0">
                <a className="blue-text">
                  <h6 className="font-weight-bold mt-2 mb-3"><i className="fas fa-eye pr-2" />Entertainment</h6>
                </a>
                <h4 className="font-weight-bold mb-3">Title of the news</h4>
                <p className="text-muted">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquid, aspernatur aut odit aut fugit.</p>
                <a className="btn btn-success btn-rounded btn-md"> View more</a>
              </div>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </section>
        {/* Section: Block Content */}
      </div>
        )
    }
}
