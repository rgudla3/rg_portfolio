import React from 'react';
import './skills.css';

const Skills = () => {
  return (
    <div className="reshma__skills" id="skills">
      <h1 className="reshma__skills-header">
          Skills
        </h1>
      <div className="reshma__skills-content">
        <h2 className="reshma__about-secondary-headings">
          Technologies:
        </h2>
        <h2 className="reshma__about-secondary-headings">
          Certifications:
        </h2>
        <h3>
          AWS Certified Cloud Practitioner (CLF-C01), July 2022
        </h3>
        <div className="descriptions">
          <p>Concepts mastered: AWS compute, network, databases, and storage services; 
            AWS shared responsibility model; best security and compliance practices. 
            Click <a href="https://www.credly.com/badges/0ebb413c-61bd-4493-ab89-bf3c471db88f/linked_in?t=rfwekx">here</a> to view my certification!</p>
        </div>
        <h2 className="reshma__about-secondary-headings">
          Relevant Coursework:
        </h2>
        <p> Data Structures and Algorithms, Object-Oriented Programming, 
          Objects and Design, Computer Organization and Programming, 
          Artificial Intelligence, Discrete Mathematics, 
          Linear Algebra, Multivariable Calculus, 
          Statistics and Applications, Applied Combinatorics</p>

        
      </div>
    </div>
  )
}

export default Skills