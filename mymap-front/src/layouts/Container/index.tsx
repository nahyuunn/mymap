import React from 'react'
import './style.css'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from 'layouts/Navbar'
import { AUTH_PATH } from 'constant';

export default function Container() {

    //      state: 현재 페이지 path name 상태       //
    const { pathname } = useLocation();


  return (
    <div className='container'>
        {pathname !== AUTH_PATH() && <div><Navbar /></div>}
        <div className='content'>
          <Outlet />
        </div>
    </div>
  )
}
