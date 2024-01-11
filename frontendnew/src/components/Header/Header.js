import React, { useState } from 'react';
import classes from './header.module.css'
import { useNavigate } from "react-router-dom";
import './Header.css'

const Header= ({restaurant}) => {

    const [open, setOPen] = useState(false);
    let navigate = useNavigate();

    const toggle = () => {
        setOPen(!open);
    }

    return (
        <div className={classes.a} key={restaurant._id}>
            <div className={classes.container}>
            <div className={classes.aa}>
                <div className={classes.aaa} onClick={() => window.open(restaurant.addressLink, "_blank")}> 
                    <img src='/icons/map.svg' alt='' width='30px' height='30px'  className={classes.map} />
                </div>
                <div className={classes.aab}>
                    <div className={classes.a_name}>{restaurant.restaurantName}</div>
                    <div className={classes.a_address}>{restaurant.address}</div>
                    <div className={classes.a_timing}>Open between : {restaurant.openingTime} to {restaurant.closingTime}</div>
                </div>
                <div className={classes.aac}>
                    {
                    open 
                    ? <img src='/icons/expandless.svg' width='15px' height='15px' alt="" onClick={toggle} />
                    : <img src='/icons/expandmore.svg' width='15px' height='15px' alt='' onClick={toggle} />
                    }
                </div>
            </div>
            {
                open && (
                    <>
                    <div className={classes.a_description}>{restaurant.description}</div>

                    <div className="e">
                    <div className="e_left">
                        {/* Socials */}
                        <div className="e_heading">Socials ❤️</div>
                        <div className="e_socials">
                            <div className="e_contact" onClick={() => window.open(restaurant.instaLink, "_blank")}> 
                                <img src='/icons/instagram.svg' alt='' className={classes.ic} width='15px' height='15px' /> 
                            </div>
                            <div className="e_contact" onClick={() => window.open(restaurant.fbLink, "_blank")}> 
                            <img src='/icons/facebook.svg' alt='' className={classes.ic} width='20px' height='20px'  /> 
                            </div>
                        </div>
                        <div className="e_heading">Contact Us 📞</div>
                        <div className="e_contact">{restaurant.contact}</div>
                    </div>
                    <div className="e_right">
                        <div className='e_heading'>Powered By :</div>
                        <div className="e_mainSite" onClick={() => {navigate('/')}}>
                            <img className='e_image' alt="" src={'/additional/tomato.webp'} width="70px" height="70px"></img>
                        </div>
                    </div>
                </div>
                </>
                )
            }
            </div>
        </div>
    );
}
export default Header;