import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import config from "../../config";
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

    return (
        <LoadScript googleMapsApiKey={config.googleMapsApiKey}>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={12}
                center={markerPosition}
                mapTypeId={"terrain"}
            >
                <Marker position={markerPosition} />
            </GoogleMap>
        </LoadScript>
    );
};

export default MapContainer;
