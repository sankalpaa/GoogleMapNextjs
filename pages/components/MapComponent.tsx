"use client";

import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { useMemo } from "react";
import { MarkerComponent } from "./MapMarkerComponent";
import { Libraries, useLoadScript } from "@react-google-maps/api";
import "../../assets/css/map.css"
import { MapPlaceComponent } from "./MapPlaceComponent";

type LatLngLiteral = google.maps.LatLngLiteral;

export default function MapComponent() {
  const googleMapsApiKey = process.env.GOOGLE_MAPS_API_KEY;
  const googleMapId = process.env.GOOGLE_MAPS_ID;

  const mapCenter = useMemo<LatLngLiteral>(() => ({ lat: 7.9558296, lng: 80.7572161 }), []);
  const googleMapLibrary: Libraries = ['places'];

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: googleMapsApiKey ? googleMapsApiKey : 'InvalidKey',
    libraries: googleMapLibrary,
  });

  if (!isLoaded) {
    return <div>Map loading.</div>;
  }
  return (
    googleMapsApiKey &&
    googleMapId && (
      <div className="row">
        <div className="col-md-12">
          <APIProvider apiKey={googleMapsApiKey}>
            <div className="row">
              <div className="col-md-12 text-center">
                <h2>Google Map with Nextjs</h2>
              </div>
            </div>
            <div className="row address">
              <div className="col-md-6">
                <MapPlaceComponent></MapPlaceComponent>
              </div>
            </div>
            <div className="row">
              <div style={{ height: "800px" }}>
                <Map
                  defaultCenter={mapCenter}
                  defaultZoom={7}
                  mapId={googleMapId}
                >
                  <MarkerComponent></MarkerComponent>
                </Map>
              </div>
            </div>
          </APIProvider>
        </div>
      </div>
    )
  );
}
