import React from "react";
import classes from './notfound.module.css'
import { Link } from "react-router-dom";

export default function NotFound(){
    return(
        <div className={classes.container}>
            <div className={classes.text}>PAGE NOT FOUND</div>
            <img alt="" src="/icons/404.svg" height='250px' width='250px' className={classes.image} />
            <Link to={'/Home'}  className={classes.container}>
                <button  className={classes.button}>
                    Back To Home
                </button>
            </Link>
        </div>
    )
}
