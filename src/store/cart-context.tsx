import { createContext, PropsWithChildren } from 'react';

interface CartContextI {
  items: any[];
  totalAmount: number;
  addItem: (item: any) => void;
  removeItem: (id: string) => void;
}
export const CartContext = createContext<CartContextI>({
  items: [],
  totalAmount: 0,
  addItem: (item: any) => {},
  removeItem: (item: any) => {}
});
