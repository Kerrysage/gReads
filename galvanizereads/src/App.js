import React, { Component } from 'react';
import './App.css';
import HeaderExampleDividing from './Header.js'





class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={require('./GreadsLogo.png')} />
        <HeaderExampleDividing />
      </div>
    );
  }
}

class App extends Component {
  componentDidMount() {
    this.setState({ isLoading: true });

    fetch('http://localhost:3111')
      .then(response => res.json)
      .then(data => this.setState({ hits: data.hits, isLoading: false }))
      .catch(error => this.setState({  }));
  }




export default App;
