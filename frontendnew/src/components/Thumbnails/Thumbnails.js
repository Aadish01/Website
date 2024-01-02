import classes from './thumbnails.module.css'
import Price from "../Price/Price";
import { AiFillStar } from 'react-icons/ai'
import { FaClock } from 'react-icons/fa'
import { Link, useParams } from "react-router-dom";
import Empty from '../Empty/Empty';

const Thumbnails = ({foods, title}) => {

    const { name, id } = useParams();

    return (
        foods.length  ?
        <div className={classes.mainContainer}>
        <div className={classes.boxy}>
        <div className={classes.title}>{title}</div>
        <div className= {classes.list}>
            {
                foods.map(food =>(
                    <Link to= {'/'+name+'/'+id+'/Foods/'+food.FoodId} key={food.FoodId} className={classes.container}>
                        <div className={classes.boxx}>
                            <div className={classes.imagebox}>
                            <img className={classes.image} src={'/foods/'+food.FoodImageLink} alt='' loading='lazy' />
                            </div>
                            </div>
                                <div className={classes.content}>
                                    <div className={classes.name}>
                                        <span><img src={food.IsVeg ? '/additional/veg.png' : '/additional/nonveg.png'} width='14px' height='14px' alt=''></img> </span>
                                    {food.FoodType === 'Regular'?food.FoodName : food.FoodName +' ('+ food.FoodType+')'}</div>
                                    {/* <div className={classes.des}>{food.FoodDescription}</div> */}
                                    <div className={classes.more}> 
                                    <div className={classes.rating}>
                                        <div><AiFillStar /> {food.FoodRating}</div>
                                    </div>
                                    <div className={classes.cookTime}>
                                        <div><FaClock /> {food.CookTime}</div>
                                    </div>
                            </div>
                            <div className={classes.new}>
                                <div className={classes.priceContainer}>
                                    <span className={classes.startingat}>At just  </span>
                                    <Price price={food.FoodPrice} />
                                </div>   
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
        </div>
        </div>
        : <Empty title={'Sorry Not Found'} hint={'Hint : Try Refreshing'}/>
    )
}
export default Thumbnails;