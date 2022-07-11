import React from 'react'
import Footbar from '../../footbar/Footbar'
import Nav from '../../navbar/Nav'
import images from './images'
import './gallery.css'
// import { motion } from "framer-motion"
import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SmallTopBar from '../../topbar/SmallTopBar'

const Galerija = () => {
  const galleryview = images.map(item => {
    return (
      <div key={item.id} className="gallery-item">
        <img className='gallery-image' src={item.imgItem}></img>
        <p>{item.title}</p>
        <div className="gallery-links">
          <Link to={item.link1}>{item.kursas1}</Link>
          <Link to={item.link2}>{item.kursas2}</Link>
          <Link to={item.link3}>{item.kursas3}</Link>
        </div>
      </div>
     
      // < key={item.id} {...item}/>
    )
    })
  return (
        <div>
          <SmallTopBar />
          <Nav />
          <div className="gallery-container">
            {galleryview}
          </div>
           <Footbar />
        </div>
  )
}

export default Galerija