import React, { Component } from  'react';
import { render } from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from '../components/Home'
import '../style/styles.css'

const About = ()=>(
  <div>
    <p>About</p>
  </div>
)

const Routes=()=>(
  <Router>
    <div className='container'>
      <nav>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
            </nav>
        <hr />
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
    </div>
  </Router>
)



render(<Routes />, document.getElementById('root'))
