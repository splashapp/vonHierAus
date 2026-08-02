import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage.jsx';

// Beide Seiten per dynamic import(): trennt z.B. Leaflet und die Länderseiten-Komponenten
// (nur auf /:countryId gebraucht) vom Bundle der Startseite, und umgekehrt.
const LandingPage = lazy(() => import('./pages/LandingPage.jsx'));
const CountryPage = lazy(() => import('./pages/CountryPage.jsx'));

export default function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/:countryId" element={<CountryPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
