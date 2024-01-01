import { Router } from "express";
import { sample_foods } from "../data/Food.js";
import { sample_category } from "../data/Category.js";
import { sample_avaliablecategory } from "../data/CategoryAvaliable.js";

const router = Router(); 

router.get('/foods/:RestaurantId', (req,res) => {
    const { RestaurantId } = req.params ;
    const foods = sample_foods.filter(food => food.RestaurantId === RestaurantId)
    res.send(foods)
});
router.get('/category/:RestaurantId', (req,res) => {
    const { RestaurantId } = req.params ;
    const categoryforRestaurant = sample_category.find(category => category.RestaurantId === RestaurantId);
    const allcategories = [];
    categoryforRestaurant.Categories.forEach(catid => 
        allcategories.push(sample_avaliablecategory.find(category => category.CategoryId === catid))
    )
    res.send(allcategories)
});

router.get('/bestsellers/:RestaurantId', (req, res) => {
    const { RestaurantId } = req.params ;
    const bestsellers = sample_foods.filter(food => food.RestaurantId === RestaurantId && food.IsBestseller === true)
    res.send(bestsellers);
})
router.get('/search/:RestaurantId/:searchTerm', (req, res) => {
    const { RestaurantId, searchTerm } = req.params ;
    const result = sample_foods.filter(food => food.RestaurantId === RestaurantId && food.FoodName.toLowerCase().includes(searchTerm.toLowerCase()))
    res.send(result)
})
router.get('/food/:RestaurantId/:foodid', (req, res) => {
    const { RestaurantId, foodid } = req.params ;
    const result = sample_foods.find(food => food.RestaurantId === RestaurantId && food.FoodId === foodid);
    res.send(result)
})
router.get('/foodsbyCategory/:RestaurantId/:categoryName', (req, res) => {
    const { RestaurantId, categoryName } = req.params ;
    const result = sample_foods.filter(food => food.RestaurantId === RestaurantId && food.FoodCategory === categoryName)
    res.send(result)
})

export default router;