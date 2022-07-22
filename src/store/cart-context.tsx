import { createContext } from 'react';

interface CartContextI {
  items: any[];
  totalAmount: number;
  addItem: (item: any) => void;
  removeItem: (id: string) => void;
  clearCart: VoidFunction;
}
export const CartContext = createContext<CartContextI>({
  items: [],
  totalAmount: 0,
  addItem: (_item: any) => {},
  removeItem: (_item: any) => {},
  clearCart: () => {}
});
