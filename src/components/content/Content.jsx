import React from 'react';
import { useEffect, useState  } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Welcome from './components/Welcome/Welcome';
import About from './components/About/About';
import Wonder from './components/Wonders/Wonder';
import { Preloader } from '../common/Preloader';
import s from './Content.module.css'
//импорты картинки
import Hermitage from "../../assets/img/image 11.jpg";
import Peterhof from "../../assets/img/image 13.jpg";
import Isaac from "../../assets/img/Сон-Куль-1 1.jpg";
import Petropavlovka from "../../assets/img/image 7.jpg";
import Kunst from "../../assets/img/image 8.jpg";
import Ekat from "../../assets/img/image 16.jpg";
import Kazan from "../../assets/img/image 6.jpg";
import Russian from "../../assets/img/image 19.jpg";
import MapComponent from "../Map/Json/MapGeoJsonMarkers";
import LandMarks from './components/landMarks/Slider/LandMarks';


export default function Content(props) {
    const images = [
        {status: false, imageUrl: Hermitage, text: 'Эрмитаж'},
        {status: false, imageUrl: Peterhof, text: 'Петергоф'},
        {status: false, imageUrl: Isaac, text: 'Исаакиевский собор'},
        {status: false, imageUrl: Petropavlovka, text: 'Петропавловская крепость'},
        {status: false, imageUrl: Kunst, text: 'Кунсткамера'},
        {status: false, imageUrl: Ekat, text: 'Екатерининский дворец'},
        {status: false, imageUrl: Kazan, text: 'Казанский собор'},
        {status: false, imageUrl: Russian, text: 'Русский музей'}
    ];
    const imageAlt = 'Изображение';

    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Симулируем асинхронную загрузку данных
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
    const [refWonders, inViewWonders] = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    const [refAbout, inViewAbout] = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    const [refMap, inViewMap] = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    const [refLandMarks, inViewLandMarks] = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } }
    };

    if(isLoading){
        return <Preloader/>
    }

    return (
            <div>
            <Welcome />
            <div className={s.container}>
                <motion.div
                    className={s.content}
                    initial= 'hidden'
                    transition={{ duration: 0.5 }}
                    ref={refWonders}
                    variants={variants}
                    animate={inViewWonders ? 'visible' : 'hidden'}
                >
                    <Wonder images={images} imageAlt={imageAlt} />
                </motion.div>
                <motion.div
                    className={s.content}
                    ref={refAbout}
                    initial="hidden"
                    animate={inViewAbout ? 'visible' : 'hidden'}
                    variants={variants}
                >
                    <About  scrollToRef={props.scrollToRef}/>
                </motion.div>
                <motion.div
                    className={s.content}
                    ref={refMap}
                    initial="hidden"
                    animate={inViewMap ? 'visible' : 'hidden'}
                    variants={variants}
                >
                    {/*<Map />*/}
                    <MapComponent />
                </motion.div>
                <motion.div
                    className={s.content}
                    ref={refLandMarks}
                    initial="hidden"
                    animate={inViewLandMarks ? 'visible' : 'hidden'}
                    variants={variants}
                >
                    <LandMarks />
                </motion.div>
                </div>
            </div>
    );
}
