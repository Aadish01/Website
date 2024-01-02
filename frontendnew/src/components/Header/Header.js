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
        <div className={classes.a} key={restaurant.RestaurantId}>
            <div className={classes.container}>
            <div className={classes.aa}>
                <div className={classes.aaa} onClick={() => window.open(restaurant.RestaurantAddressLink, "_blank")}> 
                    <img src='/icons/map.svg' alt='' width='30px' height='30px'  className={classes.map} />
                </div>
                <div className={classes.aab}>
                    <div className={classes.a_name}>{restaurant.RestaurantName}</div>
                    <div className={classes.a_address}>{restaurant.RestaurantAddress}</div>
                </div>
                <div className={classes.aac}>
                    {
                    open 
                    ? <img src='/icons/expandless.svg' width='15px' height='15px' className={classes.icon} onClick={toggle} />
                    : <img src='/icons/expandmore.svg' width='15px' height='15px' className={classes.icon} onClick={toggle} />
                    }
                </div>
            </div>
            {
                open && (
                    <>
                    <div className={classes.a_description}>{restaurant.RestaurantDes}</div>
                    <div className="e">
                    <div className="e_left">
                        {/* Socials */}
                        <div className="e_heading">Socials ❤️</div>
                        <div className="e_socials">
                            <div className="e_contact" onClick={() => window.open(restaurant.InstagramProfileLink, "_blank")}> 
                                <img src='/icons/instagram.svg' alt='' className={classes.ic} width='15px' height='15px' /> 
                            </div>
                            <div className="e_contact" onClick={() => window.open(restaurant.FacebookProfileLink, "_blank")}> 
                            <img src='/icons/facebook.svg' alt='' className={classes.ic} width='15px' height='15px'  /> 
                            </div>
                        </div>
                        <div className="e_heading">Contact Us 📞</div>
                        <div className="e_contact">
                            {
                                restaurant.ContactNumber.map(number => <div>{number}</div> )
                            }
                        </div>
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