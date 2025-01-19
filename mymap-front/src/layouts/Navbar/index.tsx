import React from 'react'
import './style.css'
import { LuUsers } from "react-icons/lu";
import { LuUser } from "react-icons/lu";
import { LuMap } from "react-icons/lu";
import { LuBell } from "react-icons/lu";

import { MdOutlineViewTimeline } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';


export default function Navbar() {
  //    function: 네비게이트 함수   //
  const navigate = useNavigate();

  //    event handler: 로고 클릭 이벤트 처리 함수   //
  //const onLogoClickHandler


  return (
    <div id='navbar'>
      <div className='navbar-container'>
        <div className='icon logo-icon'></div>
        
        <div className='navbar-menu-box' >
          <Link className='navbar-menu-icon' to={'/search-map'}><LuMap size="40"/></Link>
          <Link className='navbar-menu-icon' to={'/'}><MdOutlineViewTimeline size="40"/></Link>
          <Link className='navbar-menu-icon' to={'/search-user'}><LuUsers size="40"/></Link>
          <Link className='navbar-menu-icon' to={'/notification'}><LuBell size="40"/></Link>
          <Link className='navbar-menu-icon' to={'/user'}><LuUser size="40"/></Link>
        </div>
        
      </div>
    </div>

  )
}
