import { FC, FormEvent, InputHTMLAttributes, useRef, useState } from 'react';
import { Input } from '../../UI/Input';

interface MealItemFormI {
  id: string;
  onAddToCart: (item: number) => void;
}

export const MealItemForm: FC<MealItemFormI> = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const enteredAmount = inputRef.current?.value;
    const enteredAmountNumber =
      enteredAmount !== undefined ? +enteredAmount : 0;
    if (
      enteredAmount?.toString().trim().length === 0 ||
      enteredAmountNumber < 1
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form
      className="flex flex-col items-center gap-4"
      onSubmit={onSubmitHandler}
    >
      <Input
        ref={inputRef}
        label="amount"
        input={{
          className: 'px-3 border border-gray-100 w-20 ml-4',
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          defaultValue: 1
        }}
      />
      <button className="px-6 bg-orange-900 text-white py-2 rounded-full">
        + Add
      </button>
    </form>
  );
};
