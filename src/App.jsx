import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import "./App.css";
import { useState } from "react";

function App() {
  const [route,setRoute] = useState("products");
  return (
    <>
      <button onClick={()=>setRoute("products")}>Products</button>
      <button onClick={()=>setRoute("cart")}>Cart</button>
      
      {route==="cart"&& <Cart />}
      {route==="products"&&<ProductList />}
      
    </>
  );
}

export default App;
