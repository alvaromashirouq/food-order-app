import type { ReactElement } from 'react';
import { Card } from '../UI/Card';
import { MealItem } from './MealItem/MealItem';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'sushi',
    description: 'finest fish and vegetables',
    price: 2299
  },
  {
    id: 'm2',
    name: 'taco',
    description: 'tortilla with meat',
    price: 1500
  },
  {
    id: 'm3',
    name: 'bbq burger',
    description: 'american, raw, meaty',
    price: 1299
  }
];

export function AvailableMeals(): ReactElement {
  const mealList = DUMMY_MEALS.map((meal) => {
    return <MealItem {...meal} key={meal.id} />;
  });
  return (
    <section className="max-w-4xl mt-8 mx-auto">
      <Card>
        <ul className="divide-y">{mealList}</ul>
      </Card>
    </section>
  );
}
