"use client";

import { APIProvider, AdvancedMarker, InfoWindow, Map, Pin } from "@vis.gl/react-google-maps";
import { useMemo, useState } from "react";
import { Place, places } from "../data/places"


type LatLngLiteral = google.maps.LatLngLiteral;

export default function MapComponent() {
  const googleMapsApiKey = process.env.GOOGLE_MAPS_API_KEY;
  const googleMapId = process.env.GOOGLE_MAPS_ID;

  const mapCenter = useMemo<LatLngLiteral>(() => ({ lat: 7.9558296, lng: 80.7572161 }), []);

  const [selectedPlaceId, setSelectedPlaceId] = useState<string|undefined>(undefined);


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
                    <div key={key}>
                      <AdvancedMarker
                        position={{ lat: place.geoPoint.latitude, lng: place.geoPoint.longitude }}
                        onClick={()=> setSelectedPlaceId(place.id)}
                      >
                        <Pin background={'#FF00FF'} borderColor={'#FF00FF'} glyphColor={'#FFFFFF'}></Pin>
                      </AdvancedMarker>
                      {
                        selectedPlaceId && selectedPlaceId == place.id &&(
                          <InfoWindow
                          position={{ lat: place.geoPoint.latitude, lng: place.geoPoint.longitude }}
                        >
                          <div className="marker-info-window">
                              <h4>{place.name}</h4>
                              <p>{place.intro}</p>
                          </div>
                        </InfoWindow>
                        )
                      }
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
