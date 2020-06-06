import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Chips.css';

class Chips extends Component {
    render(){
        return(
            <div className="Chips">
                <img className="Chips-img" src={"../images/chips.jpg"} alt="Chips" />
                <div className="Box">
                    <h1> Chips 
                    <Link className="Link"  exact to="/">Go Back</Link>
                    </h1>
                </div>
               
            </div>
        );
    }
}

export default Chips;