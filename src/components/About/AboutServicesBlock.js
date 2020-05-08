import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

export default function AboutServicesBlock(props) {

    const {ser, det, url} = props.datatypes 

    return (
        <div className="col-md-6 col-lg-5 col-xl-4">
            <h5 className="font-weight-normal border-top border-light pt-4 mb-4">
            <Link className="dark-grey-text" to={`about${url}`}>{ser}</Link></h5>
            <p className="text-muted mb-5 pb-md-3">{det}</p>
        </div>
    )
}
