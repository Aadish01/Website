import React from "react";
import './footer.css'

import { NavLink, useParams } from "react-router-dom";


export default function Footer(){

    const { name, id } = useParams();

    return (
        <nav className="footercontainerthis">
            <NavLink
                to={'/u/'+name+'/'+id}
                className={({ isActive }) => (isActive ? 'footericonactive' : 'footericon')}
                end >
                <img src="/icons/home.svg" alt="" height='20px' width='20px' />
                <div className="text">Home</div>   
            </NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? 'footericonactive' : 'footericon')}
                to={'/u/'+name+'/'+id+'/Menu/All'} >
                <img src="/icons/menu.svg" alt="" height='20px' width='20px' />
                <div className="text">Menu</div>
            </NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? 'footericonactive' : 'footericon')}
                to={'/u/'+name+'/'+id+'/Search'} >
                <img src="/icons/search.svg" alt="" height='20px' width='20px' />
                <div className="text">Search</div>
            </NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? 'footericonactive' : 'footericon')}
                to={'/u/'+name+'/'+id+'/Cart'} >
                <img src="/icons/cart.svg" alt="" height='20px' width='20px' />
                <div className="text">Cart</div>   
            </NavLink>
        </nav>

    )
}