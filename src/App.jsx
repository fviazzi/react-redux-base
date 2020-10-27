// External modules
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { connect } from 'react-redux';
import config from 'config';

// Internal modules
import { Home } from './views/Home/Home.jsx';
import { Account } from './views/Account/Account.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const history = createBrowserHistory();

    return (
      <div>
        <BrowserRouter history={ history }>
          <div>
            <Route path={ config.basepath + '/' } exact component={ Home } />
            <Route path={ config.basepath + '/account' } exact component={ Account } />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
