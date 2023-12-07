import {useDispatch, useSelector} from "react-redux";
import {setCurrentPage, setTotalCount, setType} from "../store/slices/attractionsSlice";
import data from "../../json/spbPlaces.json"
import Attraction from "./Attraction";
import React, {useEffect, useState} from "react";
import { Empty, Pagination, Select} from "antd";
import style from "./Attraction.module.css"

const Attractions = () => {

    const dispatch = useDispatch()
    const {
        pageSize,
        currentPage,
        type,
        totalCount
        // totalCountOfType,
    } = useSelector(state => state.attractions)
    const [region] = useState("all")
    const [dataRegion] = useState(data.all)
    const lastPostIndex = currentPage * pageSize;
    const firstPostIndex = lastPostIndex - pageSize

    useEffect(() => {
        if (type !== "all") {
            dispatch(setTotalCount({totalCount: dataRegion.filter(p => p.properties.type === type).length}))

            dispatch(setCurrentPage({
                currentPage: 1
            }))
        }
    }, [type])

    const onSelectChange = (value) => {
        if (value !== "all") {
            dispatch(setTotalCount({totalCount: dataRegion.filter(p => p.properties.type === value).length}))
        } else {
            dispatch(setTotalCount({totalCount: dataRegion.length}))
        }
        dispatch(setCurrentPage({
            currentPage: 1
        }))
        // }
        dispatch(setType({
            type: value
        }))
    };

    const setCurrentPageClick = (id) => {
        dispatch(setCurrentPage({
            currentPage: id
        }))
    }


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const regionVisible = (regionOn, dataRegion) => {
        return (region === regionOn && type !== "all" ? dataRegion.filter(p => p.properties.type === type).slice((firstPostIndex), lastPostIndex)
            .map((p, index) => {
                return (
                    <Attraction location={p.properties.location}
                                description={p.properties.description}
                                title={p.properties.name}
                                imgSrc={p.properties.image}
                                key={index}/>
                )
            }) : (region === regionOn && type === "all" ? dataRegion.slice(firstPostIndex, lastPostIndex).map((d, index) =>
            <Attraction location={d.properties.location}
                        description={d.properties.description}
                        title={d.properties.name}
                        imgSrc={d.properties.image}
                        key={index}
            />) : null))
    }
    return (<div className={style.main}>
        <div className={style.geojsonToggle}>
        </div>
        <div className={style.selectBlock}>
            <Select
                defaultValue={type}
                style={{
                    width: 150,
                    backgroundColor: "rgb(248,240,252)",
                    color:"rgb(248,240,252)"
                }}
                onChange={onSelectChange}

                options={[
                    {
                        value: 'all',
                        label: 'Все',
                    },
                    {
                        value: 'park',
                        label: 'Парки',
                    },
                    {
                        value: 'theatre',
                        label: 'Театры',
                    },
                    {
                        value: 'museum',
                        label: 'Музеи',
                    },
                    {
                        value: 'cathedral',
                        label: 'Соборы',
                    },
                    {
                        value: 'tower',
                        label: 'Башни',
                    },
                    {
                        value: 'place',
                        label: 'Площади',
                    },
                    {
                        value: 'statue',
                        label: 'Статуи',
                    },
                    {
                        value: 'philharmonic',
                        label: 'Филармонии',
                    },
                    {
                        value: 'mosque',
                        label: 'Мечети',
                    },
                    {
                        value: 'fortress',
                        label: 'Крепости',
                    },

                ]}
            />
        </div>
        {totalCount !== 0 ? <div>
            <Pagination defaultCurrent={currentPage} total={totalCount} defaultPageSize={pageSize}
                        showSizeChanger={false} onChange={setCurrentPageClick}/>
            {
                regionVisible("all", data.all)
            }
        </div> : <div className={style.empty__block}>
            <Empty/>
        </div>}

    </div>)
}


export default Attractions;
