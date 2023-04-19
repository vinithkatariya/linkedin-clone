import React from 'react'
import "./Feed.css"
import { useState, useEffect } from 'react';
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import InputOption from './InputOption';
import Post from './Post';
import firebase from 'firebase';
import { db } from './firebase';
import FlipMove from 'react-flip-move';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Feed() {

  const user = useSelector(selectUser);

  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => (
          {
            id: doc.id,
            data: doc.data()
          }
        ))
      )
    );
  }, [])

  const sendPost = (event) => {
    event.preventDefault();
    db.collection("posts").add({
      name: user?.displayName,
      description: "This is a test",
      message: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }
    ).then(() => {
      console.log("Document succesfully added!");
    }).catch((error) => {
      console.log(error);
    })
    setInput("");
  }

  return (
    <div className='feed'>
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder='Start a post' />
            <button onClick={sendPost} type='submit'>Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#378fe9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#5f9b41" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#c37d16" />
          <InputOption Icon={CalendarViewDayIcon} title="Write Article" color="#e16745" />
        </div>
      </div>
      {/* {Posts} */}
      <FlipMove>
        {posts.map((post) => {
          return <Post key={post.id} name={post.data.name} description={post.data.description} message={post.data.message} />
        })}
      </FlipMove>
    </div>
  )
}
export default Feed;
