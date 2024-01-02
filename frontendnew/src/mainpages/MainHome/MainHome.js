import React from "react";
import classes from './mainhome.module.css'
import Navbar from "../Navbar/Navbar";
import { MdOutlineArrowDropDown } from "react-icons/md";

export default function MainHome(){
    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <Navbar />
            </div>
            <div className={classes.content}>
                <div className={classes.description}>
                    <img src="/additional/mainhome1.jpg" alt="" className={classes.image}></img>
                    <div className={classes.innercontent}>
                        <div className={classes.title}>Welcome to Tomato</div>
                        <div className={classes.paragraph}>We understand that in today's fast-paced world, convenience is key. That's why we've designed a seamless and efficient solution to satisfy your cravings without the hassle.</div>
                    </div>
                </div>
                <div className={classes.carddescription}>
                    <img src="/additional/mainhome2.jpg" alt="" className={classes.cardimage}></img>
                    <div className={classes.innercontent}>
                        <div className={classes.paragraph}>Simply scan the QR code</div>
                    </div>
                    <MdOutlineArrowDropDown className={classes.icon} />
                </div>
                <div className={classes.carddescription}>
                    <img src="/additional/mainhome3.jpg" alt="" className={classes.cardimage}></img>
                    <div className={classes.innercontent}>
                        <div className={classes.paragraph}>Browse the Menu</div>
                    </div>
                    <MdOutlineArrowDropDown className={classes.icon}  />
                </div>
                <div className={classes.carddescription}>
                    <img src="/additional/mainhome4.jpg" alt="" className={classes.cardimage}></img>
                    <div className={classes.innercontent}>
                        <div className={classes.paragraph}>Secure Payments</div>
                    </div>
                    <MdOutlineArrowDropDown className={classes.icon}  />
                </div>
                <div className={classes.carddescription}>
                    <img src="/additional/mainhome5.jpg" alt="" className={classes.cardimage}></img>
                    <div className={classes.innercontent}>
                        <div className={classes.paragraph}>Enjoy your meal</div>
                    </div>
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