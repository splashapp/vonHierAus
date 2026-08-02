import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="not-found-page">
      <h1>Seite nicht gefunden</h1>
      <p>Dieses Land ist noch nicht Teil der virtuellen Reise.</p>
      <Link to="/">Zurück zur Übersicht</Link>
    </div>
  );
}
