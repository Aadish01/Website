import React from "react";
import classes from './restaurant.module.css'
import Navbar from "../Navbar/Navbar";

function Restaurant() {
    
    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <Navbar />
            </div>
            <div className={classes.content}>
                <div>Filters</div>
                <div> home, restaurant, JOIN US - sideBar</div>
                <div>Button to find near your location</div>
                <div>List of Restaurants with "Menu" LinK but no "Order" links</div>
            </div>
        </div>
    )
}
export default Restaurant;