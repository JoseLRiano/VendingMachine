import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Chips from './Chips';
import Fish from './Fish';
import Soda from './Soda';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="nav-bar">
        <NavLink exact className="nav-link" activeClassName="active-link" to="/">Home</NavLink>
        <NavLink exact className="nav-link" activeClassName="active-link" to="/Chips">Chips</NavLink>
        <NavLink exact className="nav-link" activeClassName="active-link" to="/Soda">Soda</NavLink>
        <NavLink exact className="nav-link" activeClassName="active-link" to="/Fish">Fish</NavLink>      
      </nav>
      <Switch>
          <Route exact path="/" component={VendingMachine} />
          <Route exact path="/Chips" component={Chips} />
          <Route exact path="/Soda" component={Soda} />          <Route exact path="/chips" component={Chips} />
          <Route exact path="/Fish" component={Fish} />
        </Switch>
      
    </div>
  );
}

export default App;
