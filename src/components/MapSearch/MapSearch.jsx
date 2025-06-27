import { React, useState } from "react";
import "./MapSearch.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  FeatureGroup,
  Polyline,
} from "react-leaflet";
import "../../plugins/leaflet/leaflet.css"; // Ensure you have the correct path to your Leaflet CSS
import L from "leaflet"; // Import Leaflet icons
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import PolyDrawer from "./PolyDrawer/PolyDrawer";

export default function MapSearch({
  mapCenter,
  showMap,
  setPropLocation,
  setShowMap,
}) {
  const [mapMarker, setMapMarker] = useState(mapCenter);

  const customIcon = new L.Icon({
    iconUrl: markerIconPng,
    iconSize: [18, 30],
  });

  // function handlePolygon(coords) {
  //   console.log("Polygon coordinates:", coords);
  // }

  const LocationLogger = () => {
    useMapEvents({
      click(e) {
        console.log("Clicked location:", e.latlng);
        setMapMarker([e.latlng.lat, e.latlng.lng]);
      },
    });
    return null;
  };

  return (
    showMap && (
      <>
        <MapContainer
          className="MapContainer"
          center={mapCenter}
          zoom={12}
          scrollWheelZoom={true}
          style={{ height: "500px", width: "30rem" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* <PolyDrawer onPolygonCreated={handlePolygon} /> */}
          <LocationLogger />
          <Marker position={mapMarker} icon={customIcon}>
            <Popup>Selected Location</Popup>
          </Marker>
        </MapContainer>
        <button
          className="mapBtn"
          onClick={() => {
            setPropLocation(mapMarker);
            setShowMap(false);
          }}
        >
          confirm location
        </button>
      </>
    )
  );
}
