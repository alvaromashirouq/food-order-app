import { FC, useContext } from 'react';
import { CartContext } from '../../store/cart-context';
import { Modal } from '../UI/Modal';
import { CartItem } from './CartItem';

interface CartI {
  onClose: VoidFunction;
}

export const Cart: FC<CartI> = ({ onClose: showCartHandler }) => {
  const cartCtx = useContext(CartContext);

  const hasitems = cartCtx.items.length > 0;

  const totalAmount = `$ ${(cartCtx.totalAmount / 100).toFixed(2)}`;

  const addCartItemHandler = (item: any) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const removeCartItemHandler = (id: any) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className="divide-y ">
      {cartCtx.items.map((item: any) => (
        <CartItem
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={addCartItemHandler.bind(null, item)}
          onRemove={removeCartItemHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className="text-2xl flex gap-8 justify-between">
        <span>total amount:</span>
        <span>{totalAmount}</span>
      </div>
      <div className="flex mt-8 gap-8 justify-end">
        <button
          onClick={showCartHandler}
          className="rounded-full px-6 border-2 py-2 text-orange-700 border-orange-700 hover:bg-orange-50 hover:opacity-90"
        >
          Close
        </button>
        {hasitems && (
          <button className="rounded-full px-6 text-white hover:opacity-90 border-2 py-2 bg-orange-700 border-orange-700">
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};
