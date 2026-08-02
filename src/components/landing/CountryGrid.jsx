import CountryCard from './CountryCard.jsx';

export default function CountryGrid({ countries }) {
  return (
    <div className="country-grid">
      {countries.map((country) => (
        <CountryCard key={country.id} country={country} />
      ))}
    </div>
  );
}
