import React, {Component} from 'react'
import {Route} from 'react-router-dom'

class App extends Component {
  constructor() {
    super()

  }

  render() {
    return (
      <div>
        <h1>App</h1>
        <Route path="/routing" component={Home}/>

      </div>
    )
  }
}

export default App

function Home (props) {
  console.log(props);
  return (
    <h1>Home</h1>
  )
}
