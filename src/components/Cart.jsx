import { useCart } from "../utils/useCart";


export default function Cart() {
    const { cartItems,logger } = useCart();
    logger();
    return <h2>Total Items in Cart: {cartItems}</h2>;
  }