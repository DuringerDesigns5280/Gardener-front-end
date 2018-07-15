import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Welcome from './components/Welcome'
import Gardens from './components/Gardens'
import Footer from './components/Footer'
import Login from './components/Login'


const apiURL = 'https://garden-back.herokuapp.com/'

class App extends Component {
  constructor(props) {
    super(props) 
      this.state = { plants: undefined }
    }

    componentDidMount() {
      this.getPlants()
    }
    
    getPlants = () => {
      
      return fetch(apiURL)
      .then(response => response.json())
      .then(plants => {
        // console.log(plants)
        this.setState({
          plants: plants
          
        })
      })
      this.login = this.login.bind(this)
      this.signUp = this.signUp.bind(this)
    }
    login(userName) {
      let url = "https://garden-back.herokuapp.com/"
      let data = {userName }
      console.log(data)
      fetch(url + "users", {
        method: 'POST',
        headers: new Headers({
          'Content-type': 'application/json'
        }),
        body: JSON.stringify(data)
      }).then(response => response.json())
        .then(data => {
          console.log(data)
          if (data.token) {
            window.localStorage.token = data.token
            this.setState({
              redirect: true
            })
          } else {
            alert(data.error)
          }
        })
    }
    signUp(userName) {
      let url = "https://garden-back.herokuapp.com/"
      let data = {userName }
      fetch(url + "auth/signup", {
        method: 'POST',
        headers: new Headers({
          'Content-type': 'application/json'
        }),
        body: JSON.stringify(data)
      }).then(response => console.log(response))
        .then(() => this.login(userName))
    }


  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <main>
              <Route exact path='/login' component={() => <Login/>} />
              <Route exact path='/' component={() => <Welcome />} />
              <Route exact path='/Gardens' component={() => <Gardens plants={this.state.plants} />} />
            </main>
          </Switch>
          <Footer />
        </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
