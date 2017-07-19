import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import './Nav.css'

class Nav extends Component {
   render() {
      return (
         <nav className="Nav">
            <div className="Nav-header">
               <div className="Nav-logo"></div>
               <div className="Nav-title">Brian's App</div>
            </div>
            <ul className="Nav-navlist">
               <li><Link to="/">Home</Link></li>
               <li><Link to="/shop">Shop</Link></li>
               <li><Link to="/cart">Cart</Link></li>
            </ul>
         </nav>
      )
   }
}

export default Nav
