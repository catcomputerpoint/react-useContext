import { useCart } from "../utils/useCart";


export default function Cart() {
    const { items,setItems } = useCart();
    return <h2 className="title">Total Items in Cart: {items}</h2>;
  }