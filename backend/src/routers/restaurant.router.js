import { Router } from "express";
import { sample_restaurant } from "../data/Restaurant.js";

const router = Router(); 

router.get('/allrestaurants/',(req,res) => {
    let props = [];
    sample_restaurant.forEach(restaurant => {
        const picked = (({RestaurantId,RestaurantName,RestaurantAddress,RestaurantImage,RestaurantAddressLink,RestaurantDes,ContactNumber,OpeningTime,ClosingTime}) => ({RestaurantId,RestaurantName,RestaurantAddress,RestaurantImage,RestaurantAddressLink,RestaurantDes,ContactNumber,OpeningTime,ClosingTime}))(restaurant);
        props.push(picked);
    })
    res.send(props);
})

router.get('/restaurant/:RestaurantName/:id', (req,res) => {
    const { RestaurantName, id } = req.params ;
    const restaurant =sample_restaurant.find(restaurant =>
        restaurant.RestaurantName === RestaurantName && restaurant.RestaurantId === id) 
    res.send(restaurant)
})
export default router;