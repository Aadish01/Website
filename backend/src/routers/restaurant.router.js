import { Router } from "express";
import { sample_restaurant } from "../data/Restaurant.js";

const router = Router(); 

router.get('/restaurant/:RestaurantName/:id', (req,res) => {
    const { RestaurantName, id } = req.params ;
    const restaurant =sample_restaurant.find(restaurant =>
        restaurant.RestaurantName === RestaurantName && restaurant.RestaurantId === id) 
    res.send(restaurant)
})
export default router;