import React from 'react';
import './home.css';
import fairy from '../../assets/fairy-lights.png';
import linkedin from '../../assets/linkedin icon.png';
import github from '../../assets/github icon.png';
import email from '../../assets/Mail.png';
import reshma_intro from '../../assets/ReshmaPic.png';

const Home = () => {
  return (
    <><div className="hi-there">Hi there! I’m Reshma.</div>
    <div className="fairy-lights">
      <img src={fairy} />
      </div>
      <div className="welcome-msg">Welcome to my website.</div>
      <div className="line-separater" />
      <div className="linkedin">
      <a href="https://linkedin.com/in/reshma-gudla-930217220/"><img src={linkedin}/></a>
      </div>
      <div className="github">
      <a href="https://github.com/rgudla3"><img src={github}/></a>
      </div>
      <div className="email">
      <a href="mailto:reshmagudla03@gmail.com"><img src={email}/></a>
      </div>

      <div className="reshma-intro-pic">
        <img src={reshma_intro} />
      </div>
    </>
  )
}

export default Home