import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "leaflet/dist/leaflet.css";

interface Location {
  geometry: {
    lat: number;
    lng: number;
  };
  formatted: string;
}

interface MarkerPosition {
  lat: number;
  lng: number;
}

interface LocationSelectionProps {
  onLocationSelect: (location: string) => void;
}

const LocationSelection: React.FC<LocationSelectionProps> = ({ onLocationSelect }) => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<Location[]>([]);
  const [markers, setMarkers] = useState<MarkerPosition[]>([]);

  const handleSearch = async () => {
    if (query.trim() === "") return;

    const apiKey = "df19126270e447b8aabde4b6343a3d16"; // Replace this with your OpenCage API key.
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(query)}&key=${apiKey}`;

    try {
      const response = await axios.get(url);
      setResults(response.data.results);
    } catch (error) {
      console.error("Error fetching location data:", error);
    }
  };

  const handleZoomPlace = (place: Location) => {
    const { lat, lng } = place.geometry;
    setMarkers([...markers, { lat, lng }]);
  };
  
  const handleAddPlace = (place: Location) => {
    onLocationSelect(place.formatted);
  };

  const LocationMarker: React.FC<{ position: [number, number] }> = ({ position }) => {
    const map = useMap();
    map.flyTo(position, 15);

    return (
      <Marker position={position} icon={new L.Icon({ iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png", shadowUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-shadow.png", iconSize: [25, 41], iconAnchor: [12, 41] })}></Marker>
    );
  };

  return (
    <div className="max-w-lg mt-4 mx-auto p-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Select Locations</h2>

      <MapContainer
        center={[27.7, 85.3]}
        zoom={12}
        scrollWheelZoom={false}
        className="h-96 w-full mb-4"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {markers.map((marker, index) => (
          <LocationMarker key={index} position={[marker.lat, marker.lng]} />
        ))}
      </MapContainer>

      <div className="flex justify-center items-center mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter a place"
          className="w-3/4 p-2 mr-2 border border-gray-300 rounded"
        />
        <button onClick={handleSearch} className="h-10 px-4 bg-blue-500 text-white rounded">
          Search
        </button>
      </div>

      <div className="mb-4">
        {results.map((result, index) => (
          <div key={index} className="flex justify-between p-2 border-b border-gray-300">
            <p onClick={() => handleZoomPlace(result)} className="m-0 cursor-pointer">{result.formatted}</p>
            <button onClick={() => handleAddPlace(result)} className="bg-blue-500 text-white px-2 rounded">
              Select
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationSelection;
