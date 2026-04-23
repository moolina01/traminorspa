"use client"

import { useEffect } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

interface Point {
  id: string
  name: string
  city: string
  lat: number
  lng: number
}

function createIcon() {
  return L.divIcon({
    className: "",
    html: `
      <style>
        @keyframes pulse-ring {
          0%   { transform: scale(1);   opacity: 0.6; }
          100% { transform: scale(2.8); opacity: 0; }
        }
        .pulse-dot-ring {
          position: absolute;
          width: 14px; height: 14px;
          background: #E30613;
          border-radius: 50%;
          animation: pulse-ring 1.8s ease-out infinite;
        }
        .pulse-dot-core {
          position: absolute;
          width: 14px; height: 14px;
          background: #E30613;
          border: 2px solid white;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(0,0,0,0.5);
        }
      </style>
      <div style="position:relative; width:14px; height:14px;">
        <div class="pulse-dot-ring"></div>
        <div class="pulse-dot-core"></div>
      </div>
    `,
    iconSize: [14, 14],
    iconAnchor: [7, 7],
    popupAnchor: [0, -14],
  })
}

export default function LeafletMap({ points }: { points: Point[] }) {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    delete (L.Icon.Default.prototype as any)._getIconUrl
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
      iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
      shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    })
  }, [])

  return (
    <MapContainer
      center={[-25.0, -70.6]}
      zoom={6}
      style={{ height: "100%", width: "100%" }}
      scrollWheelZoom={false}
      zoomControl={false}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>'
      />
      {points.map((p) => (
        <Marker key={p.id} position={[p.lat, p.lng]} icon={createIcon()}>
          <Popup>
            <div style={{ fontFamily: "sans-serif", minWidth: "130px" }}>
              <strong style={{ color: "#E30613", fontSize: "13px" }}>{p.name}</strong><br />
              <span style={{ color: "#666", fontSize: "11px" }}>{p.city}</span>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
