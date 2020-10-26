// External modules
import React from 'react';
import { Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import config from 'config';

// Internal modules
import { history } from '../_helpers/history.js';
import { Home } from '../views/Home/Home.jsx';
import { Account } from '../views/Account/Account.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Router history={ history }>
          <div>
            <Route path={ config.basepath + '/' } exact component={ Home } />
            <Route path={ config.basepath + '/account' } exact component={ Account } />
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
