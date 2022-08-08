import React from 'react'
import { Body, NavBar} from './components';
import {About, Experience, Home, Skills, Projects } from './containers';
import './App.css';

const App = () => {
  return (
    <div className="App">
        <div className="menu__bg">
          <NavBar />
        </div>
        <Home />
        <About />
    </div>
  )
}

export default App