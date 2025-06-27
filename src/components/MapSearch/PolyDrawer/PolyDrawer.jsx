import { React, useEffect } from "react";
import { useMap } from "react-leaflet";
import "../../../plugins/leaflet/leaflet.css"; // Ensure you have the correct path to your Leaflet CSS
import "leaflet-draw/dist/leaflet.draw.css";
import L from "leaflet";
import "leaflet-draw";
import "./PolyDrawer.css";

export default function PolyDrawer({ onPolygonCreated }) {
  const map = useMap();

  useEffect(() => {
    const drawControl = new L.Control.Draw({
      draw: {
        polygon: true,
        polyline: false,
        rectangle: false,
        circle: false,
        marker: false,
        circlemarker: false,
      },
      edit: false,
      delete: false,
    });

    map.addControl(drawControl);

    map.on(L.Draw.Event.CREATED, (e) => {
      const latlngs = e.layer.getLatLngs();
      onPolygonCreated(latlngs);
      e.layer.addTo(map);
    });

    return () => {
      map.off(L.Draw.Event.CREATED);
      map.removeControl(drawControl);
    };
  }, [map, onPolygonCreated]);

  return null;
}
