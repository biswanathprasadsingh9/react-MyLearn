import React from 'react'

export default function BreadCrumb(props) {
    return (

        <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
        <li className="breadcrumb-item active">{props.pageName}</li>
        </ol>
      </nav>
    )
}
