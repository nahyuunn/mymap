import React, { useEffect, useState } from 'react'
import './style.css'
import { LuUsers } from "react-icons/lu";
import { LuUser } from "react-icons/lu";
import { LuMap } from "react-icons/lu";
import { LuBell } from "react-icons/lu";

import { MdOutlineViewTimeline } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useSignInUserStore } from 'stores';
import { USER_PATH } from 'constant';


export default function Navbar() {
  //    function: 네비게이트 함수   //
  const navigate = useNavigate();

  //        state: 로그인 유저 상태       ..
  const { signInUser, setSignInUser, resetSignInUser } = useSignInUserStore();
  //        state: cookie 상태        //
  const [cookies, setCookie] = useCookies();

  //        state: 로그인 상태        //
  const [isSignIn, setSignIn] = useState<boolean>(false);

  //        component: 로그인 또는 마이페이지 버튼 컴포넌트       //
  const SignInMyPageButton = () => {
    //        event handler: 마이페이지 버튼 클릭 이벤트 처리 함수        //
    const onMyPageButtonClickHandler = () => {
      if (!signInUser) return;
      const { email } = signInUser;
      navigate(USER_PATH(email));
    }
  }

  useEffect(() => {
    setSignIn(signInUser !== null);
  }, [signInUser]);

  return (
    <div id='navbar'>
      <div className='navbar-container'>
        <div className='icon logo-icon'></div>
        
        <div className='navbar-menu-box' >
          <Link className='navbar-menu-icon' to={'/search-map'}><LuMap size="40"/></Link>
          <Link className='navbar-menu-icon' to={'/'}><MdOutlineViewTimeline size="40"/></Link>
          <Link className='navbar-menu-icon' to={'/search-user'}><LuUsers size="40"/></Link>
          <Link className='navbar-menu-icon' to={'/notification'}><LuBell size="40"/></Link>
          <Link className='navbar-menu-icon' to={'/mypage'}><LuUser size="40"/></Link>
        </div>
      </div>
    </div>
  )
}




