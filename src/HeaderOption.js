import { Avatar } from '@mui/material'
import React from 'react'
import "./HeaderOption.css"
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

function HeaderOption({avatar , Icon , title , onClick , profile}) {

  const user = useSelector(selectUser);
  const firstName = user?.displayName.split(" ")[0];

  return (
    <div className='headerOption' onClick = {onClick}>
      {Icon && <Icon className= "headerOption__icon" />}
      {avatar && 
        <Avatar className='headerOption__icon' src={user?.photoUrl}>{user?.email[0]}</Avatar>
      }
      <h3 className='headerOption__title'>{!profile? title : firstName}</h3>
    </div>
  )
}

export default HeaderOption
