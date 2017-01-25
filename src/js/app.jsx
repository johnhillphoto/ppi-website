import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './views/App';
import Home from './views/Home/Home';
import About from './views/About/About';
import Gallery from './views/Gallery/Gallery';

require('!style!css!@blueprintjs/core/dist/blueprint.css');


ReactDOM.render(
  <Router history={ browserHistory }>
    <Route path='/' component={ App }>
      <IndexRoute component={ Home } />
      <Route path='about' component={ About } myName='John Hill' />
      <Route path='gallery' component={ Gallery } category='foodDrink' />
    </Route>
  </Router>,
  document.getElementById('app')
);
