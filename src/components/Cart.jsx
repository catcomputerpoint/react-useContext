import { CartContext } from "../cart-context";
import { useContext } from "react";

export default function Cart() {
    const { cartItems,logger } = useContext(CartContext);
    logger();
    return <h2>Total Items in Cart: {cartItems}</h2>;
  }