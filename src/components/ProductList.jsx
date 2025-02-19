import { useCart } from "../utils/useCart";

export default function ProductList() {
  const { setItems } = useCart();
  const products = ["1", "2", "3", "4", "5"];
  return (
    <div>
      {products.map((item, index) => (
        <div className="product">
          <p key={index}>Product {item}</p>
          <button onClick={()=>setItems(item=>item+1)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
}
