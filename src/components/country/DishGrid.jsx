import DishCard from './DishCard.jsx';

export default function DishGrid({ dishes = [] }) {
  return (
    <div className="card-grid">
      {dishes.map((dish) => (
        <DishCard key={dish.id} dish={dish} />
      ))}
    </div>
  );
}
