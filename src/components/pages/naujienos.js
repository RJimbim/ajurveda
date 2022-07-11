import React, { useEffect, useState } from 'react'
import Footbar from '../footbar/Footbar'
import Nav from '../navbar/Nav'
// import './leidyba.css'
import SmallTopBar from '../topbar/SmallTopBar'
import firebasetest from '../../firebasetest'
import '../admin/data/allNews.css'
import { motion } from 'framer-motion'
import LeidybaData from './leidybaData'
import Naujiena from './naujiena'
import NavDropdown from '../navbar/NavDropdown'
// import NaujienuSarasas from './naujienuSarasas'

const sarasasRef = 
firebasetest
.firestore()
.collection('naujienos')
.orderBy('createdAt', 'desc');

const Naujienos = () => {
  const [galleryclass, setGalleryclass] = useState("gallery-grid")
  const changeGallery = () => {
  if (galleryclass === "gallery-grid") {
    setGalleryclass("gallery-splide")
      } else {
        setGalleryclass("gallery-grid")
      }
    };

const [naujienuSarasas, setNaujienuSarasas] = useState([]);
const [paskutineNaujiena, setPaskutineNaujiena] = useState(); 
const [loading, setLoading] = useState(false);
const [isEmpty, setIsEmpty] = useState(false);
const [isOpen, setIsopen] = useState(false);
const [imgSizeClass, setImgSizeClass] = useState("allNews-image");

  
  const changeImageClass = () => {
    if (imgSizeClass === "allNews-image") {
      return setImgSizeClass("allNews-image-resize")
    } else {
      return setImgSizeClass("allNews-image")
    }
  }


useEffect(() => {
  sarasasRef
  .limit(3)
  .get()
  .then((collections) => {
    const sarasas = collections.docs.map((item) => item.data());
    const paskutineNaujiena = collections.docs[collections.docs.length -1]
    setNaujienuSarasas(sarasas);
    setPaskutineNaujiena(paskutineNaujiena)
    // console.log(sarasas);
  })
}, [])

const updateState = (collections) => {
  const isCollectionsEmpty = collections.size === 0;
  if (!isCollectionsEmpty) {
    const sarasas = collections.docs.map((item) => item.data());
    const paskutineNaujiena = collections.docs[collections.docs.length -1]
    setNaujienuSarasas((naujienuSarasas) => [ ...naujienuSarasas, ...sarasas]);
    setPaskutineNaujiena(paskutineNaujiena);
    
  } else {
    setIsEmpty(true)
  }
  setLoading(false)
}

const daugiauNaujienu = () => {
  setLoading(true)
  sarasasRef
  .startAfter(paskutineNaujiena)
  .limit(3)
  .get()
  .then((collections) => {
    updateState(collections)

})
}

if (naujienuSarasas.length === 0) {
  return <h1 className='moreNews'>Ikeliamos naujienos</h1>
}



const news = naujienuSarasas.map((prop, index) => {
  return (
<Naujiena key={index} {...prop}/>
  )
})
return (
  <div>
    <SmallTopBar />
       <Nav />
       <h1 className="moreNews">Naujienos</h1>
       {/* <NavDropdown /> */}
  <div className="allNews-container">
    {news}
{loading && <h1 className='moreNews'>Ikeliama...</h1>}
{!loading && !isEmpty && <div id='moreNews-id' className='allNews-card' onClick={daugiauNaujienu}>Daugiau naujienų</div>}
{isEmpty && <h1 className='moreNews'>Nebėra naujienų</h1>}
{/* <p onClick={changeGallery} className={galleryclass}>Leidyba</p> */}

</div>
<Footbar />
</div>
)
}

export default Naujienos