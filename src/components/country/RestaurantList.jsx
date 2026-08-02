import RestaurantCard from './RestaurantCard.jsx';

export default function RestaurantList({ restaurants = [], countryName }) {
  if (restaurants.length === 0) {
    return (
      <p className="restaurant-empty-note">
        Uns ist aktuell kein spezialisiertes {countryName}-Restaurant in Hamburg bekannt — kennst
        du eins? Bis dahin: probier eines der Rezepte oben doch selbst zu Hause nach.
      </p>
    );
  }

  return (
    <div className="restaurant-list">
      {restaurants.map((r) => (
        <RestaurantCard key={r.name} restaurant={r} />
      ))}
    </div>
  );
}
