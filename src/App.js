import React, {Component} from 'react'
import {Route, Link, Switch, Redirect} from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import Shop from './components/Shop/Shop'
import Cart from './components/Cart/Cart'
import Product from './components/Product/Product'

const loggedIn = false
class App extends Component {
  constructor() {
    super()

  }

  render() {
    return (
      <div>
        <Nav />
        <header className="App-header">App</header>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/shop" component={Shop}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/shop/:id" component={Product}/>
          <Route path="/private" render={() => {
            if(loggedIn) {
              return (
                <Private />
              )
            } else {
              return (
                <Redirect to="/" />
              )
            }
          }}/>
        </Switch>
      </div>
    )
  }
}

export default App

function Private () {
  return (
    <h1>Private</h1>
  )
}
