import React, { useState } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import Footbar from '../footbar/Footbar';
import './nav.css';

export default function Nav() {
    const [active, setActive] = useState("nav-h-menu");
    const [icon, setIcon] = useState("nav__toggler");
    const [dropdown, setDropdown] = useState("nav-sub-menu-off");

    const dropdownMenu = () => {
      if (dropdown === "nav-sub-menu-off") {
        setDropdown("nav-sub-menu-on");
      } else {
        setDropdown("nav-sub-menu-off")
      }
    }

    const navToggle = () => {
      if (active === "nav-h-menu") {
        setActive("nav-h-menu nav__active");
      } else setActive("nav-h-menu");
      if (icon === "nav__toggler") {
        setIcon("nav__toggler toggle");
      } else setIcon("nav__toggler");
    };
  return (
    <>
    <div className='nav-container'>
        <nav className='nav'>
        <ul id="nav-top-menu" className={active}>
            <li id='nav-first'><Link className='nav-h-menu-list' to="/pagrindinis" aria-current="page">Pagrindinis</Link></li>
            {/* <li id='nav-first'><a href="/" aria-current="page">Pagrindinis</a></li> */}
            <li><Link className='nav-h-menu-list' to="/naujienos">Naujienos</Link></li>
            {/* <li className='nav-link-menu'><Link className='nav-link-menu' to="/mokymai">Mokymai</Link></li> */}
            
            <div className='nav-menu'>
              <li id='nav-mokymai' className='nav-h-menu-list' onClick={dropdownMenu}>Mokymai</li>
                <div className={dropdown}>
                  <div className='nav-sub-menu-list'>Renginių planas</div>
                  <div className='nav-sub-menu-list'>Apie ajurvedą</div>
                  <div className='nav-sub-menu-list'>Studijos</div>
                  <div className='nav-sub-menu-list'>Seminarai</div>
                  <div className='nav-sub-menu-list'>Stovyklos</div>
                  <div className='nav-sub-menu-list'>Kita</div>
                  <div className='nav-sub-menu-list'>Lektoriai</div>
                  <div className='nav-sub-menu-list'>Atsiliepimai</div>
                </div>
            </div>
            <li><Link className='nav-h-menu-list' to="/leidyba">Leidyba</Link></li>
            <li><Link className='nav-h-menu-list' to="/sveikatinimas">Sveikatinimas</Link></li>
            <li><Link className='nav-h-menu-list' to="/galerija">Galerija</Link></li>
            <li><Link className='nav-h-menu-list' to="/login">Login</Link></li>
            <li className='nav-disable'><Link to="/parama">Parama</Link></li>
            <li className='nav-disable'><Link to="/apie">Apie mus ir partnerius</Link></li>
            <li className='nav-disable'><Link to="/naujienlaiskis">Naujienlaiškis</Link></li>
            <li className='nav-disable'><Link to="/archyvas">Archyvas</Link></li>
            <li className='nav-disable'><Link to="/kontaktai">Kontaktai</Link></li>
          
        </ul>
      
	<Link className="login" to="https://ajurvedosakademija.lt/login/">
    <i className="fa fa-sign-in" aria-hidden="true"></i>
    </Link>
    <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
        </nav>
    </div>
    </>
  )
}
