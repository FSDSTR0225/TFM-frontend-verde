import { React } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../../plugins/leaflet/leaflet.css"; // Ensure you have the correct path to your Leaflet CSS
import L from "leaflet"; // Import Leaflet icons
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import "./ShowPropMap.css";

export default function ShowPropMap({ mapCenter }) {
  const customIcon = new L.Icon({
    iconUrl: markerIconPng,
    iconSize: [18, 30],
  });

  return (
    <MapContainer
      className="ShowPropMap__MapContainer"
      center={mapCenter}
      zoom={14}
      scrollWheelZoom={true}
      style={{ height: "500px", width: "20rem" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={mapCenter} icon={customIcon}>
        <Popup>Selected Location</Popup>
      </Marker>
    </MapContainer>
  );
}
