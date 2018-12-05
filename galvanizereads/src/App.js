import React, { Component } from 'react';
import './App.css';
import HeaderExampleDividing from './Header.js'
import Cards from './Cards.js'
import TeacherNav from './components/teacherNav.js'
import TeacherView from './components/teacherView.js'
import StudentView from './components/studentView.js'
const booksUrl = 'http://localhost:3111/books/'





class App extends Component {

  state = {
    books: '',
    authors:'',
    dropdownOptions:''
  }

  structureDropdown = () => {
    const options = this.state.books.map(book => {
      return( 
        {
          text: book.title,
          value:book.id,
        }
      )
    })
    this.setState({dropdownOptions: options})
  }
}


  componentDidMount() {
    fetch('http://localhost:3111/books')
      .then(response => response.json())
      .then(response => this.setState({ books: response.books }))
      .then(data => this.setState({ books: data.books }))
      .then(this.structureDropdown)
      .catch(error => {
        return this.setState({ error: !nada })
  }
  }
componentDidMount() {
  this.getBooks()
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
  teacherLogin = (e, { name }) => {
    this.setState({
      isTeacher: !this.state.isTeacher,
      activeItem: name
    })
  }
}

  render(
  ) {
    render() {
      const { books, isTeacher, dropdownOptions } = this.state;
      return (
          <div className="App">
            <img src={require('./GreadsLogo.png')} />
            <HeaderExampleDividing />
            <Cards />
          </div>
        <div className='App'>
        <NavBar />
        <Library books = { this.state.books} />
        {isTeacher ? <StudentView dropdownOptions={this.state.dropdownOptions} handleItemClick={this.handleItemClick} teacherLogin={this.teacherLogin} activeItem={this.state.activeItem}/> : <TeacherView dropdownOptions={this.state.dropdownOptions} handleItemClick={this.handleItemClick} teacherLogin={this.teacherLogin} activeItem={this.state.activeItem}/>}
        {books ? <Library books={this.state.books}/> : <Loader active />}
        </div>
      )
    }
  }
}

<TeacherNav />
<TeacherView />
<StudentView />


export default App
