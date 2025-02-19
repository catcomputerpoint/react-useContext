import { createContext } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  return (
    <CartContext.Provider
      value={{ cartItems: 4, logger: () => console.log("Carting") }}
    >
      {children}
    </CartContext.Provider>
  );
}
