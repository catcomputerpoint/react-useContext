import { useCart } from "../utils/useCart";


export default function Cart() {
    const { items,setItems } = useCart();
    return <h2>Total Items in Cart: {items}</h2>;
  }