import React, { useState, useEffect } from 'react';
import blackLogo from '../Assets/Images/logo-black.png'
import whiteLogo from '../Assets/Images/logo-white.png'
import '../Assets/KeyFrames.css'
import './Header.css'

function Header() {

  const [showHeader, setShowHeader] = useState(false);

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > window.innerHeight / 2) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function sidebarOpener() {
    document.getElementById("sidebar").classList.add("active")
    document.querySelector('#sidebar-body-overlay').classList.add("sidebar-body-overlay")
  }

  const leftLinks = [
    {
      href: "#home",
      name: "Home"
    },
    {
      href: "#about",
      name: "About"
    },
    {
      href: "#team",
      name: "Team"
    },
    {
      href: "#work",
      name: "Work"
    },
  ]

  const rightLinks = [
    {
      href: "#pricing",
      name: "Pricing"
    },
    {
      href: "#app-sec",
      name: "App"
    },
    {
      href: "#blog",
      name: "Blog"
    },
    {
      href: "#contact",
      name: "Contact"
    },
  ]


  return (
    <div className={`container  ${showHeader ? 'fixed' : 'absolute'}`}>
      <header className='header flex-center' id='header'>
        <nav className='nav'>
          <ul className='ul'>
            {leftLinks.map(item => (
              <a href={item.href} className='list-item-a'><li className='list-item underline'>{item.name}</li></a>
            ))}
            <a href="#home" className='list-item-a white-logo logo'><li className='list-item'><img src={whiteLogo} alt="white-logo" /></li></a>
            <a href="#home" className='list-item-a black-logo logo'><li className='list-item'><img src={blackLogo} alt="black-logo" /></li></a>
            {rightLinks.map(item => (
              <a href={item.href} className='list-item-a'><li className='list-item underline'>{item.name}</li></a>
            ))}
            <a href="javascript:void(0);" className='list-item-a hambarg-menu'><button className='hambarg-menu' onClick={sidebarOpener} ><i className="fa-solid fa-bars"></i></button></a>
          </ul>
        </nav>
      </header>
    </div>

  )
}

export default Header
