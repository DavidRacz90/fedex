import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { simpleAction } from './actions/actions';

class App extends Component {

  componentDidMount = () => {
    console.log(this.props.username);
    this.props.simpleAction();
  }

  componentDidUpdate = () => {
    console.log(this.props.username);
  }

  render() {
    return (
      <h1>Hello</h1>
    )
  }
}

const mapStateToProps = (store) => {
  const { username } = store.simpleReducer;
  return {
    username,
  };
};

const mapDispatchToProps = {
  simpleAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
