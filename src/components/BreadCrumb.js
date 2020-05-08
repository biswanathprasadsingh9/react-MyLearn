import React from 'react'
import {
  Link
} from "react-router-dom";

export default function BreadCrumb(props) {
    return (
        <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item active">{props.pageName}</li>
        </ol>
      </nav>
    )
}
