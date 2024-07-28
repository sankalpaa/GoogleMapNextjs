"use client";

import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { useMemo } from "react";
import { MarkerComponent } from "./MapMarkerComponent";

type LatLngLiteral = google.maps.LatLngLiteral;

export default function MapComponent() {
  const googleMapsApiKey = process.env.GOOGLE_MAPS_API_KEY;
  const googleMapId = process.env.GOOGLE_MAPS_ID;

  const mapCenter = useMemo<LatLngLiteral>(() => ({ lat: 7.9558296, lng: 80.7572161 }), []);

  if (googleMapsApiKey == undefined) {
    return <div>Map loading.</div>;
  }
  return (
    googleMapsApiKey &&
    googleMapId && (
      <div className="row">
        <div className="col-md-12">
          <div style={{ height: "800px" }}>
            <APIProvider apiKey={googleMapsApiKey}>
              <Map
                defaultCenter={mapCenter}
                defaultZoom={8}
                mapId={googleMapId}
              >
                <MarkerComponent></MarkerComponent>
              </Map>
            </APIProvider>
          </div>
        </div>
      </div>
    )
  );
}
