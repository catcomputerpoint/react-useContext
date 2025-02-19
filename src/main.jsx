import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CartContext } from "./cart-context.js";

createRoot(document.getElementById("root")).render(
  <CartContext.Provider value={{cartItems:4, logger:()=>console.log("Carting")}}>
    <App />
  </CartContext.Provider>
);
