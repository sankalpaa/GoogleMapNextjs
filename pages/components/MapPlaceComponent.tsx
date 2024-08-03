import { Autocomplete } from "@react-google-maps/api";
import { useState } from "react";

export function MapPlaceComponent() {
    const [searchResult, setSearchResult] = useState<google.maps.places.Autocomplete>();


    const AutoCompleteOptions = {
        componentRestrictions: { country: 'LK' },
    };

    const onLoad = (autocomplete: google.maps.places.Autocomplete) => {
        setSearchResult(autocomplete);
    }

    const onPlaceChangedEvent = () => {
        if (searchResult) {
            const place = searchResult.getPlace();
            if (place?.geometry?.location) {
                const placeLat = place.geometry?.location?.lat()
                const placeLng = place.geometry?.location?.lng()
            }
        }
    }

    return (
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
    )
}
