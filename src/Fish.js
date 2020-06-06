import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Fish.css';

class Fish extends Component {
    render(){
        return(
            <div className="Fish">
                <div className="Box">
                    <h1>Your are getting a Fish! {"\n"}
                    <Link className="Link" to="/">GO BACK</Link>
                    </h1>
                </div>
            </div>
        );
    }
}

export default Fish;