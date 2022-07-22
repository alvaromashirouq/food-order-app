import { FC, FormEvent, useRef, useState } from 'react';

interface CheckoutProps {
  onCancel: () => void;
  onConfirm: (args: any) => void;
}

const isEmpty = (val: string) => val.trim() === '';
const isNotFiveChars = (val: string) => val.trim().length < 5;

const Checkout: FC<CheckoutProps> = ({ onCancel, onConfirm }) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postal: true
  });

  const nameRef = useRef<HTMLInputElement>(null);
  const streetRef = useRef<HTMLInputElement>(null);
  const postalRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);

  const orderHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nameValue = nameRef.current!.value;
    const streetValue = streetRef.current!.value;
    const postalValue = postalRef.current!.value;
    const cityValue = cityRef.current!.value;

    const nameIsValid = !isEmpty(nameValue);
    const streetIsValid = !isEmpty(streetValue);
    const postalIsValid = !isNotFiveChars(postalValue);
    const cityIsValid = !isEmpty(cityValue);

    setFormInputsValidity({
      name: nameIsValid,
      street: streetIsValid,
      city: cityIsValid,
      postal: postalIsValid
    });

    const formIsValid =
      nameIsValid && streetIsValid && postalIsValid && cityIsValid;
    if (!formIsValid) {
      return;
    }
    onConfirm({
      name: nameValue,
      street: streetValue,
      postal: postalValue,
      city: cityValue
    });
  };

  return (
    <form className="flex flex-col gap-6" onSubmit={orderHandler}>
      <div className="">
        <label htmlFor="name">Name</label>
        <input
          ref={nameRef}
          type="text"
          name="name"
          className="ml-3 border border-gray-100 px-3 py-1"
        />
        {!formInputsValidity.name && <p>enter a valid name</p>}
      </div>
      <div>
        <label htmlFor="street">Street</label>
        <input
          ref={streetRef}
          type="text"
          name={'street'}
          className="ml-3 border border-gray-100 px-3 py-1"
        />
        {!formInputsValidity.street && <p>enter a valid street</p>}
      </div>
      <div>
        <label htmlFor="postal">Postal code</label>
        <input
          ref={postalRef}
          type="text"
          name="postal"
          className="ml-3 border border-gray-100 px-3 py-1"
        />
        {!formInputsValidity.postal && <p>enter a valid postal code</p>}
      </div>
      <div>
        <label htmlFor="city">City</label>
        <input
          ref={cityRef}
          type="text"
          name="city"
          className="ml-3 border border-gray-100 px-3 py-1"
        />
        {!formInputsValidity.city && <p>enter a valid city</p>}
      </div>
      <div className="flex gap-8">
        <button
          type={'button'}
          onClick={onCancel}
          className="border-2 border-red-500 px-3 py-2 rounded-full"
        >
          Cancel
        </button>
        <button type={'submit'}>Confirm</button>
      </div>
    </form>
  );
};
export { Checkout };
