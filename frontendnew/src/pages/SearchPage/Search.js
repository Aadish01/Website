import React, {useEffect, useReducer, useState} from "react";
import classes from './search.module.css';
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";
import SearchComponent from "../../components/Search/SearchComponent";
import { getBestSellers, getByName } from "../../services/MenuService";
import Add from "../../components/Add/Add";
import { getAdds } from "../../services/AddService";
import Thumbnails from "../../components/Thumbnails/Thumbnails";
import BestSeller from "../../components/BestSeller/BestSeller";
import { getRestaurant } from "../../services/RestaurantService";
import Header from "../../components/Header/Header";

const initialState = {
    Adds: [],
    foods: [],
    Restaurant: []
}

const reducer = (state,action) => {
    switch (action.type) {
        case 'FOODS_LOADED':
            return {...state, foods: action.payload}
        case 'RESTAURANT_LOADED':
            return {...state, Restaurant: action.payload}
        case 'ADDS_LOADED':
            return {...state, Adds: action.payload }
        default:
            return state;
    }
}

export const Search = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {foods, Adds, Restaurant} = state ;
    const { name, id, searchTerm } = useParams();
    const [bestSell, change] = useState(true);
    const [flag, setflag] = useState(false);

    
    useEffect( () => {
    try{
        getRestaurant( name,id ).then(Restaurant => dispatch({type:'RESTAURANT_LOADED', payload: Restaurant}));
        setflag(true);
    }
    catch(e){
        console.log("BAD URL"+ e)
    }
    if(flag){
        getAdds( id ).then(Adds => dispatch({type:'ADDS_LOADED', payload: Adds}));
        if(searchTerm) {
            change(false);
            getByName(id,searchTerm).then(foods => dispatch({type:'FOODS_LOADED', payload: foods}));
        }
        else {
            change(true);
            getBestSellers( id ).then(foods => dispatch({type:'FOODS_LOADED', payload: foods}))
        }
    }
    }, [name,id,flag,searchTerm]);

    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <Header restaurant={Restaurant} />
                <SearchComponent />
                {
                    bestSell 
                    ? <BestSeller bestseller={foods} name={name} />
                    : <Thumbnails tag='Result' foods={foods} />
                }
                <Add adds={Adds}/>
            </div>
            <Footer name={name}/>
        </div>
    )
}