import React , {useState} from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Menu = () => (
  <>
    <p><a href="#about">About</a></p>
    <p><a href="#experience">Experience</a></p>
    <p><a href="#projects">Projects</a></p>
    <p><a href="#skills">Skills</a></p>
  </>
)

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="reshma__navbar">
      <div className="reshma__navbar-links">
        <div className="reshma__navbar-links_home">
          <p><a href="#home">Reshma Gudla</a></p>
        </div>
        <div className="reshma__navbar-links_container">
          <Menu />

        </div>
        <div className="reshma__navbar-menu">
          {toggleMenu
            ? <RiCloseLine color="#C7DEF6" size={32} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#C7DEF6" size={32} onClick={() => setToggleMenu(true)} />
            }
            {toggleMenu && (
              <div className="reshma__navbar-menu_container scale-up-center"> 
                <div className="reshma__navbar-menu_container-links"> 
                  <Menu />
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
  )
}

export default NavBar