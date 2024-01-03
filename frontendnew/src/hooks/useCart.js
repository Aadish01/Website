import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext(null);
const CART_KEY = 'cart';
const EMPTY_CART = {
    items: [],
    totalPrice:0,
    totalCount:0,
}
const isJson = (str) => {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

export default function CartProvider({children}) {

    const initCart = getCartFromLocalStorage();

    const [cartItems, setCartItems] = useState(initCart.items);
    const [totalPrice, setTotalPrice] = useState(initCart.totalPrice);
    const [totalCount, setTotalCount] = useState(initCart.totalCount);

    useEffect(() => {

        const totalPrice = sum(cartItems.map(item => item.price));
        const totalCount = sum(cartItems.map(item => item.quantity));
        setTotalPrice(totalPrice);
        setTotalCount(totalCount);

        localStorage.setItem(CART_KEY, JSON.stringify( {items : cartItems , totalPrice, totalCount} ));

    },[cartItems]);

    function getCartFromLocalStorage(){
        const storedCart = localStorage.getItem(CART_KEY);
        if(storedCart && isJson(storedCart)){
            return JSON.parse(storedCart)
        }
        else{
            return EMPTY_CART ;
        }
    }

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