import React, { useEffect, useReducer, useState } from "react";
import classes from './menu.module.css'
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";
import { getAllCategories} from "../../services/MenuService";
import TagsComponent from "../../components/Tags/TagsComponent";
import { getRestaurant } from "../../services/RestaurantService";
import Header from "../../components/Header/Header";
import { getAllByTag } from "../../services/MenuService";
import Thumbnails from "../../components/Thumbnails/Thumbnails";
import NotFound from "../../mainpages/NotFoundPage/NotFound";
import SearchComponent from "../../components/Search/SearchComponent";

const initialState = {
    TagsAll: [],
    MenuAll: [],
    Restaurant: []
    
};

// using to initialize foods after checking it

const reducer = (state, action) => {
    switch (action.type) {
        case 'RESTAURANT_LOADED':
            return {...state, Restaurant: action.payload}
        case 'TAGS_LOADED':
            return {...state, TagsAll: action.payload }
        case 'MENU_LOADED':
            return {...state, MenuAll: action.payload}
        default:
            return state;
    }
}

export default function Menu (){
    const [state, dispatch] = useReducer(reducer, initialState);
    const { TagsAll, Restaurant,MenuAll } = state;

    const { name, id , tag } = useParams();
    const [flag, setflag] = useState(false);

    const [veg,setVeg] = useState(false);
    const [nonveg,setNonVeg] = useState(false);
    const [all,setAll] = useState(true);

    const filterfoods = MenuAll.filter(item => 
        all ? (item) : veg ? (item.IsVeg === true) : nonveg ? (item.IsVeg === false) : (item)
        );

        
    useEffect(() => {
        try{
            getRestaurant( name, id ).then(Restaurant => dispatch({type:'RESTAURANT_LOADED', payload: Restaurant}));
            setflag(true);
        }
        catch(err){
            console.log("BAD URL")
        }
        if(flag){
            getAllCategories( id ).then(TagsAll => dispatch({type: 'TAGS_LOADED', payload: TagsAll}));
            getAllByTag( id, tag ).then(MenuAll => dispatch({type:'MENU_LOADED', payload: MenuAll}));
        }
    },[name,flag,id,tag]);
    
    return (
        Restaurant ?
        <div className={classes.maincontainer}>
            <div className={classes.content}>
                <Header restaurant={Restaurant} />
                <SearchComponent />
                <div className={classes.header}>
                    <TagsComponent categories={TagsAll} />
                    <div className={classes.boxy}>
                    <div className={classes.cat}>
            {
                <>
                <label key="All">
                    <input
                        value={true}
                        type="checkbox"
                        checked={all}
                        onChange={() => {
                            setAll(true);
                            setVeg(false);
                            setNonVeg(false);
                        }}
                    />
                    <span>All</span>
                </label>
                <label key="Veg">
                    <input
                        value={true}
                        type="checkbox"
                        checked={veg}
                        onChange={() =>{
                            setAll(false);
                            setVeg(true);
                            setNonVeg(false);
                        }
                    }
                    />
                    <span>Veg</span>
                </label>
                <label key="Non-Veg">
                    <input
                        value={true}
                        type="checkbox"
                        checked={nonveg}
                        onChange={() =>
                            {
                                setAll(false);
                                setNonVeg(true);
                                setVeg(false); 
                            }
                    }
                    />
                    <span>NonVeg</span>
                </label>
                </>
            }
            </div>
        </div>
                </div>
                <Thumbnails foods={filterfoods} title={tag} /> 
            </div>
            <Footer />
        </div>
        : <NotFound />
    )
}


