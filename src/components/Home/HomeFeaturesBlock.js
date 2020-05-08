import React from 'react'

export default function HomeFeaturesBlock({head, det}) {
    return (


        <div className="row mb-3">
               <div className="col-1">
                  <i className="fas fa-share fa-lg indigo-text"></i>
               </div>
               <div className="col-xl-10 col-md-11 col-10">
                    <h5 className="font-weight-bold mb-3">{head}</h5>
                    <p className="grey-text">{det}</p>
               </div>
            </div>
    )
}
