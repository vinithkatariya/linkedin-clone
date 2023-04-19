import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function Header() {
  const dispatch = useDispatch();

  const imgURL = "https://yt3.ggpht.com/yti/AHyvSCDVJWlmKsvOpgQtWauFVWMjIAwuL-7447EyKiqMVg=s88-c-k-c0x00ffffff-no-rj-mo";

  // const firstName = user?.displayName.split(" ")[0];


  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  }

  return (
    <div className='header'>
      <div className="header__left">
         <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="" />
        <div className="header__search">
          {/* <SearchIcon/> */}
          <SearchIcon/>
          <input type="text" placeholder='Search' />
        </div>

      </div>

      <div className="header__right">
        <HeaderOption title="Home" Icon={HomeIcon}/>
        <HeaderOption title="My Network" Icon={SupervisorAccountIcon}/>
        <HeaderOption title="Jobs" Icon={BusinessCenterIcon}/>
        <HeaderOption title="Messaging" Icon={ChatIcon}/>
        <HeaderOption title="Notifcations" Icon={NotificationsIcon}/>
        <HeaderOption avatar = {true} title="me"
          onClick={logoutOfApp}
          profile={true}
        />
      </div>
    </div>
  )
}

export default Header
