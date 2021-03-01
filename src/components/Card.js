import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = () => {
    return (
        <React.Fragment>
           <div className="row">
         

           <div className="card" style={{ width: '27%' }} >

<img src="https://images.indulgexpress.com/uploads/user/imagelibrary/2019/2/21/original/Benny_Dayal_15.jpg"
    className="card-img-top" alt="..."
    height="248px"
/>
<div className="card-body">
    <h5 className="card-title"><span>Folk</span></h5>
    <p className="card-text">Benny Dayal</p>
    <a href="#" className="card-link">More info{`->`} </a>
</div>
</div>
<div className="card" style={{ width: '27%' }} >

<img src="https://www.celebrityborn.com/admin/assets/images/people/FjPgAAOguMFDjHXW1t1w_2016_11_11.jpg"
    className="card-img-top" alt="..."
    height="248px"
/>
<div className="card-body">
    <h5 className="card-title"><span>Bollywood</span></h5>
    <p className="card-text">Vijay Yesudas</p>
    <a href="#" className="card-link">More info{`->`} </a>
</div>
</div>
<div className="card" style={{ width: '27%' }} >

<img src="https://www.bizasialive.com/wp/wp-content/uploads/2020/11/Shilpa-Rao-1200x.jpg"
    className="card-img-top" alt="..."
    height="248px"
/>
<div className="card-body">
    <h5 className="card-title"><span>Folk</span></h5>
    <p className="card-text">Shilpa Rao</p>
    <a href="#" className="card-link">More info{`->`} </a>
</div>
</div>

</div>
        

        </React.Fragment>

    );
};
export default Card;