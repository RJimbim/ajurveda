import React from 'react'
import Footbar from '../../../footbar/Footbar'
import Nav from '../../../navbar/Nav'
import coursesImages from './courses-images'
import '../../gallery/gallery.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from 'react-router-dom';
import SmallTopBar from '../../../topbar/SmallTopBar';

const ikursas = () => {

    const galleryview = coursesImages.map(item => {
   
        return (
            <SplideSlide key={item.id}> 
                <a className='galleries-linkSize' href={item.fullImg}>   
                    <div className="galleries-item">
                        <img key={item.id} className='galleries-image' src={item.fullImg}></img>
                    </div>
                </a>
            </SplideSlide>
        )})
        const galleryviewFull = coursesImages.map(item => {
   
            return (
                    <a key={item.id} className='galerija-test1' href={item.fullImg}>   
                        <div className="galleries-item">
                            <img key={item.id} className='galleries-image' src={item.fullImg.slice(0, -4) + "-150x150.jpg"}></img>
                        </div>
                    </a>
               
            )})
      return (
            
                <div>
                    <SmallTopBar />
              <Nav />
              <div className='gallery-title'>
                      <p> 1 laida</p>
                  </div>
              <div className="galleries-container">
                 {/* <div className='gallery-title'>
                      <p> 1 laida 0</p>
                  </div>  */}
                <Splide
                    options={{
                        type: 'slide',
                        width: '90vw',
                        // easing: 'linear',
                        // heightRatio: 1,
                        perPage: 1,
                        // perMove: 1,
                        focus: 'center',
                        // rewind: true,
                        // gap: '1rem',
                        // flickPower: 100,
                        breakpoints: {
                            560: {
                                perPage: 1,
                                focus: 'center',
                                gap: '10rem',
                                width: '90vw',
                                // heightRatio: 0.75,
                                arrows: false,
                            },
                        },
                        pagination: false
                    }}>
                    {galleryview} 
                 </Splide>
                
              </div>
              
              <div className="galerija-full">
                  
                {galleryviewFull}  
                </div>  
               <Footbar />
            </div>
            
      )
    }

export default ikursas