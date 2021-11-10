import React from 'react';
import './styles/Base.scss';
import Home from './Pages/Home';
import About from './Pages/About';
import CreateNote from './Pages/CreateNote'
import Nav from './Pages/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/note' component={CreateNote} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
