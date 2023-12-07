import React from 'react'
import s from './Map.module.css'
export default function Map() {
    const buttons = [
        'Все'
    ];
    return (
        <div className={s.main}>
            <div className={s.title}>
                <h2> Карта поездки </h2>
            </div>

            <div className={s.btn_container}>
                <div className={s.btn_block}>
                    <div className={s.btn_region}>
                        <button>Регионы</button>
                    </div>
                    {buttons.map((button, index) => (
                        <div key={index}>
                            <button key={index}>{button}</button>
                        </div>
                    ))}
                </div>

                <div className={s.map}>
                    <img src={MapImg} alt="Map" />
                </div>
            </div>
        </div>
    )
}