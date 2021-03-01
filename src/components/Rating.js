import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../App.css';
import React from 'react';

const Rating=(props)=> {
    return (
        <div className="flexRow">
        <div className="ratingContainer">
        <CircularProgressbar
               value={props.value}
               text={`${props.value}%`}
               strokeWidth={1}
               styles={buildStyles({
                 textColor:props.textColor,
                 pathColor:props.pathColor,
                } )}/>
        </div>
           
                <div>
                    <p>{props.ratingName}</p>
                    
                </div>
        </div>
    );
};
export default Rating
