import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,  A11y } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Museum from "../../../../../assets/img/Музеи.jpg";
import Park from "../../../../../assets/img/Парки.jpg";
import Theatre from '../../../../../assets/img/Theatre.jpg'
import Gallery from '../../../../../assets/img/Gallery.jpg';
import Tower from '../../../../../assets/img/Tower.jpg';
import Place from '../../../../../assets/img/Place.jpg';
import Statue from '../../../../../assets/img/Statue.jpg';
import Philarmonic from '../../../../../assets/img/Philarmonic.jpg';
import Mosque from '../../../../../assets/img/Mosque.jpg';
import Fortress from '../../../../../assets/img/Fortress.jpg';

import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {setType} from "../../../../store/slices/attractionsSlice";
import s from "../LandMarks.module.css";

const LandMarks =  () => {
    const push = useNavigate();
    const { type } = useSelector((state) => state.attractions);
    const images = [
        { imageUrl: Park, text: 'Парки', type: 'park' },
        { imageUrl: Theatre, text: 'Театры', type: 'theatre' },
        { imageUrl: Museum, text: 'Музеи', type: 'museum' },
        { imageUrl: Gallery, text: 'Соборы', type: 'cathedral' },
        { imageUrl: Tower, text: 'Башни', type: 'tower' },
        { imageUrl: Place, text: 'Площади', type: 'place' },
        { imageUrl: Statue, text: 'Статуи', type: 'statue' },
        { imageUrl: Philarmonic, text: 'Филармонии', type: 'philharmonic' },
        { imageUrl: Mosque, text: 'Мечети', type: 'mosque' },
        { imageUrl: Fortress, text: 'Крепости', type: 'fortress' },
    ];
    const dispatch = useDispatch();

    const setTypeImg = (imageType) => {
        dispatch(setType({ type: imageType }));
        push('/attractions');
    };

    return (
        <div className={s.main}>
        <div className={s.title}>
            <h3>Достопримечательности</h3>
        </div>
        <div className={s.img_block}>
        <Swiper
            effect='coverflow'
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}

            // install Swiper modules
            modules={[Navigation,  A11y]}   
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
            slidesPerView={3}
            spaceBetween={60}
            loop = {true}
            touchRatio={1}
            grabCursor = {true}
            pagination={{ clickable: true }}
            breakpoints={{
                0:{
                    slidesPerView: 1,
                    spaceBetween: 20, 
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                992: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 60,
                },
              }}
        >   
            {
                images.map((image, index )=>{
                    return(
                        <SwiperSlide key = {index}>
                            <img className={s.img} onClick={() => setTypeImg(image.type)} src={image.imageUrl} alt = 'Достопримечательности'/>
                            <p onClick={() => { console.log(type) }}>{image.text}</p>
                        </SwiperSlide>
                    )
                })
            }
            <div className={`swiper-button-next ${s.swiperButtonNext}`} />
            <div className={`swiper-button-prev ${s.swiperButtonPrev}`} />
        </Swiper>
        </div>
        </div>
    );
};
export default LandMarks