import { collection, onSnapshot, orderBy, query, snapshotEqual } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../../firebase';
import './allNews.css'
import { motion } from 'framer-motion';


export default function AllNews() {
  let [naujienos, setNaujienos] = useState([]);

  useEffect(() => {

    const newsRef = collection(db, "naujienos");
    const newsList = query(newsRef, orderBy("createdAt", "desc"));

    onSnapshot(newsList,(snapshot) => {
     const naujienos = snapshot.docs.map((doc) => ({
       id: doc.id,
       ...doc.data(),
     }));
      setNaujienos(naujienos);
      // console.log(naujienos);
    })
  }, [])
  const [isOpen, setIsopen] = useState(false);
  const [imgSizeClass, setImgSizeClass] = useState("allNews-image");
  const changeImageClass = () => {
    if (imgSizeClass === "allNews-image") {
      return setImgSizeClass("allNews-image-resize")
    } else {
      return setImgSizeClass("allNews-image")
    }
  }
  // return (
  //   <>
  //     { naujienos.length === 0 ? (<p>Nera naujienu</p>) : (
  //     naujienos.map((naujiena) => (
  //       <div>
  //       <div className='allNews-card' key={naujiena.id} onClick={() => setIsopen(!isOpen)}>
      
  //         {!isOpen && ( <img className='allNews-image' src={naujiena.imageUrl} /> )}
  //      {isOpen && ( <img className='allNews-image-resize' src={naujiena.imageUrl} />)}

  //           <p className='allNews-date'>{naujiena.Data}</p>
  //           <h3 className='allNews-title'>{naujiena.Pavadinimas}</h3>
  //           {!isOpen && (
            
  //           <p className='allNews-desc'>{naujiena.Aprasymas.substring(0, 300)}</p>
            
  //           )}
  //           {isOpen && (
            
  //           <p className='allNews-desc'>{naujiena.Aprasymas}</p>
           
  //           )}
  //         {/* </div> */}
  //         </div>
  //        </div>
  //     ))
      
  //     )}
  //   </>
  // )
  return (
    <>
    { naujienos.length === 0 ? (<p>Nera naujienu</p>) : (
    naujienos.map((naujiena) => (
    <motion.div layout onClick={() => setIsopen(!isOpen)} className="allNews-card">
      {!isOpen && ( <img className='allNews-image' src={naujiena.imageUrl} /> )}
      {isOpen && ( <img className='allNews-image-resize' src={naujiena.imageUrl} />)}
        <p className='allNews-date'>{naujiena.Data}</p>
        <h3 className='allNews-title'>{naujiena.Pavadinimas}</h3>
{!isOpen && (
  <motion.div layout='position'>
  <p className='allNews-desc'>{naujiena.Aprasymas.substring(0, 300)}
  </p>  
  </motion.div>
 )}
{isOpen && (
  <motion.div layout='position'>
  <p className='allNews-desc'>{naujiena.Aprasymas}</p>
  </motion.div>
)}
  </motion.div>
    ))
    )} 
</>
) 
}
