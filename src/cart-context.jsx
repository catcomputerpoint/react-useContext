import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [items,setItems] = useState(0);
  return (
    <CartContext.Provider
      value={{ items,setItems }}
    >
      {children}
    </CartContext.Provider>
  );
}
