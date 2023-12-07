import React, { useState} from 'react';
import Heart from '../../../../assets/img/DefaultHeart.svg';
import redHeart from '../../../../assets/img/redHeart.svg';
import s from './Wonder.module.css'
import Hermitage from "../../../../assets/img/image 11.jpg";
import Peterhof from "../../../../assets/img/image 13.jpg";
import Isaac from "../../../../assets/img/Сон-Куль-1 1.jpg";
import Petropavlovka from "../../../../assets/img/image 7.jpg";
import Kunst from "../../../../assets/img/image 8.jpg";
import Ekat from "../../../../assets/img/image 16.jpg";
import Kazan from "../../../../assets/img/image 6.jpg";
import Russian from "../../../../assets/img/image 19.jpg";

export default  function Wonder(imageAlt) {

    const [images, setImages] = useState([
        {id: 0, status: false, imageUrl: Hermitage, text: 'Эрмитаж'},
        {id: 1, status: false, imageUrl: Peterhof, text: 'Петергоф'},
        {id: 2, status: false, imageUrl: Isaac, text: 'Исаакиевский собор'},
        {id: 3, status: false, imageUrl: Petropavlovka, text: 'Петропавловская крепость'},
        {id: 4, status: false, imageUrl: Kunst, text: 'Кунсткамера'},
        {id: 5, status: false, imageUrl: Ekat, text: 'Екатерининский дворец'},
        {id: 6, status: false, imageUrl: Kazan, text: 'Казанский собор'},
        {id: 7, status: false, imageUrl: Russian, text: 'Русский музей'}
    ]);
    const onLiked = (id) => {
        const likedItem = images.map((image) => {
            if (image.id === id) {
                return {...image, status: !image.status}
            }
            return image
        });

        setImages(likedItem);
    }


    return (
        <div
      className={s.main}
    >
            <div className={s.title}>
                <h2>Достопримечательности Санкт-Петербурга</h2>
            </div>
            <div className={s.img}>
                {images.map((image, index) => (
                    <div key={index} className={s.column}>
                        <div className={s.heartBlock}>
                            {!image.status ? (
                                <button className={s.favourite} onClick={() => onLiked(image.id)}>
                                    <img className={s.favouriteImg} width={20} height={20} src={Heart}
                                         alt="icon heart"/>
                                </button>
                            ) : (
                                <div>
                                    <button className={s.favourite} onClick={() => onLiked(image.id)}>
                                        <img className={s.favouriteImg} width={20} height={20} src={redHeart}
                                             alt="icon heart"/>
                                    </button>
                                </div>
                            )}
                        </div>
                        <div
                            className={s.imageWrapper}
                        >
                            <img
                                src={image.imageUrl}
                                alt={`${imageAlt} ${index + 1}`}
                                className={s.image}
                            />
                        </div>
                        <p>{image.text}</p>
                    </div>
                ))}
            </div>
            </div>
    );
}
