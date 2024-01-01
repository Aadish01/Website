import React from "react";
import classes from './title.module.css'

const Title = ({title}) => {
    return (
        <div className={classes.boxy}>
            <div className={classes.title}>{title}</div>
        </div>
    )
}
export default Title ;