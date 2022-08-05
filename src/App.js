import React from 'react'
import { Body, NavBar} from './components';
import { About, Experience, Skills, Projects } from './containers';
import './App.css';

const App = () => {
  return (
    <div className="App">
        <div className="menu__bg">
          <NavBar />
        </div>
        <Body />
        <About />
        <Experience />
        <Skills />
        <Projects />
    </div>
  )
}

export default App