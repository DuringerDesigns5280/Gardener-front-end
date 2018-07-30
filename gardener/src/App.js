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

      logClick = () => {
        console.log("you clicked me")
      }

    componentDidMount() {
      this.getPlants()
    }
    
    getPlants = () => {
      
      return fetch(apiURL)
      .then(response => response.json())
      .then(plants => {
         console.log(plants)
        this.setState({
          plants: plants
          
        })
      })
      this.login = this.login.bind(this)
      this.signUp = this.signUp.bind(this)
      this.addToGarden = this.addToGarden.bind(this)
    }
    
    

  render() {
    return (
      <div className="App" >
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <main>
              <Route exact path='/login' component={() => <Login/>} />
              <Route exact path='/' component={() => <Welcome />} />
              <Route exact path='/Gardens' component={() => <Gardens plants={this.state.plants} logClick={this.logClick} />} />
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
