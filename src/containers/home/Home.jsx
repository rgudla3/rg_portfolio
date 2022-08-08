import React from 'react';
import './home.css';
import fairy from '../../assets/fairy-lights.png';
import linkedin from '../../assets/linkedin icon.png';
import github from '../../assets/github icon.png';
import email from '../../assets/Mail.png';
import reshma_intro from '../../assets/ReshmaPic.png';

const Home = () => {
  return (
    <div className="home__header" id="home">
      
      <div className="home__header-content">
      
      <div className="fairy-lights">
      <img src={fairy} />
      </div>
      
      <h1 className="hi-there">Hi there! I’m Reshma.</h1>
      <h2 className="welcome-msg">Welcome to my website.</h2>
      <div className="line-separater" />
      <div className="contact">
        <div className="linkedin">
        <a href="https://linkedin.com/in/reshma-gudla-930217220/"><img src={linkedin}/></a>
        </div>
        <div className="github">
        <a href="https://github.com/rgudla3"><img src={github}/></a>
        </div>
        <div className="email">
        <a href="mailto:reshmagudla03@gmail.com"><img src={email}/></a>
        </div>
      </div>
      
      </div>
      <div className="reshma-intro-pic">
        <img src={reshma_intro} />
      </div>
    </div>
  )
}

export default Home