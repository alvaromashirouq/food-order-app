import { FC, useContext } from 'react';
import { CartContext } from '../../../store/cart-context';
import { MealItemForm } from './MealItemForm';

interface MealItemI {
  id: string;
  name: string;
  description: string;
  price: number | string;
}

export const MealItem: FC<MealItemI> = ({ id, name, description, price }) => {
  const cartCtx = useContext(CartContext);
  const humanPrice = (parseInt(price.toString()) / 100).toLocaleString(
    'en-US',
    {
      currency: 'USD',
      minimumSignificantDigits: 2,
      style: 'currency'
    }
  );

  const onAddToCartHandler = (amount: number) => {
    cartCtx.addItem({
      id,
      name,
      amount,
      price
    });
  };

  return (
    <li className="flex py-4">
      <div className="flex flex-col">
        <h3 className="text-3xl">{name}</h3>
        <div className="text-xl">{description}</div>
        <div className="text-2xl text-orange-500">{humanPrice}</div>
      </div>
      <div className="flex max-w-fit items-center ml-auto">
        <MealItemForm id={id} onAddToCart={onAddToCartHandler} />
      </div>
    </li>
  );
};
