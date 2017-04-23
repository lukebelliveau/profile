import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';

import Header from './Header/Header';
import Resume from './Resume/Resume';
import Games from './Games/Games';

import rootStyles from './Root.css';

const subheaders = ['resume', 'games'];

const Root = () => (
  <Router history={ browserHistory }>
    <div>
      <Header subheaders={ subheaders } />
      <Route path="/resume" component={ Resume } />
      <Route path="/games" component={ Games } />
    </div>
  </Router>
);

ReactDOM.render(<Root />,
  document.getElementById('root'));
