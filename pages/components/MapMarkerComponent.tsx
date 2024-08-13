import { AdvancedMarker, InfoWindow, Pin, useMap } from "@vis.gl/react-google-maps";
import { useEffect, useRef, useState } from "react";
import { Place, places } from "../data/places"
import { Marker, MarkerClusterer } from "@googlemaps/markerclusterer";

export function MarkerComponent() {
    const [selectedPlaceId, setSelectedPlaceId] = useState<string | undefined>(undefined);
    const [markers, setMarkers] = useState<{ [key: string]: Marker }>({});
    const map = useMap();

    const clusterer = useRef<MarkerClusterer | null>(null);

    useEffect(() => {
        if (!map) return;
        if (!clusterer.current) {
            clusterer.current = new MarkerClusterer({ map });
        }
    }, [map])

    useEffect(() => {
        clusterer.current?.clearMarkers();
        clusterer.current?.addMarkers(Object.values(markers))
    }, [markers])

    const setMarkerRef = (marker: Marker | null, key: number) => {
        if (marker && markers[key]) return;
        if (!marker && !markers[key]) return;

        setMarkers((prev) => {
            if (marker) {
                return { ...prev, [key]: marker };
            } else {
                const newMarker = { ...prev };
                delete newMarker[key];
                return newMarker;
            }
        });
    }

    return (
        places.map((place: Place, key: number) => (
            <div key={key}>
                <AdvancedMarker
                    position={{ lat: place.geoPoint.latitude, lng: place.geoPoint.longitude }}
                    onClick={() => setSelectedPlaceId(place.id)}
                    ref={(marker) => setMarkerRef(marker, key)}
                >
                    <Pin background={'#FF00FF'} borderColor={'#FF00FF'} glyphColor={'#FFFFFF'}>
                        <span style={{ color: "red" }}>
                            <h6>{place.name}</h6>
                        </span>
                    </Pin>
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
