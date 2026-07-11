import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Map({
    center,
    markerPosition,
    popupContent,
    className = "h-[400px] w-full z-1",
}) {
    return (
        <MapContainer
            center={center}
            zoom={16}
            scrollWheelZoom={false}
            className={className}
        >
            <TileLayer
                attribution="&copy; OpenStreetMap contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={markerPosition}>
                <Popup>{popupContent}</Popup>
            </Marker>
        </MapContainer>
    );
}


// You can use this component like this

{/* 

<Map
    center={[30.0444, 31.2357]}
    markerPosition={[30.0444, 31.2357]}
    popupContent={
      <>
        <h3 className="font-bold">Dr Ahmed</h3>
        <p>Dentist</p>
      </>
  }
/> 
*/}