"use client";

import { MapContainer, TileLayer, Polygon, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const iconSVG = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#22c55e" width="36" height="36">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
`;

const customIcon =
  typeof window !== "undefined"
    ? L.divIcon({
        html: iconSVG,
        className: "custom-marker-icon",
        iconSize: [36, 36],
        iconAnchor: [18, 36],
        popupAnchor: [0, -30],
      })
    : null;

const polygonCoords: [number, number][] = [
  [48.5790631, 7.7883862],
  [48.6505608, 7.7749966],
  [48.6804916, 7.6847027],
  [48.671877, 7.5952671],
  [48.5429353, 7.5793026],
  [48.5415715, 7.7144001],
  [48.5790631, 7.7883862],
];

const center: [number, number] = [48.6083, 7.6853];

export default function InterventionMap() {
  return (
    <MapContainer
      center={center}
      zoom={11}
      scrollWheelZoom={false}
      className="w-full h-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />

      <Polygon
        positions={polygonCoords}
        pathOptions={{
          fillColor: "#22c55e",
          fillOpacity: 0.15,
          color: "#4ade80",
          weight: 2,
          dashArray: "5, 10",
        }}
      />

      {customIcon && (
        <Marker position={center} icon={customIcon}>
          <Popup>
            <strong>À vos papattes</strong>
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
}
