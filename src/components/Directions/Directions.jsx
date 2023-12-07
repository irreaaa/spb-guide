import s from './Directions.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,  A11y } from 'swiper';
import React from 'react';
import {setType} from "../store/slices/attractionsSlice";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Nevsky from "../../assets/img/nevsky.jpg";
import Hermitage from "../../assets/img/ermitaj.jpg";
import Petropavl from "../../assets/img/petrkrepost.jpg";
import Pishki from "../../assets/img/pishki.jpg";
import Most from "../../assets/img/most.jpg";
import King from "../../assets/img/kingsselo.jpg"
import Ekat from "../../assets/img/katindvor.jpg"
import AlPark from "../../assets/img/sashkinpark.jpg"
import Ekat1 from "../../assets/img/ekat1.jpg"
import Ekat2 from "../../assets/img/ekat2.jpg"
import Petergof from "../../assets/img/petergof.jpg"
import Petergof2 from "../../assets/img/petergof2.jpg"
import Marli from "../../assets/img/marli_kat.jpg"
import Koni from "../../assets/img/koni.jpg"
import Aleksandria from "../../assets/img/aleksandria.jpg"
import Isaac from "../../assets/img/isaac.jpg"
import Spas from "../../assets/img/spasnakrovi.jpg"
import Faberge from "../../assets/img/faberje.jpg"
import Aleks1 from "../../assets/img/aleks1.jpg"
import Aleks2 from "../../assets/img/aleks2.jpg"
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";



