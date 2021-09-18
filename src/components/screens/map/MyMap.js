import React, { Component } from "react";
import countries from "./../../../data/countries.json";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MyMap = () => {
  return (
    <>
      <MapContainer
        style={{ width: "100%", height: "100vh" }}
        center={[5.650409, -0.186876]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[5.650409, -0.186876]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default MyMap;
