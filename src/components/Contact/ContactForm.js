import React, { Component } from 'react'

export default class ContactForm extends Component {

    constructor(props){
        super(props);

    }


    contactSubmit = function (e) {
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const company = document.getElementById('company').value;
        const message = document.getElementById('message').value;
        
        document.getElementById('thankYouBox').innerHTML=`Thank you ${name}. We will contact you ASAP. Your email id is: ${email} and phone is: ${phone}.`;

        e.preventDefault();
    }


    render() {
        
        return (
            <form onSubmit={this.contactSubmit}>
                            <div className="card-body form">
                            <h3 className="font-weight-bold dark-grey-text mt-4"><i className="fas fa-envelope pr-2 mr-1" />Write to us:</h3>
                            <div className="row">
                                <div className="col-md-6">
                                <div className="md-form mb-0">
                                    <input type="text" id="name" className="form-control" />
                                    <label htmlFor="form-contact-name" className>Your name</label>
                                </div>
                                </div>
                                <div className="col-md-6">
                                <div className="md-form mb-0">
                                    <input type="text" id="email" className="form-control" />
                                    <label htmlFor="form-contact-email" className>Your email</label>
                                </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                <div className="md-form mb-0">
                                    <input type="text" id="phone" className="form-control" />
                                    <label htmlFor="form-contact-phone" className>Your phone</label>
                                </div>
                                </div>
                                <div className="col-md-6">
                                <div className="md-form mb-0">
                                    <input type="text" id="company" className="form-control" />
                                    <label htmlFor="form-contact-company" className>Your company</label>
                                </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                <div className="md-form mb-0">
                                    <textarea id="message" className="form-control md-textarea" rows={9} defaultValue={""} />
                                    <label htmlFor="form-contact-message">Your message</label>
                                </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <input type="submit" className="btn-floating btn btn-lg blue" value="Submit"/>
                                </div>
                            </div>
                            </div>
                            
            </form>

        )
    }
}
