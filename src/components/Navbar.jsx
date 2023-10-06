import React from 'react';
import {useState, useEffect, useRef} from 'react';
import {navLinks} from '../constants';
import {logo, bars, close} from '../assets';


const Navbar = () => {
 const [active, setActive] = useState("Home");
 const [toggle, setToggle] = useState(false);
 const [navbar, setNavbar] = useState(false);

 useEffect(() => {
  ScrollReveal().reveal('.nav-anim',{origin:"top", distance:"200px"});

  const fixedNavbar = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else if (window.scrollY <= 5) {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", fixedNavbar);
  return () => {
    window.removeEventListener("scroll", fixedNavbar);
  };
}, []);

  const [activeSection, setActiveSection] = useState('section1');
    const sections = useRef([]);

    const handleScroll = () => {
      const pageYOffset = window.scrollY;
      let newActiveSection = null;

      sections.current.forEach((section) => {
        const sectionOffsetTop = section.offsetTop-265;
        const sectionHeight = section.offsetHeight;
    
        if (pageYOffset >= sectionOffsetTop && pageYOffset < sectionOffsetTop + sectionHeight) {
          newActiveSection = section.id;
        }
      });

      setActiveSection(newActiveSection);
    };

    useEffect(() => {
      sections.current = document.querySelectorAll('[data-section]');
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <nav className={`${navbar ? 'navbar active border-b' : ' bg-transparent'} w-full nav-anim flex py-4 max-sm:px-10 sm:px-16 items-center gap-12 fixed z-50  max-w-[1280px]`} >
      <div className="w-full flex items-center gap-12">
        <a href="/"><img className='w-[90px]' src={logo} alt="Go Happy Pastries" /></a>
        <ul className="list-none sm:flex hidden justify-start items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
            key={nav.id}
            className={`${activeSection === nav.id ? 'active underline underline-offset-8 decoration-2 decoration-primary' : ''} nav-link text-baseGray hover:text-darkGray cursor-pointer ${index === navLinks.length - 1 ? '' : 'mr-10'}`}
            onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          
          <img src={toggle ? close : bars} alt="menu" 
          className='w-[24px] h-[24px] cursor-pointer object-contain' 
          onClick={() => setToggle((prev) => !prev)}/>


          <div className={`${toggle ? 'flex' : 'hidden'} py-4 mr-6 px-6 absolute border bg-white min-w-[160px] top-[80px] right-0  rounded-lg sidebar`}>
            <ul className="list-none flex flex-col gap-2 justify-start items-start flex-1">
              {navLinks.map((nav, index) => (
                <li
                key={nav.id}
                className={`nav-link text-baseGray hover:text-darkGray cursor-pointer ${activeSection === nav.id ? 'active underline underline-offset-8 decoration-2 decoration-primary' : ''} ${index === navLinks.length - 1 ? '' : 'mr-10'}`}
                onClick={() => setActive(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar