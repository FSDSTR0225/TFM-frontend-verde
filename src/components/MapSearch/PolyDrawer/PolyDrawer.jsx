import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  // FeatureGroup,
  Popup,
  Marker,
  // useMap,
  useMapEvents,
  Polygon,
} from "react-leaflet";
import L from "leaflet";
import iconImage from "leaflet/dist/images/marker-icon.png";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import "./PolyDrawer.css";
import { FaDrawPolygon } from "react-icons/fa";
import { IoLockClosed } from "react-icons/io5";
import { CiBoxList } from "react-icons/ci";
import { IoMdCloseCircle } from "react-icons/io";

const PolygonDrawer = ({ isDrawing, addPoint }) => {
  useMapEvents({
    click(e) {
      if (isDrawing) {
        addPoint([e.latlng.lat, e.latlng.lng]);
      }
    },
  });
  return null;
};

export default function PolyDrawer({ setIsShowMap, handleSearch }) {
  const apiUrl = import.meta.env.VITE_API_URL;
  const customIcon = new L.Icon({
    iconUrl: iconImage,
    iconSize: [18, 30],
  });

  const [polygonCoords, setPolygonCoords] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [allLocations, setAllLocations] = useState([]);
  useEffect(() => {}, [isDrawing]);

  const startDrawing = () => {
    console.log("start draw Polygon:");
    setPolygonCoords([]);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    setIsDrawing(false);

    fetch(`${apiUrl}/properties/search/locations`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(polygonCoords),
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data.results);
        setAllLocations(data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="mapContainer__wrapper">
      <MapContainer
        className="mapContainer"
        center={[40.416775, -3.70379]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {allLocations.length &&
          allLocations.map((item) => (
            <Marker position={item.latlng} icon={customIcon}>
              <Popup>
                {item.title}__ {item.price} $
              </Popup>
            </Marker>
          ))}

        <PolygonDrawer
          isDrawing={isDrawing}
          addPoint={(point) => setPolygonCoords([...polygonCoords, point])}
        />
        {
          // polygonCoords.length > 2 &&
          <Polygon
            positions={polygonCoords}
            pathOptions={{ color: "#01796f" }}
            weight={3}
          />
        }
      </MapContainer>
      <button
        className="drawBtn drawBtn1"
        onClick={startDrawing}
        style={{ margin: "10px" }}
      >
        <FaDrawPolygon className="drawBtn__icon" />
        Draw Your Area
      </button>

      <button
        className="drawBtn drawBtn2"
        onClick={finishDrawing}
        style={{ margin: "10px" }}
      >
        <IoLockClosed className="drawBtn__icon" />
        Finish Drawing
      </button>

      <button
        className="drawBtn drawBtn3"
        onClick={() => handleSearch()}
        style={{ margin: "10px" }}
      >
        <CiBoxList className="drawBtn__icon" />
        Show List
      </button>
      <button
        className="drawBtn drawBtn4"
        onClick={() => setIsShowMap(false)}
        style={{ margin: "10px" }}
      >
        <span>Close</span>
        <IoMdCloseCircle className="drawBtn__icon" />
      </button>
    </div>
  );
}
