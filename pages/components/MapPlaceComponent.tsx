import { useMap } from "@vis.gl/react-google-maps";
import { Autocomplete } from "@react-google-maps/api";
import { useState, MouseEvent } from "react";
import { LatLngLiteral } from "./MapComponent";

export function MapPlaceComponent() {
    const map = useMap();
    const [searchResult, setSearchResult] = useState<google.maps.places.Autocomplete>();

    const AutoCompleteOptions = {
        componentRestrictions: { country: 'LK' },
    };

    const onLoad = (autocomplete: google.maps.places.Autocomplete) => {
        setSearchResult(autocomplete);
    }

    const zoomToLocation = (location: LatLngLiteral) => {
        if (map) {
            const latlng = {
                lat: location.lat,
                lng: location.lng,
            };
            map.setCenter(latlng)
            map.setZoom(10);                        
            new google.maps.Circle({
                strokeColor: "#FF0000",
                strokeWeight: 2,
                fillColor: "#FF0000",
                map,
                center: latlng,
                radius: 3000,
            })
        }
    }

    const onPlaceChangedEvent = () => {
        if (searchResult) {
            const place = searchResult.getPlace();
            if (place?.geometry?.location) {
                const placeLat = place.geometry?.location?.lat()
                const placeLng = place.geometry?.location?.lng()
                zoomToLocation({
                    lat: placeLat,
                    lng: placeLng,
                });
            }
        }
    }

    const onNavigatorLocationClick = (event: MouseEvent) => {
        event.preventDefault();
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                zoomToLocation({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                });
            })
        }
    }

    return (
        <div className="row">
            <div className="col-md-6">
                <Autocomplete
                    onLoad={onLoad}
                    onPlaceChanged={onPlaceChangedEvent}
                    options={AutoCompleteOptions}
                >
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Enter postcode, suburb or locator name"
                    ></input>
                </Autocomplete>
            </div>
            <div className="col-md-2">
                <button
                    type="button"
                    title="Get current location"
                    className="btn btn-outline-primary"
                    onClick={(event) => onNavigatorLocationClick(event)}
                >
                    <img src="../../static/assets/target.svg" width="25" height="25" />
                </button>
            </div>
        </div>
    )
}
