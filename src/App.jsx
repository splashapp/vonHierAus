import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import CountryPage from './pages/CountryPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/:countryId" element={<CountryPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
