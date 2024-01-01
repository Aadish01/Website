import React from "react";
import './footer.css'
import { AiOutlineHome,AiOutlineShoppingCart, AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai'
import { NavLink, useParams } from "react-router-dom";


export default function Footer(){

    const { name, id } = useParams();

    return (
        <nav className="footercontainerthis">
            <NavLink
                to={'/'+name+'/'+id}
                className={({ isActive }) => (isActive ? 'footericonactive' : 'footericon')}
                end >
                <AiOutlineHome /> 
                <div className="text">Home</div>   
            </NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? 'footericonactive' : 'footericon')}
                to={'/'+name+'/'+id+'/Menu/All'} >
                <AiOutlineMenu />
                <div className="text">Menu</div>
            </NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? 'footericonactive' : 'footericon')}
                to={'/'+name+'/'+id+'/Search'} >
                <AiOutlineSearch />
                <div className="text">Search</div>
            </NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? 'footericonactive' : 'footericon')}
                to={'/'+name+'/'+id+'/Cart'} >
                <AiOutlineShoppingCart />
                <div className="text">Cart</div>   
            </NavLink>
        </nav>

    )
}