import React, { useState } from 'react';
import '../admin/data/allNews.css'
import { motion } from 'framer-motion'


function Naujiena(props) {
  const [isOpen, setIsopen] = useState(false);
  
  
  return (
        <motion.div layout onClick={() => setIsopen(!isOpen)} className="allNews-card">
          {!isOpen && ( <img className='allNews-image' src={props.imageUrl} /> )}
          {isOpen && ( <img className='allNews-image-resize' src={props.imageUrl} />)}
            <p className='allNews-date'>{props.Data}</p>
            <h3 className='allNews-title'>{props.Pavadinimas}</h3>
                {!isOpen && (
            <motion.div layout='position'>
              <p className='allNews-desc'>{props.Aprasymas.substring(0, 300)}...
              </p>  
            </motion.div>
     )}
    {isOpen && (
      <motion.div layout='position'>
      <p className='allNews-desc'>{props.Aprasymas}</p>
      </motion.div>
    )}
      </motion.div>
       
  ) 
  
}

export default Naujiena;
