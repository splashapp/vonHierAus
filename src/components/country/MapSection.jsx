import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function createDivIcon(capital) {
  const size = capital ? 16 : 12;
  return L.divIcon({
    className: 'map-marker',
    html: `<span class="map-marker-dot${capital ? ' map-marker-dot--capital' : ''}"></span>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  });
}

export default function MapSection({ map, countryName }) {
  const containerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!map?.cities?.length || !containerRef.current || mapRef.current) return undefined;

    const leafletMap = L.map(containerRef.current, {
      scrollWheelZoom: false,
    }).setView([map.center.lat, map.center.lon], map.zoom);
    mapRef.current = leafletMap;

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 18,
    }).addTo(leafletMap);

    map.cities.forEach((city) => {
      L.marker([city.lat, city.lon], { icon: createDivIcon(city.capital) })
        .addTo(leafletMap)
        .bindTooltip(city.capital ? `${city.name} ★` : city.name, {
          permanent: true,
          direction: 'right',
          offset: [8, 0],
          className: 'map-marker-label',
        });
    });

    return () => {
      leafletMap.remove();
      mapRef.current = null;
    };
  }, [map]);

  if (!map?.cities?.length) return null;

  return (
    <div className="map-section">
      <div ref={containerRef} className="map-leaflet" role="img" aria-label={`Karte von ${countryName}`} />
      <div className="map-legend">
        <span>
          <span className="map-legend-swatch map-legend-swatch--capital" />
          Hauptstadt
        </span>
        <span>
          <span className="map-legend-swatch" />
          Weitere Städte
        </span>
        <span className="map-legend-credit">Kartendaten © OpenStreetMap-Mitwirkende</span>
      </div>
    </div>
  );
}
