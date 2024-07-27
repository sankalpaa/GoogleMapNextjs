"use client";

import { APIProvider, AdvancedMarker, InfoWindow, Map, Pin } from "@vis.gl/react-google-maps";
import { useMemo } from "react";
import { Place, places } from "../data/places"

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
                defaultZoom={9}
                mapId={googleMapId}
              >
                {
                  places.map((place: Place, key: number) => (
                    <div>
                      <AdvancedMarker
                        position={{ lat: place.geoPoint.latitude, lng: place.geoPoint.longitude }}
                        key={key}
                      >
                        <Pin background={'#FF00FF'} borderColor={'#FF00FF'} glyphColor={'#FFFFFF'}></Pin>
                      </AdvancedMarker>
                      <InfoWindow
                        position={{ lat: place.geoPoint.latitude, lng: place.geoPoint.longitude }}
                        key={key}
                      >
                        <div>
                            <h4>{place.name}</h4>
                            <p>{place.intro}</p>
                        </div>
                      </InfoWindow>
                    </div>


                  ))
                }

              </Map>
            </APIProvider>
          </div>
        </div>
      </div>
    )
  );
}
