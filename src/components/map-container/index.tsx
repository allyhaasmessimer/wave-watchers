import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

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
        <LoadScript
            googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
        >
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
