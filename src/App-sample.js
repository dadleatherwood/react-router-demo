import React, { Component } from 'react'
import './App.css'

import {Link, Switch, Route} from 'react-router-dom'


class App extends Component {
  render() {
    return (
       <div className="App">
         <nav>
            <ul>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/shop/store">Store</Link></li>
               <li><Link to="/shop/features">Features</Link></li>
               <li><Link to="/cart">Cart</Link></li>
            </ul>
         </nav>
         <Switch>
               {/*Switch makes sure we only match one route at a time*/}
            <Route exact path="/" component={Home} />
            <Route exact path="/shop" component={Shop} />
            <Route path="/shop/:productId" component={Home} />
               {/*This route takes a parameter of product id*/}
            <Route path="/cart" component={Cart} />
         </Switch>
      </div>
    );
  }
}

export default App;


function Home () {
   return (
      <h1>Home</h1>
   )
}

function Shop () {
   // This is just to illustrate child routes
   return (
      <div>
         <h1>Shop</h1>
         <Switch>
            <Route path="/shop/store" render={() => <h2>Store</h2>}/>
            <Route path="/shop/features" render={() => <h2>Features</h2>}/>
         </Switch>


      </div>
   )
}

function Cart () {
   return (
      <h1>Cart</h1>
   )
}
