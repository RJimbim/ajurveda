import React, { useState } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import './footbar.css';

export default function Footbar() {
  const [active, setActive] = useState("footbar-h-menu");
  const [icon, setIcon] = useState("footbar__toggler");

  const footbarToggle = () => {
    if (active === "footbar-h-menu") {
      setActive("footbar-h-menu footbar__active");
    } else setActive("footbar-h-menu");
    if (icon === "footbar__toggler") {
      setIcon("footbar__toggler toggle");
    } else setIcon("footbar__toggler");
  };
  return (
    <div className='footbar-container'>
        <nav className='footbar'>
        <ul className={active}>
            <li><Link to="/parama">Parama</Link></li>
            <li><Link to="/apie">Apie mus ir partnerius</Link></li>
            <li><Link to="/naujienlaiskis">Naujienlaiškis</Link></li>
            <li><Link to="/archyvas">Archyvas</Link></li>
            <li><Link to="/kontaktai">Kontaktai</Link></li>
        </ul>
	{/* <Link className="login" to="https://ajurvedosakademija.lt/login/"><i className="fa fa-sign-in" aria-hidden="true"></i></Link> */}
  <div onClick={footbarToggle} className={icon}>
        <div className="footbar-line1"></div>
        <div className="footbar-line2"></div>
        <div className="footbar-line3"></div>
      </div>
        </nav>
    </div>

  )
}
