import React from 'react';
import AboutImg from '../../../../assets/img/aboutImg.jpg';
import s from './About.module.css';

export default function About(props) {
  return (
    <div className={s.about} ref={props.scrollToRef}>
      <div className={s.title}>
        <h3>О нас</h3>
      </div>
      <div className={s.item}>
        <div className={s.text}>
          <p>
            <strong>IriDima</strong> - это удобный и информативный мини-гид по Санкт-Петербургу.
            Гид поможет туристам и гостям города максимально эффективно спланировать свое время и ознакомиться с основными достопримечательностями.
          </p>
          <p>
            На сайте IriDima можно найти информацию о самых популярных местах для посещения, исторических достопримечательностях, музеях, ресторанах, развлекательных заведениях и многое другое. Также здесь представлены рекомендации по маршрутам и интересным событиям, происходящим в городе.
          </p>
          <p>
            IriDima поможет туристам сориентироваться в большом количестве информации о городе, выбрать наиболее интересные места для посещения и провести время в Санкт-Петербурге максимально насыщенно и запоминающе.
          </p>
        </div>
        <div className={s.imageContainer}>
          <img src={AboutImg} alt="Изображение" className={s.image} />
        </div>
      </div>
    </div>
  );
}
