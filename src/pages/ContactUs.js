import React, { Component } from 'react'
import ContactForm from '../components/Contact/ContactForm'
import BreadCrumb from '../components/BreadCrumb'

export default class ContactUs extends Component {

    render() {
        return (
            <>
            <BreadCrumb pageName="Contact Us" />
                <div className="container my-5">
                    <section className="contact-section dark-grey-text mb-5">
                    <div className="card">
                        <div className="row">
                        <div className="col-lg-8">
                            <ContactForm />
                        </div>
                        <div className="col-lg-4">
                            <div className="card-body contact text-center h-100 white-text">
                            <h3 className="font-weight-bold my-4 pb-2">Contact information</h3>
                            <ul className="text-lg-left list-unstyled ml-4">
                                <li>
                                <p><i className="fas fa-map-marker-alt pr-2" />New York, 94126, USA</p>
                                </li>
                                <li>
                                <p><i className="fas fa-phone pr-2" />+ 01 234 567 89</p>
                                </li>
                                <li>
                                <p><i className="fas fa-envelope pr-2" />contact@example.com</p>
                                </li>
                            </ul>
                            <hr className="hr-light my-4" />
                            <ul className="list-inline text-center list-unstyled">
                                <li className="list-inline-item">
                                <a className="p-2 fa-lg tw-ic">
                                    <i className="fab fa-twitter" />
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a className="p-2 fa-lg li-ic">
                                    <i className="fab fa-linkedin-in"> </i>
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a className="p-2 fa-lg ins-ic">
                                    <i className="fab fa-instagram"> </i>
                                </a>
                                </li>
                            </ul>
                            </div>
                        </div>
                        {/* Grid column */}
                        </div>
                        {/* Grid row */}
                    </div>
                    {/* Form with header */}
                    </section>
                    {/*Section: Content*/}
                    <h2 id="thankYouBox"></h2>
                </div>
                <br/>
                <br/>
                <br/>
                <div className="container my-5 py-5 z-depth-1">
                    {/*Section: Content*/}
                    <section className="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">
                    {/*Grid row*/}
                    <div className="row d-flex justify-content-center mb-4">
                        {/*Grid column*/}
                        <div className="col-md-6 text-center">
                        <p className="font-weight-bold">contact@mycompany.com</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut esse placeat odit dolor excepturi.</p>
                        {/*Facebook*/}
                        <a href="#" className="mx-1" role="button"><i className="fab fa-facebook-f" /></a>
                        <a href="#" className="mx-1" role="button"><i className="fab fa-twitter" /></a>
                        <a href="#" className="mx-1" role="button"><i className="fab fa-linkedin-in" /></a>
                        <a href="#" className="mx-1" role="button"><i className="fab fa-instagram" /></a>
                        <a href="#" className="mx-1" role="button"><i className="fab fa-pinterest" /></a>
                        <a href="#" className="mx-1" role="button"><i className="fab fa-youtube" /></a>
                        <a href="#" className="mx-1" role="button"><i className="fab fa-github" /></a>
                        <a href="#" className="mx-1" role="button"><i className="fab fa-stack-overflow" /></a>
                        </div>
                        {/*Grid column*/}
                    </div>
                    {/*Grid row*/}
                    </section>
                    {/*Section: Content*/}
                </div>
            </>
        )
    }
}
