import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({children}){
    const persistedCart = JSON.parse(localStorage.getItem("cartItems"));
    const [cartItems,setCartItems] = useState(persistedCart)

    function setMyCart(cartData){
        localStorage.setItem("cartItems", JSON.stringify(cartData));
        setCartItems(cartData)
    }

    return (
        <CartContext.Provider value={{cartItems,setMyCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;