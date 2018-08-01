import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Welcome from './components/Welcome'
import Gardens from './components/Gardens'
import Footer from './components/Footer'
import Login from './components/Login'
import Resources from './components/Resources'
import MyGarden from './components/MyGarden'
import { HeaderSubHeader } from 'semantic-ui-react';


const apiURL = 'https://garden-back.herokuapp.com/'

class App extends Component {
  constructor(props) {
    super(props) 
      this.state = {  plants: undefined, 
                      userGardens: undefined,
                      data: [],
                      load:false,
                      sent:false,
                      id:'',
                      name: '',
                      description: '',
                      careOfPlant: '',
                      imgUrl: '',
    }

      
    }
     
    componentDidMount() {
      this.getPlants()
      this.getuserGardens()
      this.addToGarden = this.addToGarden.bind(this)
      this.deleteCard = this.deleteCard.bind(this)
      this.makeCard = this.makeCard.bind(this)
      this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
    getuserGardens = () => {
      return fetch('https://garden-back.herokuapp.com/Mygarden')
      .then(response => response.json())
      .then(userGardens=> {
        console.log( "MY", userGardens)
        this.setState({
          userGardens: userGardens
        })
      })
    }
    
    getPlants = () => {
      
      return fetch(apiURL)
      .then(response => response.json())
      .then(plants => {
        this.setState({
          plants: plants
          
        })
      })
    }

    addToGarden = (event, plant) => {
      event.preventDefault()
      console.log("PLANT TO POST", plant)
      fetch ('https://garden-back.herokuapp.com/Mygarden', {
        method: "POST",
        headers: new Headers({"content-type": "application/json"}),
        body: JSON.stringify(plant)
      })
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.getPlants()
      })
    }

    makeCard = (event, plant) => {
      console.log(plant)
      event.preventDefault()
      fetch ('https://garden-back.herokuapp.com/Mygarden', {
        method: "POST",
        headers: new Headers({"content-type": "application/json"}),
        body: JSON.stringify(plant)
      })
      .then(response => {
        return response.json()
      })
    }


    
    deleteCard = (event, id) => {
      event.preventDefault()
        const editId = id
        let deleteUrl = `https://garden-back.herokuapp.com/Mygarden/${editId}`
        fetch(deleteUrl, {
          method: "DELETE",
          headers: new Headers({"content-type": "application/json"})
        })
        .then(response => {
          return response.json()
        })
        .then(response => {
          this.getuserGardens()
        })
    }

    

  render() {
    return (
      <div className="App" >
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <main>
              <Route exact path='/login' component={() => <Login handleChange={this.handleChange} makeCard={this.makeCard}/>} />
              <Route exact path='/' component={() => <Welcome />} />
              <Route exact path='/Resources' component={() => <Resources />} />
              <Route exact path='/MyGarden' component={() => <MyGarden userGardens={this.state.userGardens} deleteCard={this.deleteCard}/>} />
              <Route exact path='/Gardens' component={() => <Gardens plants={this.state.plants} addToGarden={this.addToGarden}  />} />
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
