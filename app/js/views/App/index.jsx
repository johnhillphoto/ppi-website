import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './app.css';

export default class App extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className='App'>
        <Link to='/'>Home inside App</Link>
        <Link to='/about'>About</Link>

        { children }
      </div>
    );
  }
}
