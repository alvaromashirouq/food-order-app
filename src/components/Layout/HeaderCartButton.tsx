import clsx from 'clsx';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';

export const HeaderCartButton = ({ onClick }: { onClick: VoidFunction }) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const btnClasses = clsx(
    'rounded-full text-white scale-100 ml-auto gap-2 border px-4 py-3 text-2xl border-white flex items-center hover:shadow group hover:bg-orange-300',
    btnIsHighlighted ? ' scale-110 ease-out' : ''
  );

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button onClick={onClick} className={btnClasses}>
      <span className="w-6 h-5 flex place-items-center">
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span
        className="ml-2 bg-orange-800 h-7 px-4 py-1 flex place-items-center group-hover:bg-orange-900 
      rounded-full"
      >
        {cartCtx.items.length}
      </span>
    </button>
  );
};
