import { useContext } from "react";
import CartContext from "../contexts/CartContext";

export default function useCart() {
  return useContext(CartContext);
}