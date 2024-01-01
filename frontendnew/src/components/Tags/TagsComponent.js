import React from "react"
import classes from './tags.module.css'
import { Link, useParams  } from "react-router-dom"

const TagsComponent = ({categories}) => {

    const { name , id } = useParams();
    return (
        <div className={classes.container}>
            <div className={classes.tags}>
            <Link to={'/'+name+'/'+id+'/Menu/All'} className={classes.link} >
                <div className={classes.card}>
                    <div className={classes.content}> 
                        All
                    </div>
                </div>
            </Link>
{
    categories.map(category =>
        <Link to={'/'+name+'/'+id+'/Menu/'+category.CategoryName} key={category.CategoryId} className={classes.link} >
            <div className={classes.card}>
                <div className={classes.image}>
                    <img src={'/category/'+category.CategoryImage} alt="something wrong" width="100% " height="100%" />
                </div>
                <div className={classes.content}>
                    {category.CategoryName}
                </div>
            </div>
         </Link>
            )
        }
        </div>  
      </div>
    )
}
export default TagsComponent;
