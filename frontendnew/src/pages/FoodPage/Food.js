import React, { useEffect, useState, useReducer} from "react";
import classes from './food.module.css';
import Footer from "../Footer/Footer";
import { useNavigate, useParams } from "react-router-dom";
import Item from "../../components/Items/Item";
import Header from "../../components/Header/Header";
import { getRestaurantById } from "../../services/RestaurantService";
import NotFound from "../../mainpages/NotFoundPage/NotFound";
import { getByFoodId } from "../../services/MenuService";
const initialState = {
    Restaurant: [],
    Food: [],

}

const reducer = (state, action) => {
    switch (action.type) {
        case 'RESTAURANT_LOADED':
            return {...state, Restaurant: action.payload}
            case 'FOOD_LOADED':
                return {...state, Food: action.payload}
        default:
            return state;
        }
    }

const Food = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { Restaurant, Food } = state;
    const { name, id , foodid } = useParams();
    const [flag, setFlag] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        try{
            getRestaurantById( id ).then(Restaurant => dispatch({type:'RESTAURANT_LOADED', payload: Restaurant}));
            setFlag(true);
        }
        catch(err){
            console.log('BAD URL');
        }
        if(flag){
            getByFoodId(id , foodid).then(Food => dispatch({type:'FOOD_LOADED', payload: Food}));
        }
    },[name, id, foodid, flag]
    );

    return (
        Restaurant ?
            <div className={classes.container}>
                <Header restaurant={Restaurant}  />
                <div className={classes.goback} onClick={() => navigate(-1)} >
                    <img src="/icons/arrowback.svg" alt="" height='20px' width='20px' />
                    <span> Back</span>
                </div>
                <div className={classes.content}>
                    <Item Food={Food} />
                </div>
                <Footer name={name} />
            </div>
        : <NotFound linkRoute={'/'+name+'/'+id+'/Menu/All'} linkText="Go back to Menu" message="NOT FOUND" />
    )
}
export default Food ;