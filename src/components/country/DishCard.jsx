import { useId, useState } from 'react';
import Card from '../shared/Card.jsx';
import Collapsible from '../shared/Collapsible.jsx';

export default function DishCard({ dish }) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <Card
      image={dish.image}
      title={dish.name}
      subtitle={dish.shortDesc}
      imageAction={{
        label: 'Rezept anzeigen',
        activeLabel: 'Rezept schließen',
        toggle: true,
        active: open,
        controls: id,
        onClick: () => setOpen((o) => !o),
      }}
    >
      <Collapsible id={id} open={open}>
        <div className="recipe-block">
          <h4>Zutaten</h4>
          <ul>
            {dish.recipe.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <h4>Zubereitung</h4>
          <ol>
            {dish.recipe.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </Collapsible>
    </Card>
  );
}
