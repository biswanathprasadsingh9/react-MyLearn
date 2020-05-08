import React, { Component } from 'react'

import HomeFeaturesBlock from './HomeFeaturesBlock'

export default class HomeFeatures extends Component {

   state = {
      features: [
         {
            id:1,
            head:"head1",
            det:"Sodales neque sodales ut etiam sit. Mi proin sed libero enim sed faucibus turpis in eu. Augue eget arcu dictum varius duis. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Nulla posuere sollicitudin aliquam ultrices sagittis orci."
         },
         {
            id:2,
            head:"head2",
            det:"Sodales neque sodales ut etiam sit. Mi proin sed libero enim sed faucibus turpis in eu. Augue eget arcu dictum varius duis. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Nulla posuere sollicitudin aliquam ultrices sagittis orci."
         },
         {
            id:3,
            head:"head3",
            det:"Sodales neque sodales ut etiam sit. Mi proin sed libero enim sed faucibus turpis in eu. Augue eget arcu dictum varius duis. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Nulla posuere sollicitudin aliquam ultrices sagittis orci."
         }
      ]
   }

    render() {
        return (
        <>
           <div className="container my-5 p-5">
   <section className="dark-grey-text">
      <h2 className="text-center font-weight-bold mb-4 pb-2">Why is it so great?</h2>
      <p className="text-center lead grey-text mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
      </p>
      <div className="row">
         <div className="col-lg-5 text-center text-lg-left">
            <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/screens-section.jpg" alt="Sample image" />
         </div>
         <div className="col-lg-7">
            
            {this.state.features.map((features) =>(
               <HomeFeaturesBlock key={features.id} head={features.head} det={features.det} />
            ))}            
         </div>
      </div>
   </section>
</div>     
        </> 
        )
    }
}
