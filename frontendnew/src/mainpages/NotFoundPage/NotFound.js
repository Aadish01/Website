import React from "react";
import classes from './notfound.module.css'
import { Link } from "react-router-dom";

export default function NotFound({linkRoute, linkText, message}){
    return(
        <div className={classes.container}>
            <div className={classes.text}>{message}</div>
            <Link to={linkRoute}  className={classes.container}>
                {
                linkText ?
                <button  className={classes.button}>
                    {linkText}
                </button>
                : <></>
                }
            </Link>
        </div>
    )
}
