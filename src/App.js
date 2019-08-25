import React, { Component } from 'react'
import Index from './pages/index'
import Create from './pages/create'
import Signup from './pages/signup'
import Login from './pages/login'
import Post from './pages/post'
import User from './pages/users'
import Tag from './pages/tags'
import {Switch, Route} from 'react-router-dom'
import './App.css'
class App extends Component {
  render() {
    return(
          <div>
          <Switch>
            <Route exact path='/' component={Index} />
            <Route exact path='/create' component={Create} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/tags/:item' component={Tag} />
            <Route exact path='/:users?' component={User} />
            <Route exact path='/:users?/:id?' component={Post} />
          </Switch>
          </div>
    )
  }
}

export default App