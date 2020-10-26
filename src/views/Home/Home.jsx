// External modules
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import config from 'config';

// Internal Modules
import { homeActions } from './home.actions.js';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.changeMsg = this.changeMsg.bind(this);
  }

  changeMsg(e) {
    const { dispatch } = this.props;
    dispatch( homeActions.updateMessage( "We changed the message :)" ) );
  }

  render() {

    const message = this.props.message;

      return (
          <div>
            <h1 id="message">{message}</h1>
            <button id="change-msg" onClick={ this.changeMsg }>Change Message</button>
            <br/>
            <Link to={ config.basepath + '/account' }>
              Let's go to account
            </Link>
          </div>
      );
  }
}

const mapStateToProps = (state) => {
  const { message } = state.home;
  return { message };
}

const connectedHome = connect(mapStateToProps)(Home);
export { connectedHome as Home };
