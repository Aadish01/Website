import React, { useEffect, useReducer} from "react";
import classes from './cart.module.css'
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { Link } from "react-router-dom";
import Price from "../../components/Price/Price";
import { MdDeleteOutline } from "react-icons/md";
import Title from "../../components/Title/Title";
import { getRestaurant } from "../../services/RestaurantService";
import Header from "../../components/Header/Header";
import NotFound from "../../mainpages/NotFoundPage/NotFound";
import Empty from "../../components/Empty/Empty";
import toast from "react-hot-toast";

const initialState = {
    Restaurant: [],
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'RESTAURANT_LOADED':
            return {...state, Restaurant: action.payload}
        default:
            return state;
        }
    }

export function Cart (){
    const [state, dispatch] = useReducer(reducer, initialState);
    const { Restaurant } = state;
    const { name, id } = useParams();
    const {cart, removeFromCart, changeQuantity} = useCart();
    
    useEffect(() => {
        getRestaurant( name, id ).then(Restaurant => dispatch({type:'RESTAURANT_LOADED', payload: Restaurant}))
    },[name,id]
    )
    const fun = (id) => {
        removeFromCart(id);
        toast.error('Item Removed!',{style:{padding:"5px", fontSize:'16px'}});
    }

    return(
        Restaurant ? 
        <div className={classes.container}>
            <div className={classes.box}>
            <Header restaurant={Restaurant} />
            {cart.items.length >0 ?
            <div className={classes.boxy}>
            <div className={classes.content}>
                <Title title={'Your Cart'} />
                    <div className={classes.list}>
                    {
                        cart.items.map(item =>
                        <div key={item.food.FoodId} className={classes.innercontainer}>
        
                            <Link to={'/'+name+'/'+id+'/Foods/'+item.food.FoodId} className={classes.imagebox}>
                                <img src={'/foods/'+item.food.FoodImageLink} alt='' className={classes.image} />
                             </Link>
        
                            <div className={classes.data}>
                                <div className={classes.anothercontainer}>
                                    <div className={classes.itemname}>
                                        {item.food.FoodName}
                                    </div>
                                    <div className={classes.remove} >
                                        <MdDeleteOutline onClick={() =>fun(item.food.FoodId)} />
                                    </div>
                                </div>
                                <div className={classes.anothercontainer}>
                                    <div className={classes.itemprice}>
                                        <Price price={item.price} />
                                    </div>

                                    <div className={classes.ctrlbuttons}>
                                        <button onClick={() => {
                                            item.quantity>1 ? changeQuantity(item, Number(item.quantity)-1)
                                            : fun(item.food.FoodId)  }}>-</button>
                                        <div className={classes.itemquantity}>
                                        {item.quantity}</div>
                                        
                                        <button onClick={() => changeQuantity(item, Number(item.quantity)+1)}>+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    }
                    </div>
                <Title title={'Your Bill'} />
                <div className={classes.checkoutbox}>
                <div className={classes.checkout}>
                    <div className={classes.innermostcontainer}>
                            <div className={classes.name}>Total Items ({cart.totalCount}) </div>
                            <div className={classes.value}><Price price={cart.totalPrice} /></div>
                    </div>
                    {/* TODO */}
                    <div className={classes.innermostcontainer}>
                            <div className={classes.name}>Tax & Charges</div>
                            <div className={classes.value}><Price price={0} /></div>
                    </div>
                    <div className={classes.innermostcontainer}>
                            <div className={classes.totalname}>Total Price</div>
                            <div className={classes.totalvalue}><Price price={cart.totalPrice} /></div>
                    </div>

                </div>
                </div>
            </div>
            </div>
            : <Empty title="Cart Empty" hint="Hint: Add foods to Cart" />
        }
            </div>
            <div className={classes.footer}>
            {cart.items.length >0 &&
            <div className={classes.checkut}>
                <Link to='/Checkout'>
                        <button className={classes.checkoutbutton}>
                            Proceed to Checkout 
                        </button>
                </Link>
            </div>
            }
            <Footer name={name}/>
            </div>
        </div>
        : <NotFound />
    )
}   


