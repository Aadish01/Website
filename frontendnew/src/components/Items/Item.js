import './item.css'
import { useState} from "react"
import { AiFillStar } from 'react-icons/ai'
import { FaClock } from 'react-icons/fa'
import Price from '../Price/Price'
import { useCart } from '../../hooks/useCart'
import toast from 'react-hot-toast'

const Item = ({Food}) => {

    const{ addToCart } = useCart();   
    const [counter, setCounter] = useState(1);

    const increase = () => setCounter(counter+1);
    const decrease = () => setCounter(counter-1);

    return(
        <div className="container">
            <div className="imageBox">
                <img className="image" src={'/foods/'+Food.FoodImageLink} alt={Food.FoodName}/>
            </div>
            <div className="ib">
                <div className="ib_NameDes">
                    <div className="ib_name">
                    <img className="ib_image" src={Food.IsVeg ? '/additional/veg.png' : '/additional/nonveg.png'} alt='' width='14px' height='14px'></img>
                        {Food.FoodName}
                    </div>
                    <div className="ib_des">
                        {Food.FoodDescription}
                    </div>
                    <div className="more"> 
                        <div className="rating">
                            <div><AiFillStar /> {Food.FoodRating}</div>
                        </div>
                        <div className="cookTime">
                            <div><FaClock /> {Food.CookTime} min.</div>
                        </div>
                    </div>
                    <div className="ib_counter">
                        <div className="ib_title">Select Quantity</div>
                        <div className="ib_btn__container">
                            <button className="ib_control__btn" onClick={decrease}>-</button>
                            <span className="ib_counter__output">{counter}</span>
                            <button className="ib_control__btn" onClick={increase}>+</button>
                        </div>
                    </div>
                    <div className="ic_select">
                        <Price price={Food.FoodPrice} /> ( {Food.FoodType} )
                    </div>
                </div>
                <button className="Order" onClick={() => {addToCart(Food,counter);
                    toast.success('Successfully Added!',{style:{padding:"5px", fontSize:'16px'}}) }}>
                    Order
                </button>
            </div>
        </div>
    );
}
export default Item;