export default function Directions(props) {
    const push = useNavigate();
    const { type } = useSelector((state) => state.attractions);
    const images1 = [
        {status: false, imageUrl: Nevsky},
        {status: false, imageUrl: Hermitage},
        {status: false, imageUrl: Petropavl},
        {status: false, imageUrl: Pishki},
        {status: false, imageUrl: Most}
    ];
    const images2 = [
        {status: false, imageUrl: King},
        {status: false, imageUrl: Ekat},
        {status: false, imageUrl: Ekat1},
        {status: false, imageUrl: Ekat2},
        {status: false, imageUrl: AlPark}
    ];
    const images3 = [
        {status: false, imageUrl: Petergof},
        {status: false, imageUrl: Petergof2},
        {status: false, imageUrl: Marli},
        {status: false, imageUrl: Koni},
        {status: false, imageUrl: Aleksandria}
    ];
    const images4 = [
        {status: false, imageUrl: Isaac},
        {status: false, imageUrl: Spas},
        {status: false, imageUrl: Faberge},
        {status: false, imageUrl: Aleks1},
        {status: false, imageUrl: Aleks2}
    ];
    const imageAlt = 'Изображение';
    const dispatch = useDispatch();
    const setTypeImg = (imageType) => {
        dispatch(setType({ type: imageType }));
        push('/directions');
    };

    return (
        <div className={s.directions} ref={props.scrollToRef}>
            <div className={s.title}>
                <h3>Маршруты</h3>
            </div>
            <span className={s.item}>
                <div className={s.number}>
                    <h1>1</h1>
                </div>
                <div className={s.text}>
                    <p>
                        Прогуливаясь по <strong>Невскому Проспекту</strong>, вы окунетесь в атмосферу старинного Петербурга, увидите величественные здания и памятники архитектуры, ощутите дыхание истории. После этого вы отправитесь в <strong>Эрмитаж</strong>, где вас ждут бесценные произведения искусства со всего мира. Прогулка по <strong>Петропавловской крепости</strong> погрузит вас в историю Российской империи, а посещение <strong>Пышечной на Большой Конюшенной</strong> позволит наследиться вкусейшим пышками в легендарной пышечной, ставшей охраняемой петербургской достопримечательностью. Ваше путешествие будет незабываемым, наполненным красотой и величием.
                    </p>
                </div>
                <div className={s.mapContainer}>
                    <iframe className={s.route}
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A5154ec3d9b7d22d08339078382f0e5056f19b578baa62c18fda0bdc8653bb0ac&amp;source=constructor"
                        width="320" height="320" frameBorder="0"></iframe>
                </div>
                </span>
                <span>
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

                            modules={[Navigation,  A11y]}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}
                            slidesPerView={5}
                            spaceBetween={6}
                            loop = {true}
                            touchRatio={1}
                            grabCursor = {true}
                            pagination={{ clickable: true }}
                            breakpoints={{
                                0:{
                                    slidesPerView: 1,
                                    spaceBetween: 7,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 7,
                                },
                                992: {
                                    slidesPerView: 2,
                                    spaceBetween: 14,
                                },
                                1200: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                            }}
                        >
                            {
                                images1.map((image, index )=>{
                                    return(
                                        <SwiperSlide key = {index}>
                                            <img className={s.img} onClick={() => setTypeImg(image.type)} src={image.imageUrl} alt = ''/>
                                            <p onClick={() => { console.log(type) }}>{image.text}</p>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </div>
                </span>
                <span>
                <div className={s.item}>
                    <div className={s.number}>
                        <h1>2</h1>
                    </div>
                    <div className={s.text}>
                        <p>
                            Путешествие в <strong>Царское село</strong> начнется с великолепного <strong>Екатерининского дворца</strong>, который поражает своей роскошью и изысканностью. Здесь вы окунетесь в атмосферу царской роскоши и величия, увидите удивительные интерьеры, украшенные золотом и кристаллами.

                            После этого вас ждет прогулка по <strong>Александровский парк</strong>, где вы сможете насладиться красотой природы, увидеть живописные озера, зеленые аллеи и уютные павильоны. Здесь можно прогуляться по живописным мостам, полюбоваться на гроты и павильоны.

Это путешествие будет наполнено красотой, величием и историей, оно подарит вам незабываемые впечатления и вдохновение.
                        </p>
                    </div>
                    <div className={s.mapContainer}>
                        <iframe className={s.route}
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3A35ef04debf710e5b59384d3ba7730091e19378fab64c792e307fabfed395d84f&amp;source=constructor"
                            width="320" height="320" frameBorder="0"></iframe>
                    </div>
                </div>
                </span>
                <span>
                <span>
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

                            modules={[Navigation,  A11y]}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}
                            slidesPerView={5}
                            spaceBetween={6}
                            loop = {true}
                            touchRatio={1}
                            grabCursor = {true}
                            pagination={{ clickable: true }}
                            breakpoints={{
                                0:{
                                    slidesPerView: 1,
                                    spaceBetween: 7,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 7,
                                },
                                992: {
                                    slidesPerView: 2,
                                    spaceBetween: 14,
                                },
                                1200: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                            }}
                        >
                            {
                                images2.map((image, index )=>{
                                    return(
                                        <SwiperSlide key = {index}>
                                            <img className={s.img} onClick={() => setTypeImg(image.type)} src={image.imageUrl} alt = ''/>
                                            <p onClick={() => { console.log(type) }}>{image.text}</p>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </div>
                </span>
                    <div className={s.item}>
                        <div className={s.number}>
                            <h1>3</h1>
                        </div>
                        <div className={s.text}>
                            <p>
                                Посещение <strong>Петергофа</strong> - это увлекательное путешествие в эпоху величия России, где каждый шаг наполнен невероятной красотой и роскошью. <strong>Императорские дворцовые конюшни</strong>, с их мощными арками и величественными фасадами, заставят забыть о рутине и окунуться в мир истории.

                                Но самое захватывающее здесь - это фонтаны. Их каскады, брызги и игры света создают невероятную атмосферу, которая завораживает и заставляет забыть о времени. В <strong>парке Александрия</strong> можно прогуляться по ухоженным аллеям, наслаждаясь ароматами цветов и шелестом листвы.

                                <strong>Александрийский парк</strong> - это настоящий рай для любителей природы.
                            </p>
                        </div>
                        <div className={s.mapContainer}>
                            <iframe className={s.route}
                                src="https://yandex.ru/map-widget/v1/?um=constructor%3A07d84a3fd1f8acbcc53ddd71d97ec48081fd12b987379ce8768d27ece99d24a6&amp;source=constructor"
                                width="320" height="320" frameBorder="0"></iframe>
                        </div>
                    </div>
                    </span>
            <span>
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

                            modules={[Navigation,  A11y]}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}
                            slidesPerView={5}
                            spaceBetween={6}
                            loop = {true}
                            touchRatio={1}
                            grabCursor = {true}
                            pagination={{ clickable: true }}
                            breakpoints={{
                                0:{
                                    slidesPerView: 1,
                                    spaceBetween: 7,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 7,
                                },
                                992: {
                                    slidesPerView: 2,
                                    spaceBetween: 14,
                                },
                                1200: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                            }}
                        >
                            {
                                images3.map((image, index )=>{
                                    return(
                                        <SwiperSlide key = {index}>
                                            <img className={s.img} onClick={() => setTypeImg(image.type)} src={image.imageUrl} alt = ''/>
                                            <p onClick={() => { console.log(type) }}>{image.text}</p>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </div>
                </span>
                    <span>
                    <div className={s.item}>
                        <div className={s.number}>
                            <h1>4</h1>
                        </div>
                        <div className={s.text}>
                            <p>
                                Один из самых знаменитых храмов Санкт-Петербурга - это <strong>Исаакиевский собор</strong>. Это одна из самых высоких церквей в мире, которая поражает своей красотой и масштабностью. Еще одним важным храмом является <strong>Храм Спаса на Крови</strong>. Он был построен на месте, где был убит император Александр II, и является одним из самых красивых и уникальных храмов в России.
                                <strong> Музей Фаберже</strong> - это уникальное место, которое позволяет окунуться в историю России и узнать о жизни и творчестве знаменитого ювелира Карла Фаберже. Прекрасным завершением вечера будет посещение <strong>Александринского театра</strong>, где посетители могут насладиться уникальными спектаклями и окунуться в мир искусства и театрального искусства.
                            </p>
                        </div>
                        <div className={s.mapContainer}>
                            <iframe className={s.route}
                                src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab3d8c1333c49f4726911ec323a802c971b51fc70a88ba43e528ab444f3d90913&amp;source=constructor"
                                width="320" height="320" frameBorder="0"></iframe>
                        </div>
                    </div>
                    </span>
            <span>
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

                            modules={[Navigation,  A11y]}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}
                            slidesPerView={5}
                            spaceBetween={6}
                            loop = {true}
                            touchRatio={1}
                            grabCursor = {true}
                            pagination={{ clickable: true }}
                            breakpoints={{
                                0:{
                                    slidesPerView: 1,
                                    spaceBetween: 7,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 7,
                                },
                                992: {
                                    slidesPerView: 2,
                                    spaceBetween: 14,
                                },
                                1200: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                            }}
                        >
                            {
                                images4.map((image, index )=>{
                                    return(
                                        <SwiperSlide key = {index}>
                                            <img className={s.img} onClick={() => setTypeImg(image.type)} src={image.imageUrl} alt = ''/>
                                            <p onClick={() => { console.log(type) }}>{image.text}</p>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </div>
                </span>
        </div>
    );
}
