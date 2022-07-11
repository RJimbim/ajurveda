import React, { useRef, useState } from 'react'
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { db, storage } from '../../../firebase';
import moment from 'moment'
import './allNews.css'


export default function Addnews() {
    const [formData, setFormData] = useState({
        Pavadinimas: "",
        Aprasymas: "",
        image: "",
        Data: moment().format('YYYY-MM-DD'),
        createdAt: Timestamp.now().toDate(),
    });

    const [progress, setProgress] = useState(0)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handlePublish = () => {
        if(!formData.Pavadinimas || !formData.Aprasymas || !formData.image) {
            alert("Reikia viska uzpildyti");
            return;
        }
        const storageRef = ref(
            storage,
            `/imagesNews/${Date.now()}${formData.image.name}`
            );

        const uploadImage = uploadBytesResumable(storageRef, formData.image,)

        uploadImage.on(
            "state_changed", 
            (snapshot) => {
                const progressPercent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(progressPercent);
        }, 
        (err) => {
            console.log(err);
        }, 
        () => {
            setFormData({
                Pavadinimas: "",
                Aprasymas: "",
                image: "",
            });

            getDownloadURL(uploadImage.snapshot.ref).then((url) => {
                const newRef = collection(db, "naujienos")
                addDoc(newRef, {
                    Pavadinimas: formData.Pavadinimas,
                    Aprasymas: formData.Aprasymas,
                    imageUrl: url,
                    Data: moment().format('YYYY-MM-DD'),
                    createdAt: Timestamp.now().toDate(),
                })
                .then(() => {
                    
                    console.log("naujiena buvo ikelta");
                    setProgress(0)
                })
                .catch((err) => {
                    console.log("nepavyko ikelti naujienos ir nuotraukos");
                });
            });
        }
        );
    };
    
  return (
    <div className='create-container'>
    <div className="create-form">
        
        <h2 className='create-title'>Paskelbti gerąją naujiena</h2>
        
        <div className="create-div">
        <input
            type='file'
            name='image' 
            placeholder=' '
            className='create-input'
            accept='image/*'
            onChange={(e) => handleImageChange(e)}
             />
             <label className="create-label" htmlFor=''>Nuotrauka</label>
             </div>
            {progress === 0 ? null : (
               <div className="addNew-progressBar" style={{ width: `${progress}` }}>{`ikeliama nuotrauka ${progress}%`}</div> 
            )}
        <div className="create-div">
            <input
            type='text'
            name='Pavadinimas'
             className='create-input'
              placeholder=' '
              value={formData.Pavadinimas}
                onChange={(e) => handleChange(e)}
             />
        <label htmlFor="" className="create-label">Pavadinimas</label>
          </div>
        <div className="create-div">
            <textarea
            name='Aprasymas'
            className='create-textarea'
            placeholder=' '
            value={formData.Aprasymas}
            onChange={(e) => handleChange(e)}
             />
        <label htmlFor="" className="create-label">Aprašymas</label>
          </div>
            {/* <button className='naujiena btn'>ikelti nuotrauka</button> */}
            {/* <input type="submit" className="create-btn" value="Paskelbti"/> */}
        <button onClick={handlePublish} className='create-btn'>Paskelbti</button>
    </div>
    </div>
  )
}
