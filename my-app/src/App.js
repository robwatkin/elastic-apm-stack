import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApmRoute } from '@elastic/apm-rum-react'
import './App.css';
import Car from './Car'

function App() {

  return (
    <Router>
      <div className="App">
        <p>
          My car is
      </p>

        <ApmRoute path='/car' component={Car} />

      </div>
    </Router>

  );
}

export default App;
