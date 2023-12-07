import style from "./Attraction.module.css"
import {ImageWithSkeleton} from "../Map/Helpers/RegionMap"

const Attraction = ({imgSrc, title, location, description}) => {
    return (
        <div className={style.attraction}>
            <ImageWithSkeleton src={imgSrc} alt={"Attraction image"} classNameBlock={style.imageBlock__attraction}
                               classNameImageSkeleton={style.attraction__skeleton__img} classNameImage={style.attraction__img}
            />
            <div className={style.contentBlock__attraction}>
                <p><b>Название: </b>{title}</p>
                <p><b>Местоположение: </b>{location}</p>
                <p><b>Описание: </b>{description}</p>
            </div>
        </div>
    )
}

export default Attraction