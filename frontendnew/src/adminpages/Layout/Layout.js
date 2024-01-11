import React, { useEffect, useReducer } from "react";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import { useParams } from "react-router-dom";
import { getRestaurantById } from "../../services/RestaurantService";
import classes from './layout.module.css'
import Header from "../../components/Header/Header";

const initialState = {
    Restaurant: []
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
        case 'RESTAURANT_LOADED':
          return {...state, Restaurant: action.payload};
        default:
          return state;
      }
  }

const Layout = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const { Restaurant } = state;
    const {name , id} = useParams();
  
    useEffect(() => {
      try{
          getRestaurantById( id ).then(Restaurant => dispatch({type:'RESTAURANT_LOADED', payload: Restaurant}));
      }
      catch(err){
          console.log("BAD URL")
      }
    },[id]);

    return (
    <div className={classes.container}>
        <div className={classes.Header}>
            <Header restaurant={Restaurant} />
            <AdminNavbar />
        </div>
        <div className={classes.content}>
            {children}
        </div>
      </div>
    );
  };
  
  export default Layout;