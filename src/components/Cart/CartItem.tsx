import { FC } from 'react';

interface CartItemProps {
  id?: string;
  name: string;
  amount: number;
  price: number;
  onAdd: (amount: unknown) => void;
  onRemove: (id: unknown) => void;
}

export const CartItem: FC<CartItemProps> = (props) => {
  return (
    <li className="flex justify-end items-center">
      <div className="w-full ">
        <span>{props.name}</span>
        <span className="ml-8">{props.amount}</span>
      </div>
      <div className="flex gap-4">
        <button
          className="border-2 border-orange-900 py-1 px-4 rounded"
          type="button"
          onClick={props.onRemove}
        >
          -
        </button>
        <button
          className="border-2 border-orange-900 py-1 px-4 rounded"
          type="button"
          onClick={props.onAdd}
        >
          +
        </button>
      </div>
    </li>
  );
};
