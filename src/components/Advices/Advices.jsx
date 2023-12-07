import React from 'react'
import s from "./Advices.module.css"

export default function Advices(props) {
    return (
        <div className={s.directions} ref={props.scrollToRef}>
            <div className={s.title}>
                <h3>Советы посетителям Санкт-Петербурга</h3>
            </div>
            <span className={s.item}>
                <div className={s.number}>
                    <h1>1</h1>
                </div>
                <div className={s.text}>
                    <z><strong>Посещайте достопримечательности вне пикового времени</strong></z>
                    <bb>
                        Например, Эрмитаж может быть переполнен туристами в пиковые часы. Попробуйте посещать их рано утром или поздно вечером, чтобы избежать длинных очередей.
                    </bb>
                </div>
                </span>
                <span>
                    <div className={s.item}>
                        <div className={s.number}>
                            <h1>2</h1>
                        </div>
                        <div className={s.text}>
                                <z><strong>Осмотритесь вокруг исторических кварталов и улиц</strong></z>
                            <bb>Исследуйте исторические кварталы, чтобы увидеть уникальную архитектуру и уютные улочки.</bb>
                        </div>
                    </div>
                    </span>
                    <span>
                        <div className={s.item}>
                            <div className={s.number}>
                                <h1>3</h1>
                            </div>
                            <div className={s.text}>
                                <z><strong>Будьте готовы к переменчивой погоде</strong></z>
                                <bb>Погода в Санкт-Петербурге может быть непредсказуемой. Всегда имейте при себе зонтик и теплую одежду, даже в теплые месяцы.</bb>
                            </div>
                        </div>
                    </span>
                    <span>
                        <div className={s.item}>
                            <div className={s.number}>
                                <h1>4</h1>
                            </div>
                            <div className={s.text}>
                                <z><strong>Обратите внимание на мосты</strong></z>
                                <bb>Вечерние прогулки вдоль реки Невы предоставляют прекрасную возможность полюбоваться разводными мостами, особенно в летние ночи, когда они освещены.</bb>
                            </div>
                        </div>
                    </span>
        </div>
    );
}