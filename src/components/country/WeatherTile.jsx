import { useEffect, useState } from 'react';
import { HAMBURG_COORDS } from '../../utils/constants.js';

// WMO-Wettercodes (Open-Meteo) auf Icon + deutsches Label abgebildet.
const WEATHER_CODES = {
  0: { icon: '☀️', label: 'Klar' },
  1: { icon: '🌤️', label: 'Überwiegend klar' },
  2: { icon: '⛅', label: 'Teilweise bewölkt' },
  3: { icon: '☁️', label: 'Bedeckt' },
  45: { icon: '🌫️', label: 'Nebel' },
  48: { icon: '🌫️', label: 'Reifnebel' },
  51: { icon: '🌦️', label: 'Leichter Niesel' },
  53: { icon: '🌦️', label: 'Niesel' },
  55: { icon: '🌧️', label: 'Starker Niesel' },
  61: { icon: '🌦️', label: 'Leichter Regen' },
  63: { icon: '🌧️', label: 'Regen' },
  65: { icon: '🌧️', label: 'Starker Regen' },
  71: { icon: '🌨️', label: 'Leichter Schnee' },
  73: { icon: '🌨️', label: 'Schnee' },
  75: { icon: '❄️', label: 'Starker Schnee' },
  80: { icon: '🌦️', label: 'Schauer' },
  81: { icon: '🌧️', label: 'Schauer' },
  82: { icon: '⛈️', label: 'Heftige Schauer' },
  95: { icon: '⛈️', label: 'Gewitter' },
  96: { icon: '⛈️', label: 'Gewitter mit Hagel' },
  99: { icon: '⛈️', label: 'Gewitter mit Hagel' },
};

function describeWeather(code) {
  return WEATHER_CODES[code] || { icon: '🌡️', label: '' };
}

async function fetchWeather({ lat, lon }) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,precipitation,weather_code&timezone=auto`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Wetterdaten nicht verfügbar');
  const data = await res.json();
  return data.current;
}

function WeatherBlock({ city, weather }) {
  if (!weather) {
    return (
      <div className="weather-block">
        <div className="weather-row">
          <span className="weather-loading">…</span>
          <span className="weather-city">{city}</span>
        </div>
      </div>
    );
  }

  const { icon, label } = describeWeather(weather.weather_code);

  return (
    <div className="weather-block">
      <div className="weather-row">
        <span className="weather-icon" aria-hidden="true">{icon}</span>
        <span className="weather-temp">{Math.round(weather.temperature_2m)}°C</span>
        <span className="weather-city">{city}</span>
      </div>
      <div className="weather-detail-row">
        <span>{label}</span>
        <span>💧 {weather.relative_humidity_2m}%</span>
        <span>☔ {weather.precipitation} mm</span>
      </div>
    </div>
  );
}

export default function WeatherTile({ capital, capitalCoords }) {
  const [hamburgWeather, setHamburgWeather] = useState(null);
  const [capitalWeather, setCapitalWeather] = useState(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!capitalCoords) return undefined;
    let cancelled = false;

    async function load() {
      try {
        const [hh, cap] = await Promise.all([
          fetchWeather(HAMBURG_COORDS),
          fetchWeather(capitalCoords),
        ]);
        if (!cancelled) {
          setHamburgWeather(hh);
          setCapitalWeather(cap);
          setFailed(false);
        }
      } catch {
        if (!cancelled) setFailed(true);
      }
    }

    load();
    const interval = setInterval(load, 15 * 60 * 1000);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, [capitalCoords?.lat, capitalCoords?.lon]);

  if (!capitalCoords) return null;

  if (failed) {
    return (
      <div className="fact-tile fact-tile-weather">
        <div className="fact-tile-label">Wetter</div>
        <div className="fact-tile-note">Wetterdaten momentan nicht verfügbar.</div>
      </div>
    );
  }

  return (
    <div className="fact-tile fact-tile-weather">
      <WeatherBlock city="Hamburg" weather={hamburgWeather} />
      <WeatherBlock city={capital} weather={capitalWeather} />
    </div>
  );
}
