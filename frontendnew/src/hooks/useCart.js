import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext(null)

export default function CartProvider({children}) {

    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalCount, setTotalCount] = useState(0);

    useEffect(() => {

        const totalPrice = sum(cartItems.map(item => item.price));
        const totalCount = sum(cartItems.map(item => item.quantity));
        setTotalPrice(totalPrice);
        setTotalCount(totalCount);

    },[cartItems]);

    const removeFromCart = (foodId) => {
        const filteredCartItem = cartItems.filter(item => item.food.FoodId !== foodId);
        setCartItems(filteredCartItem);
    }
    const sum = items => {
        return items.reduce((prevValue, curValue) => prevValue + curValue, 0);
    }
    const addToCart = (food,quantity) => {
        const cartItem = cartItems.find(item => item.food.FoodId === food.FoodId);
        if(cartItem){
            changeQuantity(cartItem,quantity);
        }
        else{
            setCartItems([...cartItems, {food,quantity:quantity, price: food.FoodPrice*quantity}]);
        }
    }
    
    const changeQuantity = (cartItem, newQuantity) => {
        const { food } = cartItem;

        const changedCartItem = {
            ...cartItem, quantity: newQuantity, price: newQuantity*food.FoodPrice,
        }

        setCartItems(
            cartItems.map(item => (item.food.FoodId === food.FoodId ? changedCartItem : item))
        );
    }

    // provide values/states to children

    return <CartContext.Provider value={{cart: {items: cartItems, totalPrice, totalCount}, removeFromCart,changeQuantity, addToCart }}>
        {children}
    </CartContext.Provider>
}

// used to get value from children

export const useCart = () => useContext(CartContext);