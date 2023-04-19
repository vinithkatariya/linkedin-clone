import { Avatar } from '@mui/material'
import React from 'react'
import "./Sidebar.css"
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

/**
 * 
 * https://lh3.googleusercontent.com/fife/APg5EOYz7WHw8cN2X9dbeUmz-lZggIaPM0NX77AUVvlpbl1tBnWXEj5wcVhdN-BBHeySTbliXwmpg7YBfOXapqG57QBt2bDoWowQ_Y-716gyAUDvlumDZhNNQCjh8QvnybcY0_jYMpEiKcDbwVYRhXvmojGQt6IMtJsFHXA-4bJ7c7LN79_7B9JlmqKqZDv8pt8u8elHmVQDmStobfDc3CObZzYB0UDjngE8VHyWVGUsueSheIdeEBq3XbZbgyYD44IXrfi0_RBobIS1nzwNdjMf8ZXPBYphoIHPDjDIsB0COSVbsCzdT7hCdfgXj8Ej3ow8-Y9RloCE6rKBK-Hke4iqEKkrRUoc0_NQPzawMjVy9SwDP3a7tyf3QHpRbW9nLGEZZepw0cP4uls7tYejlK8_6zWWxRhZnWuwplSrWdjl21q7_V4NcxYckIEwoO183RDm4pjZYlJTOsdQflYr0ed_GWnLQSyk1ThA_XQIGOHkkQo6EZH0ofxaRm2N2yumgTYpqRdYZAhafRnvoQ0Y6o9IrkBhsPfL5uvAaw1JMzHCtAJUL4mynQHyqaDT-DNzUl8TJB7uCV1cKaoNa-iHoFn9MQwjeox62qnlEGz41H1QDSRP911S6RBVphpAlV-mLk5-e2iidvcTmh0EnzoLYipOCihgVTmlc9P2IQHEjv-oGl-65QU0yk7pm0XXziP7RJhF3nEiaKOzTAGDLPAHoe9rc6Df-x-nyaPXj5aHzo8hFZAS4_UW6qHeG4thL9Z5-vediIW3GX6pJ9eTleE96U3a-j6F1wueaX5UaOLjFzc_6129Tv8h2GDbk_NBgyBp6fw1y_5qlyH7OGdzUZUyDbbhmx_oXA2MIwEqBuk3U6hv0Cqfj2StmO0b8n5Rgenq5tDFLsAlJ9-Ryboe1NaCPgSIYbXTeJMuU0c12vmS5hOwn2fDQqxkVbC7DvXJ_gYlSuDemoD2hsKoxqwCE7EWsvHC-3_cxrLDNc6pTvJWN8bk7E5r5t0WgV1jmqX8oyznzGy7eE5o6onheSXnEOj0hsUmuHKMxHd0TpumDQJQrNAHzWOIloYRJrsxZJdZ_Gg0Pef1yExueUFsr1L6XHLk8GE2X1MXfJGoR0YG9yhbPAZ2R_4AtU2XRcV0f2JfM14LQHGFsQKJiHAY7_uCFohPKBU2zNlsza7BhnQUDQfggeAFDbhnw7rSRxN9IxojZKL0gZRzk7BZYD2nGMUm1ltPCoOSWe8b6M-HEYQaU0NaAchuyKfypifb8rRNPHY_NzE7F6Z8sYEEVuiq86zhbwZTrXVDalGZvMEeR_2qevGC__SqM7CtCKyDAZi7WLnO8VLjIZbd6S_jVL25JgbQadK9MVsf8WyxseU3_PGGs8oICzVPGyd4_RqjHrWNqiR_G4FFctpL7YxlV66i7PNL_Rk-XeLe-vJAFmKw_NK6amgVyiA3YWZPF5KwF86WB3W3R_ylJ6-RkIenlaEx0hMKILpg0w91z2IhjMwX_DwDzH4uGcPUGcTYEHcWfRQKUXjOgv52PQiUTwK2NqmxOHNHmQJIZgy9Q2v1nUSm63QrhDw=w960-h950
 */

function Sidebar() {
  const user  = useSelector(selectUser);
  const sidebarTopIMG = "https://images.unsplash.com/photo-1526675849333-144a81e4670d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3BsYXNoJTIwaW1hZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";
  const img = user?.photoUrl;

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className='sidebar__hash'>#</span>
      <p>{topic}</p>
    </div>
  )

  return (
    <div className='sidebar'>
     <div className="sidebar__top">
      <img src={sidebarTopIMG} alt="" />
      <Avatar className='sidebar__avatar' src={img}>{user?.email[0]}</Avatar>
      <h2>{user.displayName}</h2>
      <h4>{user.email}</h4>
     </div>

     <div className="sidebar__stats">
      <div className="sidebar__stat">
        <p>Who viewed you</p>
        <p className='sidebar__statNumber'>2,545</p>
      </div>
      <div className="sidebar__stat">
      <p>Views on post</p>
        <p className='sidebar__statNumber'>2,527</p>
      </div>
     </div>

     <div className="sidebar__bottom">
       <p>Recent</p>
       {recentItem("reactjs")}
       {recentItem("programming")}
       {recentItem("softwareengg")}
       {recentItem("design")}
       {recentItem("developer")}
     </div>

    </div>
  )
}

export default Sidebar
