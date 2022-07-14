import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/home';
import {BrowserRouter as Router} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Home />
  </Router>
);


