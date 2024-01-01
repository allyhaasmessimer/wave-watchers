import {
  GoogleMap,
  LoadScript,
  Marker,
  StandaloneSearchBox,
} from "@react-google-maps/api";
import { useRef, useState } from "react";
interface MarkerPosition {
  lat: number;
  lng: number;
}

interface MapContainerProps {
  markerPosition: MarkerPosition;
}

const MapContainer: React.FC<MapContainerProps> = ({ markerPosition }) => {
  const mapStyles = {
    height: "50vh",
    width: "100%",
  };

  const [position, setPosition] = useState(markerPosition);
  // The issue we were encountering earlier was that the type of ref was not being set to google.maps.places.SearchBox
  const searchBox = useRef<google.maps.places.SearchBox>();

  const onSBLoad = (ref: google.maps.places.SearchBox) => {
    searchBox.current = ref;
  };

  const onPlacesChanged = () => {
    if (searchBox.current) {
      const places = searchBox.current.getPlaces();

      if (places) {
        // this checks to make sure places is not undefined
        const place = places[0]; // this gets the first place in the array
        const newPosition = place.geometry?.location; // this gets the location of the place
        if (newPosition) {
          // this checks to make sure newPosition is not undefined
          const position = {
            lat: newPosition.lat(),
            lng: newPosition.lng(),
          };

          setPosition(position); // this sets the position state to the new position
        }
      }
    }
  };

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY!}
      libraries={["places"]}
    >
      <>
        <StandaloneSearchBox
          onLoad={onSBLoad}
          onPlacesChanged={onPlacesChanged}
        >
          <input type="text" placeholder="Search here..." />
        </StandaloneSearchBox>

        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={12}
          center={position}
          mapTypeId={"terrain"}
        >
          <Marker position={markerPosition} />
        </GoogleMap>
      </>
    </LoadScript>
  );
};

export default MapContainer;
