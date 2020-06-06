import React, { Component } from 'react';
import './Soda.css';

class Soda extends Component {
    state = {
        num: 0
    }

    handleClick = () => {
        this.setState( st => ({
            num: st.num + 1
        }));
    }
    render(){
        return(
            <div className="Soda">
                <img className="Soda-img" src={"../images/coca-cola.jpg"} alt="Coca-Cola"/>
                <div className="Box">
                    <div>
                        <h1>Soda: {this.state.num}</h1>  
                        <button className="Soda-Button" onClick={this.handleClick}>Qty</button>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Soda;