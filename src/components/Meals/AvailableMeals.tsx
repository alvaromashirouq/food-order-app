import { ReactElement, useEffect, useState } from 'react';
import { Card } from '../UI/Card';
import { MealItem } from './MealItem/MealItem';

export function AvailableMeals(): ReactElement {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [meals, setMeals] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const fetchMeals = async () => {
      const res = await fetch(
        'https://react-http-13682-default-rtdb.firebaseio.com/food.json'
      );
      if (!res.ok) {
        throw new Error('something went wrong');
      }
      const data = await res.json();

      const loadedMeals = [];
      for (const key in data) {
        loadedMeals.push({
          id: key,
          ...data[key]
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };
    try {
      fetchMeals();
    } catch (e: any) {
      /* handle error */
      setIsLoading(false);
      setHttpError(e.message);
    }
  }, []);
  if (isLoading) {
    return (
      <section className="max-w-4xl mx-auto">
        <p>...loading</p>
      </section>
    );
  }
  if (httpError) {
    return <p>{httpError}</p>;
  }

  const mealList = meals.map((meal: any) => {
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
