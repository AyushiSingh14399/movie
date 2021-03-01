import React from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const Review=()=> {
    return (
       <React.Fragment>
           <div className="row">
           <div class="card" style={{width: '28%', height:'50%'}}>
  <div class="card-body">
    <h5 class="card-title">Hellen Jummy</h5>
    <h6 class="card-subtitle mb-2 text-muted">Palo alto, CA</h6>
    <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    
  </div>
</div>
<div class="card" style={{width: '28%', height:'50%'}}>
  <div class="card-body">
    <h5 class="card-title">Issac Oluwatemilorum</h5>
    <h6 class="card-subtitle mb-2 text-muted">Palo alto, CA</h6>
    <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
  
  </div>
</div>
<div class="card" style={{width: '28%', height:'50%'}}>
  <div class="card-body">
    <h5 class="card-title">Helen jummy</h5>
    <h6 class="card-subtitle mb-2 text-muted">Palo alto, CA</h6>
    <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
   
  </div>
</div>
           </div>
       </React.Fragment>
   );
};
export default Review;