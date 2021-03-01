import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Rating from './components/Rating';
import Card from './components/Card';
import Review from './components/Review';

class App extends Component {
  render() {
    return (
      
      <div>
        <Navbar />
        <section className="main">
          <div className="container">
            <div className="row">
              <div >
                <h2>Cari Cari</h2>
                <p>Live from their sofa to yours.Get closer to your favorite artists,and never miss out </p>
               <div className="flexRow wrap">
               <Rating
                 
                 value="70"
                 textColor="red"
                 pathColor="magenta"
               />
               <Rating
                
                 value="30"
                 textColor="red"
                 pathColor="magenta"
               />
                <Rating
                
                 value="50"
                 textColor="red"
                 pathColor="magenta"
               />
                <Rating
                
                 value="30"
                 textColor="red"
                 pathColor="magenta"
               />
               </div>

<section className="shows">
<h3>Upcoming shows</h3>
<div className="cardtop">
<Card/>
</div>
</section>
  <section className="review">
    <h3>Reviews</h3>
    <div className="cardtop">
    <Review/>
    </div>
  </section>
              </div>
            </div>
          </div>

        </section>

      </div>
    );
  }
}
export default App;
