import React from "react";
import { NavLink } from "react-router-dom";
import clases from './Sidebar.module.css';
const Sidebar = () => {
    return (
        <nav className={clases.sidebar}>sidebar
            <div className={clases.item} >
                <NavLink to="/profile" className={(navData)=> navData.isActive ? clases.activeL : ''}>Страница</NavLink>
            </div>
            <div className={clases.item}>
                <NavLink to="/dialog" className={(navData) => navData.isActive ? clases.activeL : ''}>Диалоги</NavLink>
                </div>
            <div className={clases.item}><a href="#" >Третий</a></div>
            <div className={clases.item}><a href="#" >Четвертый</a></div>
        </nav>
    );
}
export default Sidebar;