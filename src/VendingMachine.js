import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './VendingMachine.css';

class VendingMachine extends Component {
    render(){
        return(
            <div className="Vending-Machine" >
                <img className="Image-VendingMachine" src={'../images/vendingMachine.jpg'} alt="Vending Machine" />
                <div className="little-menu">
                    <div className="sideLeft">
                        <h2>This is an awsome Vending Machine</h2>
                    </div>
                    <div className="sideRight">
                        <Link exact className="Mini-Menu" to="/Chips">Chips</Link>
                        <Link exact className="Mini-Menu" to="/Soda">Soda</Link>
                        <Link exact className="Mini-Menu" to="/Fish">Fish</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default VendingMachine;