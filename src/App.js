import React, { Component } from 'react';
import Routes from './Routes';
import { connect } from 'react-redux';
import { closeHeaderMenu }  from './redux/actions/UI';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  closeHeaderMenu = e => {
    if(this.props.ui.header.isMenuVisible) {
      this.props.closeHeaderMenu();
    }
  }

  render() {
    return (
      <div onClick={this.closeHeaderMenu} >
        <Routes/>
      </div>
    );
  }
}

export default connect(
  store => ({
    ui: store.ui
  }), { closeHeaderMenu }
)(App);
