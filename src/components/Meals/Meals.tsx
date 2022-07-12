import type { ReactElement } from 'react';
import { AvailableMeals } from './AvailableMeals';
import { MealsSummary } from './MealsSummary';

export default function Meals(): ReactElement {
  return (
    <section className="">
      <MealsSummary />
      <AvailableMeals />
    </section>
  );
}
