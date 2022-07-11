
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { auth, db, storage } from '../../firebase';
import moment from 'moment';
import Naujienos from '../pages/naujienos';
import { getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage';
// import { v4 } from 'uuid'

function CreatePost() {
    const [title, setTitle] = useState();
    const [postText, setPostText] = useState();
    // const date = serverTimestamp()
const naujienosCollectionRef = collection(db, "naujienos")

const sukurtiNaujiena = async () => {
    await addDoc(naujienosCollectionRef, {
        Pavadinimas: title, 
        Aprasymas: postText, 
        Paskelbe: { Vardas: auth.currentUser.email, id: auth.currentUser.uid }, 
        Laikas: serverTimestamp(),
        time: Date(),
        Data: moment().format('YYYY-MM-DD')
        
    });
}
const [imageUpload, setImageUpload] = useState(null);
const [imageList, setImageList] = useState([]);

const imageListRef = ref(storage, "newsImages")
const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `newsImages/${imageUpload.name}`);
    uploadBytes(imageRef, imageUpload).then(() => {
    alert("nuotrauka sekmingai ikelta");
    })
};

    useEffect(() => {
        listAll(imageListRef).then((res) => {
            res.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageList((prev) => [...prev, url]);
                });
            });
        });
    }, []);
  return (
    <div className='createContainer'>
    <div className='createNaujienos'>
        <h1>Paskelbti geraja naujiena</h1>
        <div className="naujiena-container">
            <label>Nuotrauka</label>
            <input type='file' onChange={(e) => {setImageUpload(e.target.files[0])}} />
            <button onClick={uploadImage} className='naujiena btn'>ikelti nuotrauka</button>
            <label>Pavadinimas</label>
            <input className='naujiena' placeholder='Pavadinimas...' onChange={(e) => {
                setTitle(e.target.value);
            }} />
        </div>
        <div className="naujiena-container">
            <label>Aprasymas</label>
            <textarea className='naujiena-post' placeholder='apie ka tai ?...' onChange={(e) => {
                setPostText(e.target.value)
            }}/>
        </div>
        <button className='naujiena btn' onClick={sukurtiNaujiena}>Paskelbti</button>
    </div>
    <Naujienos />
    </div>
  )
}

export default CreatePost