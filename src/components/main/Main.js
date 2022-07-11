import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './main.css';


export default function Main(props) {
  return (
    <div className='main'>
        {/* <a className='main-link' href={`/ajurveda${props.link}`}>
        <img id={`${props.id}`} className="main-img" src={`${props.imgItem}`} />
        <p className="main-title">{props.title}</p>
        </a> */}
        <Link className='main-link' to={`${props.link}`}>
      <img id={`${props.id}`} className="main-img" src={`${props.imgItem}`} />
      <p className="main-title">{props.title}</p>
      </Link>
</div>
  )
}