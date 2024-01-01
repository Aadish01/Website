import { Router } from "express";
import { sample_adds } from "../data/Adds.js";

const router = Router(); 

router.get('/adds/:RestaurantId', (req, res) => {
    const { RestaurantId } = req.params ;
    const adds = sample_adds.find(Element => Element.RestaurantId === RestaurantId);
    res.send(adds.Adds);
});
export default router;