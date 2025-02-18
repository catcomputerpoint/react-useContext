import { useContext } from "react";
import "./App.css";
import { CartContext } from "./cart-context";

function Cart() {
  const { cartItems } = useContext(CartContext);

  return <h2>Total Items in Cart: {cartItems}</h2>;
}

function ProductList() {
  const products = ["1", "2", "3", "4", "5"];
  return (
    <div>
      {products.map((item, index) => (
        <p key={index}>Product {item}</p>
      ))}
    </div>
  );
}

function App() {
  return (
    <>
      <Cart />
      <ProductList />
    </>
  );
}

export default App;
