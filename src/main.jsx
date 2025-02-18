import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CartContext } from "./cart-context.js";

createRoot(document.getElementById("root")).render(
  <CartContext.Provider value={{count:4}}>
    <App />
  </CartContext.Provider>
);
