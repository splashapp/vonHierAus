import { Link, useParams } from 'react-router-dom';
import FlagBadge from '../shared/FlagBadge.jsx';

export default function SiteHeader({ flagImage, name }) {
  const { countryId } = useParams();
  return (
    <header className="site-header">
      <Link to="/" className="site-header-brand">
        {flagImage && name ? (
          <>
            <FlagBadge flagImage={flagImage} size="sm" />
            {name}
          </>
        ) : (
          '🌍 Virtuelle Afrikareise'
        )}
      </Link>
      {countryId && (
        <Link to="/" className="site-header-back">
          ← Übersicht
        </Link>
      )}
    </header>
  );
}
