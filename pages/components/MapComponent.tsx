"use client";

import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { useMemo, useState } from "react";
import { MarkerComponent } from "./MapMarkerComponent";
import { Autocomplete, Libraries, useLoadScript } from "@react-google-maps/api";
import "../../assets/css/map.css"

type LatLngLiteral = google.maps.LatLngLiteral;

export default function MapComponent() {
  const googleMapsApiKey = process.env.GOOGLE_MAPS_API_KEY;
  const googleMapId = process.env.GOOGLE_MAPS_ID;

  const mapCenter = useMemo<LatLngLiteral>(() => ({ lat: 7.9558296, lng: 80.7572161 }), []);
  const [searchResult, setSearchResult] = useState<google.maps.places.Autocomplete>();
  const googleMapLibrary: Libraries = ['places'];

  const AutoCompleteOptions = {
    componentRestrictions: { country: 'LK' },
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: googleMapsApiKey ? googleMapsApiKey : 'InvalidKey',
    libraries: googleMapLibrary,
  });

  function onLoad(autocomplete: google.maps.places.Autocomplete) {
    setSearchResult(autocomplete);
  }

  function onPlaceChangedEvent() {
    if (searchResult) {
      const place = searchResult.getPlace();
      console.log("Place: ", place);
    }
  }

  if (!isLoaded) {
    return <div>Map loading.</div>;
  }
  return (
    googleMapsApiKey &&
    googleMapId && (
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>Google Map with Nextjs</h2>
            </div>
          </div>
          <div className="row address">
            <div className="col-md-6">
              Search: 
              <Autocomplete
                onLoad={onLoad}
                onPlaceChanged={onPlaceChangedEvent}
                options={AutoCompleteOptions}
              >
                <input
                  className="form-control"
                  type="text"
                  // value={searchAddress}
                  // onChange={(event) => {
                  //   setAddress(event.target.value);
                  // }}
                  placeholder="Enter postcode, suburb or locator name"
                ></input>
              </Autocomplete>
            </div>
          </div>
          <div className="row">
            <div style={{ height: "800px" }}>
              <APIProvider apiKey={googleMapsApiKey}>
                <Map
                  defaultCenter={mapCenter}
                  defaultZoom={7}
                  mapId={googleMapId}
                >
                  <MarkerComponent></MarkerComponent>
                </Map>
              </APIProvider>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
