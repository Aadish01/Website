import React from "react"
import classes from './tagshome.module.css'
import { Link, useParams  } from "react-router-dom"

const TagsHome = ({categories}) => {
    const { name,id } = useParams();

    return (
        <div className={classes.container}>
            <div className={classes.boxy}>
            <div className={classes.title}>
                <span className={classes.titleone}>
                    What are you Craving for ?
                </span>
                <Link to={'/'+name+'/'+id+'/Menu/All'}>
                    <button className={classes.button}> 
                        Open Menu
                    </button>
                </Link>
            </div>
            <div className={classes.tags}>
            {
                categories.map(category =>
                <Link to={'/'+name+'/'+id+'/Menu/'+category.CategoryName} key={category.CategoryId} className={classes.link} >
                    <div className={classes.card}>
                        <div className={classes.image}>
                            <img src={'/category/'+category.CategoryImage} alt={category.CategoryName} width="100% " height="100%" />
                        </div>
                        <div className={classes.content}>
                            {category.CategoryName}
                        </div>
                    </div>
                </Link>
            )}
            </div>  
            </div>
      </div>
    )
}

export default TagsHome;