import { getNodeText } from '@testing-library/react';
import React from 'react';
import './about.css';

import reshmaGT from '../../assets/reshmaGT.png';

const About = () => {
  return (
    <div className="reshma__about" id="about">
      <div className="reshma__about-content">
        <h1 className="reshma__about-header">
          About Me
        </h1>
        <div className="reshma__about-blurb">

          <p>Hi! My name’s <em>Reshma Gudla (she/her)</em>, and I am a student at the <em>Georgia Institute of Technology</em> in Atlanta. I am currently pursuing 
          a Bachelor’s degree in computer science with concentrations in <em>artificial intelligence</em> and <em>information internetworks</em> with an 
          expected graduation date of <em>May 2024</em>. That being said, I’m 
          interested in <em>all</em> areas of technology: web development, 
          cloud computing, data science, and so much more. </p>

          <p>I love using my <em>interdisciplinary</em> skillset to help out the greater good, 
          whether that be creating <em>Android</em> applications to address my local community’s 
          issues or serving as a <em>professional academic coach</em> to high school students.</p>

          <p>Thank you for taking the time to look through my personal website. Feel free 
          to reach out!</p>

        </div>
      </div>
      <div className="reshma-gt-pic">
        <img src={reshmaGT} />
      </div>
    </div>
  )
}

export default About