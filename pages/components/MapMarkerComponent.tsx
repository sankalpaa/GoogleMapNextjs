import { AdvancedMarker, InfoWindow, Pin } from "@vis.gl/react-google-maps";
import { useState } from "react";
import { Place, places } from "../data/places"

export function MarkerComponent() {
    const [selectedPlaceId, setSelectedPlaceId] = useState<string | undefined>(undefined);

    return (
        places.map((place: Place, key: number) => (
            <div key={key}>
                <AdvancedMarker
                    position={{ lat: place.geoPoint.latitude, lng: place.geoPoint.longitude }}
                    onClick={() => setSelectedPlaceId(place.id)}
                >
                    <Pin background={'#FF00FF'} borderColor={'#FF00FF'} glyphColor={'#FFFFFF'}></Pin>
                </AdvancedMarker>
                {
                    selectedPlaceId && selectedPlaceId == place.id && (
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
    )
}
