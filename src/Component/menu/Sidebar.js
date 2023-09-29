import React, { useState } from 'react';
import './Sidebar.css'
import { NavLink } from 'react-router-dom';

import {FaBars} from "react-icons/fa";
import {AiFillSetting,AiFillInteraction} from "react-icons/ai"
import {MdAdminPanelSettings,MdPayments} from "react-icons/md"


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);

    const menuItem=[
        {
            path:"/",
            name:"Configuration",
            icon:<AiFillInteraction/>
        },
        {
            path:"/billing",
            name:"Billing",
            icon:<MdPayments />
        },
        {
            path:"/admin",
            name:"Admin Panel",
            icon:<MdAdminPanelSettings />
        },
        {
            path : "/setting",
            name : "Setting",
            icon:<AiFillSetting />
        }
        
    ]
    return (
        <div className="cont">
           <div style={{width: isOpen ? "230px" : "60px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">
                        <i>MPI</i>|<sup>Automotive </sup>
                   </h1>
                   <div style={{marginLeft: isOpen ? "190px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}></FaBars> 
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink style={{width: isOpen ? "230px" : "50px"}} to={item.path} key={index} className="link">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;
