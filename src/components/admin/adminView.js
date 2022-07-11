import React, { useEffect, useState } from 'react'
import { collection, doc, getDocs } from "firebase/firestore";
import { db, storage } from '../../firebase';
import Naujiena from '../pages/naujiena';
import '../admin/data/allNews.css'
import { getDownloadURL, listAll, ref } from 'firebase/storage';


const AdminView = () => {
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
  // console.log(news.length)
  const visosnaujienos = news.length === 0 ? (<p>Nera naujienu</p>) : (
  news.sort((a, b) => a.createdAt < b.createdAt ? 1 : -1).map((post) => {
    return (
      <Naujiena key={post.id} {...post}/>
    )
  }))
  return (
    <div>
       <div className="allNews-container">{visosnaujienos}</div>
    </div>
  )
}
export default AdminView
