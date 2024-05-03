"use client";

import { APIProvider, AdvancedMarker, Map } from "@vis.gl/react-google-maps";
import { useEffect, useMemo, useState } from "react";

type LatLngLiteral = google.maps.LatLngLiteral;

export default function MapComponent() {
  const googleMapsApiKey = process.env.GOOGLE_MAPS_API_KEY;
  const googleMapId = process.env.GOOGLE_MAPS_ID;
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const mapCenter = useMemo<LatLngLiteral>(
    () => ({ lat: 7.9840886, lng: 80.7029496 }),
    []
  );

  if (googleMapsApiKey == undefined && isClient) {
    return <div>Map loading.</div>;
  }

  return (
    isClient &&
    googleMapsApiKey &&
    googleMapId && (
      <div style={{ height: "100vh", width: "100%" }}>
        <APIProvider apiKey={googleMapsApiKey}>
          <Map center={mapCenter} zoom={9} mapId={googleMapId}>
            <AdvancedMarker
              position={{ lat: 7.9840886, lng: 80.7029496 }}
            ></AdvancedMarker>
          </Map>
        </APIProvider>
      </div>
    )
  );
}
