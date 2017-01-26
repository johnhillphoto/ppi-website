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
      <Route path='product' component={ Gallery } category='product' />
      <Route path='foodDrink' component={ Gallery } category='foodDrink' />
      <Route path='other' component={ Gallery } category='other' />
    </Route>
  </Router>,
  document.getElementById('app')
);
//
// A subset of this.props.params that were directly specified in this component's route. For example, if the route's path is users/:userId and the URL is /users/123/portfolios/345 then this.props.routeParams will be {userId: '123'}, and this.props.params will be {userId: '123', portfolioId: '345'}.
