// External modules
import React from 'react';
import { Link } from 'react-router-dom';

class Account extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Account</h1>
        <Link to={ config.basepath + '/' }>
          Return to home
        </Link>
      </div>
    );
  }
}

export { Account };
