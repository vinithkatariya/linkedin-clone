import React from 'react';
import "./Post.css";
import { Avatar } from '@mui/material';
import { ThumbUpAltOutlined , ShareOutlined , SendOutlined , ChatOutlined } from '@mui/icons-material';
import InputOption from './InputOption';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { forwardRef } from "react";

const Post = forwardRef(({name , description , message , photoUrl} , ref) =>  {

  const user = useSelector(selectUser);

  return (
    <div ref={ref} className='post'>
       <div className="post__header">
        <Avatar src={user?.photoUrl}>{user?.email[0]}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
       </div>
       <div className="post__body">
        <p>{message}</p>
       </div> 
       <div className="post__buttons">
        <InputOption Icon = {ThumbUpAltOutlined} title="Like" color="gray"/>
        <InputOption Icon = {ChatOutlined} title="Comment" color="gray"/>
        <InputOption Icon = {ShareOutlined} title="Share" color="gray"/>
        <InputOption Icon = {SendOutlined} title="Send" color="gray"/>
       </div>
    </div>
  )
})
export default Post
