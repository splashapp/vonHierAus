import { useId, useState } from 'react';
import Card from '../shared/Card.jsx';
import Collapsible from '../shared/Collapsible.jsx';

export default function RestaurantCard({ restaurant }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const hasMenu = restaurant.menuHighlights?.length > 0;
  const hasVisitNote = Boolean(restaurant.visitNote);

  return (
    <Card
      image={restaurant.image}
      title={restaurant.name}
      imageAction={
        restaurant.url
          ? {
              label: 'Website öffnen',
              toggle: false,
              onClick: () => window.open(restaurant.url, '_blank', 'noopener,noreferrer'),
            }
          : undefined
      }
    >
      <p className="restaurant-address">{restaurant.address}</p>
      {hasVisitNote && !hasMenu && <p className="restaurant-visit-note">{restaurant.visitNote}</p>}
      {hasMenu && (
        <>
          <button
            type="button"
            className="recipe-toggle"
            aria-expanded={open}
            aria-controls={id}
            onClick={() => setOpen((o) => !o)}
          >
            {hasVisitNote ? restaurant.visitNote : open ? 'Speisekarte schließen' : 'Speisekarte anzeigen'}
          </button>
          <Collapsible id={id} open={open}>
            <ul className="menu-highlights">
              {restaurant.menuHighlights.map((item) => (
                <li key={item.name}>
                  <div className="menu-highlight-row">
                    <span className="menu-highlight-name">{item.name}</span>
                    <span className="menu-highlight-price">{item.price}</span>
                  </div>
                  <p className="menu-highlight-desc">{item.desc}</p>
                </li>
              ))}
            </ul>
          </Collapsible>
        </>
      )}
    </Card>
  );
}
