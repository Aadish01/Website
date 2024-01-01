import React from "react";
import classes from './empty.module.css'
import { NavLink, useParams } from "react-router-dom";

const Empty = ({title, hint}) => {
    const { name , id } = useParams();
    return (
        <div className={classes.newmainContainer}>
            <img src='/additional/notfound.svg' alt=''></img>
            <div className={classes.notfound}>{title}</div>
            <div className={classes.hint}>{hint}</div>
            <NavLink to={'/'+name+'/'+id+'/Menu/All'}>
            <button className={classes.button}onClick={() => {}}>Back To Menu</button>
            </NavLink>
        </div>
    )
}
export default Empty;