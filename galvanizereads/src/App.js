import React, { Component } from 'react';
import './App.css';
import HeaderExampleDividing from './Header.js'
import Cards from './Cards.js'





class App extends Component {
  state = {
    books: ''
  }
  async componentDidMount() {
    fetch('http://localhost:3111/books')
      .then(response => response.json())
      .then(data => this.setState({ books: data.books }))
      // .catch(error => this.setState({  }));
  }

  render() {
    return (
      <div className="App">
        <img src={require('./GreadsLogo.png')} />
        <HeaderExampleDividing />
        <Cards />
      </div>
    );
  }
}



export default App
