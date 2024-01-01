import React, { useEffect, useReducer, useState } from "react";
import { getRestaurant } from "../../services/RestaurantService";
import { useParams } from "react-router-dom";
import classes from './home.module.css'
import NotFound from "../../mainpages/NotFoundPage/NotFound";
import Footer from "../Footer/Footer";
import Header from "../../components/Header/Header";
import { getAllCategories, getBestSellers } from "../../services/MenuService";
import { getAdds } from "../../services/AddService";
import TagsHome from "../../components/TagsHome/TagsHome";
import BestSeller from "../../components/BestSeller/BestSeller";
import Add from "../../components/Add/Add";
import SearchComponent from "../../components/Search/SearchComponent";

const initialState = {
    Restaurant: [],
    CategoriesAll: [],
    BestSellers: [],
    Adds: [],
};

// using to initialize foods after checking it

const reducer = (state, action) => {
    switch (action.type) {
        case 'RESTAURANT_LOADED':
            return {...state, Restaurant: action.payload}
        case 'TAGS_LOADED':
            return {...state, CategoriesAll: action.payload }
        case 'BESTSELLER_LOADED':
            return {...state, BestSellers: action.payload }
        case 'ADDS_LOADED':
            return {...state, Adds: action.payload }
        default:
            return state;
    }
}

export const Home = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { Restaurant, CategoriesAll, BestSellers, Adds } = state;
    const { name, id } = useParams();
    const [flag, setflag] = useState(false);

    
    useEffect(() => {
        try{
            getRestaurant( name, id ).then(Restaurant => dispatch({type:'RESTAURANT_LOADED', payload: Restaurant}))
            setflag(true);
        }
        catch(e){
            console.log("BAD URL")
        }
        if(flag){
            getAllCategories( id ).then(CategoriesAll => dispatch({type: 'TAGS_LOADED', payload: CategoriesAll}))

            getAdds( id ).then(Adds => dispatch({type:'ADDS_LOADED', payload: Adds}))
    
            getBestSellers( id ).then(BestSellers => dispatch({type:'BESTSELLER_LOADED', payload: BestSellers}))
        }
    },[name,id,flag]
    );

    return(
        Restaurant ?
        <div className={classes.container}>
            <div className={classes.content}>
                <div className={classes.header}>   
                    <Header restaurant={Restaurant}  />
                    <SearchComponent />
                </div>
                <div className={classes.innerContent}>
                    <TagsHome categories={CategoriesAll} />
                    <Add adds={Adds} />
                    <BestSeller bestseller={BestSellers} />
                    <Add adds={Adds} />
                </div>
            </div>
            <Footer name={name} />
        </div>
        : <NotFound />
    )
}