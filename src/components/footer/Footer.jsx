import React from 'react'
import classes from './Footer.module.css'
import Telegram from '../../assets/img/Telegram.svg';
export default function Footer({scrollToRef, ...props}) {


    const handleClick = () => {
    scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
  }; 
    return (
        <div className={classes.main}>
            <div className={classes.footer}>
                <div className={classes.footer_item}>
                    <div className={classes.info}>
                        <div>  <a href="https://yandex.ru/legal/confidential/index.html" target='_blank'>
                        Политика конфиденциальности
                        </a>
                           
                        </div>
                        <div onClick={handleClick}>
                            О нас
                        </div>
                    </div>
                </div>
                <div className={classes.footer_item}>
                    <div className={classes.link}>
                        <div className={classes.follow}>
                            <h3>Contacts</h3>
                        </div>
                        <div className={classes.icons}>
                            <a href={"https://t.me/irinaminkinaa"} target="_blank"><img src={Telegram} alt="telegram"
                                                                                    className={classes.img}/></a>
                        </div>
                        <div className={classes.icons}>
                            <a href={"https://t.me/camefromdarkness"} target="_blank"><img src={Telegram} alt="telegram"
                                                                                        className={classes.img}/></a>
                        </div>
                    </div>
                  </div>
              </div>
          </div>

  )
}
