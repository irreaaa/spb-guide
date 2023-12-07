import React from "react";
import L from 'leaflet';
import '../Map.css';
import {Button} from "antd"
// import location from "../images/location.png"
import {connect} from "react-redux";

// const customIcon = L.icon({
    // iconUrl: location,
    // iconSize: [32, 32],
    // iconAnchor: [16, 32],
// });


class MapComponent extends React.Component {
    state = {
        lat: 41.875969,
        lng: 73.603698,
        zoom: 6.5,

        geoJsonIsVisibleAll: [
            {geoJsonIsVisible: true, name: "chuy"},
            {geoJsonIsVisible: true, name: "talas"},
            {geoJsonIsVisible: true, name: "osh"},
            {geoJsonIsVisible: true, name: "batken"},
            {geoJsonIsVisible: true, name: "jalalabad"},
            {geoJsonIsVisible: true, name: "naryn"},
            {geoJsonIsVisible: true, name: "issykkol"},
            {geoJsonIsVisible: true, name: "all"},
        ]
    };
    componentDidUpdate(prevProps, prevState) {
        // Проверяем изменения нужного состояния, например, this.state.geoJsonIsVisibleAll
        if (prevState.geoJsonIsVisibleAll !== this.state.geoJsonIsVisibleAll) {
            // Вызываем перерисовку карты
            this.forceUpdate();
            console.log(1)
        }
    }
    onGeojsonToggle = (region) => {
        this.setState(prevState => ({
            geoJsonIsVisibleAll: prevState.geoJsonIsVisibleAll.map(
                obj => (obj ? Object.assign(obj, {geoJsonIsVisible: false}) : obj)
            )
        }))
        this.setState(prevState => ({
            geoJsonIsVisibleAll: prevState.geoJsonIsVisibleAll.map(
                obj => (obj.name === region ? Object.assign(obj, {geoJsonIsVisible: true}) : obj)
            )
        }))
    }

    onGeojsonToggleAll = (e) => {
        this.setState(prevState => ({
            geoJsonIsVisibleAll: prevState.geoJsonIsVisibleAll.map(
                obj => (obj ? Object.assign(obj, {geoJsonIsVisible: true}) : obj)
            )
        }))
    }

    render() {
        let center = [this.state.lat, this.state.lng];

        return (
            <div className="main">
                <div className="title-block__geojson"><h2>Карта Санкт-Петербурга</h2></div>
                <div className="geojson-toggle">
                    <div className="geojson-toggle__part">
                    </div>
                </div>
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A19fc32c8455d2651d8f856dd83b395c85da8590f062b1863db51404bf614bc42&amp;source=constructor"
                    width="1080" height="680" frameBorder="0"></iframe>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        type: state.attractions.type
    }
}
export default connect(mapStateToProps, null)(MapComponent)