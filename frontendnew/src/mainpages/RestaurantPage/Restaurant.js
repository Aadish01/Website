import React, { useEffect, useState} from "react";
import classes from './restaurant.module.css';
import Navbar from "../Navbar/Navbar";
import { getAllRestaurants } from "../../services/RestaurantService";
import { Link } from "react-router-dom";


function Restaurant() {
    const [RestaurantsAll,SetRestaurants] = useState([]);
    useEffect(() => {
        getAllRestaurants().then(SetRestaurants);
    },[]);
    function getRandomInt() {
        return Math.floor(Math.random()+0.55)+1;
      }
    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <Navbar />
            </div>
            <div className={classes.content}>
                <div className={classes.description}>
                {
                    RestaurantsAll.map(Restaurant => 
                            <div key={Restaurant._id}className={classes.card}>
                                <Link to={'/u/'+Restaurant.restaurantName+'/'+Restaurant._id}>
                                    <div className={classes.img}>
                                        <img src={`/additional/mainrestaurant${getRandomInt()}.jpg`} alt="" width="100%"></img>
                                    </div>
                                </Link>
                                <div className={classes.aa}>
                                    <div className={classes.aaa} onClick={() => window.open(Restaurant.addressLink, "_blank")}> 
                                        <img src="/icons/map.svg" alt="" className={classes.map} width='30px' height='30px' />
                                    </div>
                                    <div className={classes.aab}>
                                        <div className={classes.a_name}>{Restaurant.restaurantName}</div>
                                        <div className={classes.a_address}>{Restaurant.address}</div>
                                    </div>
                                </div>
                                <div className={classes.a_description}>{Restaurant.description}</div>
                                <div className={classes.a_description}>Contact: {Restaurant.contact}
                                </div>
                                <div className={classes.a_description}>Timings : {Restaurant.openingTime} : {Restaurant.closingTime}
                                </div>
                            </div>
                    )
                }
                </div>
                <div className={classes.description}>
                    <img src="/additional/mainhome7.jpg" className={classes.image} alt=""></img>
                    <div className={classes.innercontent}>
                        <div className={classes.title}>Contact Us</div>
                        <div className={classes.contact}>
                            <a href='mailto:aadish.dev01@gmail.com?subject=CALLBACK'>EMAIL</a></div>
                        <div className={classes.contact}>
                            <a href="https://wa.me/+919131535564">WHATSAPP</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Restaurant;