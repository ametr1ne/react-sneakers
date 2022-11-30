import {useContext} from "react";
import {AppContext} from "../App";

export const useCart = () => {
    const {cartItems, setCartItems, removeItem} = useContext(AppContext)
    const totalPrice = cartItems.reduce((sum, item) => item.price + sum, 0)

    return {cartItems, setCartItems, removeItem, totalPrice}
}