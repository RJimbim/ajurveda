//--------------------
// i leidyba.js 
 {/* {naujienuSarasas.map((props, index) => {
    return (
      // <div key={index} className="allNews-container">
      // {/* <div key={index}> */}
      //   <img className='allNews-image' src={item.imageUrl} />
      //   <p className='allNews-date'>{item.Data}</p>
      //   <h3 className='allNews-title'>{item.Pavadinimas}</h3>
      //   <p className='allNews-desc'>{item.Aprasymas}</p>
      // {/* </div> */}
      // </div>
<div key={index} className="allNews-container">
<motion.div layout onClick={() => setIsopen(!isOpen)} className="allNews-card">
          {!isOpen && ( <img className='allNews-image' src={props.imageUrl} /> )}
          {isOpen && ( <img className='allNews-image-resize' src={props.imageUrl} />)}
            <p className='allNews-date'>{props.Data}</p>
            <h3 className='allNews-title'>{props.Pavadinimas}</h3>
    {!isOpen && (
      <motion.div layout='position'>
      <p className='allNews-desc'>
        {props.Aprasymas.substring(0, 300)} {props.Aprasymas.length > 300 ? '...' : ''}
      </p>  
      </motion.div>
     )}
    {isOpen && (
      <motion.div layout='position'>
      <p className='allNews-desc'>{props.Aprasymas}</p>
      </motion.div>
    )}
      </motion.div>
</div>
    )
  })}
  {loading && <h1>Loading...</h1>}
  {!loading && !isEmpty && <button onClick={daugiauNaujienu}>daugiau naujienu</button>}
  {isEmpty && <h1>Nebera naujienu</h1>}
      {/* <p onClick={changeGallery} className={galleryclass}>Leidyba</p> */}
       */}
//--------------------

//--------------------
// rodo visus irasus is firebase ir kiekviena kortele reaguoja atskirai

import React, { useEffect, useState } from 'react'
import { collection, doc, getDocs } from "firebase/firestore";
import { db, storage } from '../../firebase';
import Footbar from '../footbar/Footbar'
import Nav from '../navbar/Nav'
import SmallTopBar from '../topbar/SmallTopBar'
import Naujiena from './naujiena'
import '../admin/data/allNews.css'
import InfiniteScroll from 'react-infinite-scroller';
// import './naujienos.css'
import moment from 'moment';
import { getDownloadURL, listAll, ref } from 'firebase/storage';


const Naujienos = () => {
  const [news, setNews] = useState([]);
  
  useEffect(() => {
   const fetchNews = async () => {
try {
    const allNews = await getDocs(collection(db, "naujienos"));
  
    setNews(allNews.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
   
  } catch(err) {
    console.log("klaida")
    console.log(err)
  }
   };
   fetchNews()
  }, []);
  console.log(news)
  const visosnaujienos = news.length === 0 ? (<p>Nera naujienu</p>) : (
  news.sort((a, b) => a.createdAt < b.createdAt ? 1 : -1).map((post) => {
    return (
      <Naujiena key={post.id} {...post}/>
    )
  }))
// //-------------------

// const firstBatchNews = db.collection('naujienos')
// .orderBy('createAt')
// .limit(5)
// .get();
 
// const nextBatchNews = db.collection('naujienos')
// .orderBy('createAt')
// .startAfter(last_doc_in_firstBatch.createdAt)
// .limit(5)
// .get();
// //-------------------

//   const imageListRef = ref(storage, "newsImages")
//   const [imageList, setImageList] = useState([]);
  
//   useEffect(() => {
//     listAll(imageListRef).then((res) => {
//         res.items.forEach((item) => {
//             getDownloadURL(item).then((url) => {
//                 setImageList((prev) => [...prev, url]);
//             });
//         });
//     });
// }, []);
//    const visosNuotraukos = imageList.map((url) => {
//     return (
//      <div>paveikslelis</div>
//     )
//   })
// function loadFunc() {
//   if(!this.state.isLoading) {
//     this.props.fetchNews();
//   }
// }
  return (
    <div>
      <SmallTopBar />
       <Nav />
       <div className="allNews-container">{visosnaujienos}</div>
       {/* <div className="newsList">{visosNuotraukos}</div> */}
       {/* <InfiniteScroll
    pageStart={0}
    loadMore={loadFunc}
    hasMore={true || false}
    threshold={5}
    loader={<div className="loader" key={0}>Loading ...</div>}
>
    {visosnaujienos} 
</InfiniteScroll> */}
      <Footbar />
    </div>
      
   
  )
}
export default Naujienos

//--------------------

//--------------------
//pakeisti klase paspaudus ant jos elemento su useState
const [imgSizeClass, setImgSizeClass] = useState("allNews-image");
const changeImageClass = () => {
      if (imgSizeClass === "allNews-image") {
        return setImgSizeClass("allNews-image-resize")
      } else {
        return setImgSizeClass("allNews-image")
      }
    }
//--------------------