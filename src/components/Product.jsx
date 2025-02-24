import { useCart } from "../utils/useCart"

export function Product({item}){
    const {items,setItems} = useCart();

    return (
        <div className="product">
          <p>{item.name}</p>
          <p>{item.price}</p>
          <button onClick={()=>setItems(items=>[...items,item])}>Add to cart</button>
        </div>
    )
}