import { useCart } from "../utils/useCart";
import { Product } from "./Product";

export default function ProductList() {
  const {items} = useCart();
  const products = [
    {
      id: 101,
      name: "iPhone",
      price: 70000,
    },
    {
      id: 102,
      name: "Airpods",
      price: 20000,
    },
    {
      id: 103,
      name: "HP Laptop",
      price: 170000,
    },
    {
      id: 104,
      name: "USB Drive",
      price: 300,
    },
    {
      id: 105,
      name: "S-Pen",
      price: 1000,
    },
  ];
  return (
    <div>
      <h2>Cart: {items.length}</h2>
      {products.map((item) => {
        return <Product key={item.id} item={item} />;
      })}
    </div>
  );
}
