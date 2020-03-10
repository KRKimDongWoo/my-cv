import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Toolbar from 'components/layout/Toolbar';

import './App.css';
import PortfolioView from 'components/views/PortfolioView';

function App() {
  return (
    <div>
      <Router>
        <Toolbar />
        <Switch>
          <Route component={PortfolioView} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
