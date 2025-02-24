import { useCart } from "../utils/useCart";
import { Product } from "./Product";


export default function Cart() {
    const { items,setItems } = useCart();
    return (
      <>
    <h2 className="title">Total Items in Cart: {items.length}</h2>
    <div>
      {items.map(obj=>{
        return <Product key={obj.id} item={obj}/>
      })}
    </div>
      </>
    );
  }