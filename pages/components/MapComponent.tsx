"use client";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { useMemo } from "react";

type LatLngLiteral = google.maps.LatLngLiteral;

export default function MapComponent() {
  const googleMapsApiKey = process.env.GOOGLE_MAPS_API_KEY;
  const mapCenter = useMemo<LatLngLiteral>(
    () => ({ lat: 7.9840886, lng: 80.7029496 }),
    []
  );

  if (googleMapsApiKey == undefined) {
    return <div>Map loading......;</div>;
  }

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <APIProvider apiKey={googleMapsApiKey}>
        <Map center={mapCenter} zoom={9}></Map>
      </APIProvider>
    </div>
  );
}