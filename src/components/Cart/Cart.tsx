import { FC, FormEvent, useContext, useState } from 'react';
import { CartContext } from '../../store/cart-context';
import { Modal } from '../UI/Modal';
import { CartItem } from './CartItem';
import { Checkout } from './Checkout';

interface CartI {
  onClose: VoidFunction;
}

export const Cart: FC<CartI> = ({ onClose: showCartHandler }) => {
  const cartCtx = useContext(CartContext);
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didsubmit, setDidsubmit] = useState(false);

  const hasitems = cartCtx.items.length > 0;

  const totalAmount = `$ ${cartCtx.totalAmount.toFixed(2)}`;

  const addCartItemHandler = (item: any) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const removeCartItemHandler = (id: any) => {
    cartCtx.removeItem(id);
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async (userData: object) => {
    setIsSubmitting(true);
    await fetch(
      'https://react-http-13682-default-rtdb.firebaseio.com//orders.json',
      {
        method: 'POST',
        body: JSON.stringify({ user: userData, orderedItems: cartCtx.items })
      }
    );
    setIsSubmitting(false);
    setDidsubmit(true);
    cartCtx.clearCart();
  };

  const cartItems = (
    <ul className="divide-y ">
      {cartCtx.items.map((item: any) => (
        <CartItem
          key={item.name}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={addCartItemHandler.bind(null, item)}
          onRemove={removeCartItemHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className="flex mt-8 gap-8 justify-end">
      <button
        onClick={showCartHandler}
        className="rounded-full px-6 border-2 py-2 text-orange-700 border-orange-700 hover:bg-orange-50 hover:opacity-90"
      >
        Close
      </button>
      {hasitems && (
        <button
          className="rounded-full px-6 text-white hover:opacity-90 border-2 py-2 bg-orange-700 border-orange-700"
          onClick={orderHandler}
        >
          Order
        </button>
      )}
    </div>
  );
  const cartModalContent = (
    <>
      {cartItems}
      <div className="text-2xl flex gap-8 justify-between">
        <span>total amount:</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onCancel={showCartHandler} onConfirm={submitOrderHandler} />
      )}
      {!isCheckout && modalActions}
    </>
  );

  return (
    <Modal onClose={showCartHandler}>
      {!isSubmitting && !didsubmit && cartModalContent}
      {isSubmitting && <p>sending order data...</p>}
      {!isSubmitting && didsubmit && <p>successfully sent the order</p>}
    </Modal>
  );
};
