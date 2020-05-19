import React from 'react';
import { Switch, Route } from 'react-router-dom';

import routesList from './Routes';


// Routes component to create react-router routes for navigation
class Routes extends React.Component {

  render() {

    const menu = routesList.map((route, index) => {
      return (route.component) ? (
          <Route
              key={index}
              path={route.path}
              exact={route.exact}
              name={route.name}
              render={props => (
                  <route.component {...props} onLoginPress={this.props.onLoginPress} />
              )} />
      ) : (null);
    });

    return (
      <Switch>
        {menu}
      </Switch>
    );
  }
}

export default Routes
