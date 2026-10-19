import { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON, useMap } from "react-leaflet";
import L from "leaflet";

import { getColor, getPopulation, getCountyName } from "./utils";
import PopulationLegend from "./PopulationLegend";
import CountyDetails from "./CountyDetails";

// Automatically zoom to the Kenya boundary
function FitBounds({ data }) {
  const map = useMap();

  useEffect(() => {
    if (!data) return;

    const bounds = L.geoJSON(data).getBounds();

    if (bounds.isValid()) {
      map.fitBounds(bounds);
    }
  }, [data, map]);

  return null;
}

export default function KenyaMap() {
  const [counties, setCounties] = useState(null);
  const [selectedCounty, setSelectedCounty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/data/kenya_counties.geojson")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Could not load county data. Check your GeoJSON file path.",
          );
        }

        return response.json();
      })
      .then((data) => {
        if (!data.features) {
          throw new Error("The GeoJSON file has no features array.");
        }

        setCounties(data);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const countyStyle = (feature) => ({
    fillColor: getColor(getPopulation(feature.properties)),
    weight: 1,
    color: "#ffffff",
    opacity: 1,
    fillOpacity: 0.78,
  });

  const onEachCounty = (feature, layer) => {
    const properties = feature.properties;
    const name = getCountyName(properties);
    const population = getPopulation(properties);

    layer.bindTooltip(
      `<strong>${name}</strong><br/>Population: ${population.toLocaleString()}`,
      { sticky: true },
    );

    layer.on({
      mouseover: (event) => {
        event.target.setStyle({
          weight: 2.5,
          color: "#334155",
          fillOpacity: 1,
        });
        event.target.bringToFront();
      },

      mouseout: (event) => {
        event.target.setStyle(countyStyle(feature));
      },

      click: () => {
        setSelectedCounty(properties);
      },
    });
  };

  if (loading) {
    return (
      <div className="flex h-[65vh] items-center justify-center rounded-xl bg-slate-100">
        <p className="text-slate-600">Loading Kenya county boundaries...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-red-700">
        <h2 className="font-semibold">Unable to load the map</h2>
        <p className="mt-2 text-sm">{error}</p>
        <p className="mt-2 text-sm">
          Expected file: public/data/kenya_counties.geojson
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_280px]">
      <div className="relative h-[65vh] min-h-[450px] overflow-hidden rounded-xl border border-slate-200">
        <MapContainer
          center={[0.5, 37.8]}
          zoom={6}
          minZoom={5}
          scrollWheelZoom
          className="h-full w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <GeoJSON
            data={counties}
            style={countyStyle}
            onEachFeature={onEachCounty}
          />

          <FitBounds data={counties} />
        </MapContainer>

        <PopulationLegend />
      </div>
      <CountyDetails county={selectedCounty} />
    </div>
  );
}
