import React from "react";
import L from 'leaflet';
import {MapContainer, Marker, Popup, TileLayer, Pane} from "react-leaflet";
import './Map.css';


L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";

class MapComponent extends React.Component {
    state = {
        lat: 42.81,
        lng: 73.85,
        zoom: 13
    };

    render() {
        var center = [this.state.lat, this.state.lng];

        return (
            <MapContainer zoom={this.state.zoom} center={center}>
                <TileLayer
                    url="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A19fc32c8455d2651d8f856dd83b395c85da8590f062b1863db51404bf614bc42&amp;width=1080&amp;height=680&amp;lang=ru_RU&amp;scroll=true"
                />

                <Marker position={center}>
                    <Popup pane="myPane" className={'popup-fixed'}>Какой то крутой текст!!!</Popup>
                    <Pane name="myPane" style={{ zIndex: 500 }}>
                        {/* Содержимое панели */}
                        <div style={{ backgroundColor: 'white', padding: '10px' }}>
                            <h3>Панель</h3>
                            <p>Содержимое панели внутри всплывающего окна.</p>
                        </div>
                    </Pane>
                </Marker>
            </MapContainer>
        )
    }
}

export default MapComponent;


