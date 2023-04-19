import React, { useState } from 'react'
import "./Login.css"
import { auth } from './firebase';
import { useDispatch , useSelector } from 'react-redux';
import { login, selectUser } from './features/userSlice';


function Login() {
  
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [name , setName] = useState("");
  const [profilePic , setProfilePic] = useState("");
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const linkedInPhotoURL = "https://www.vectorlogo.zone/logos/linkedin/linkedin-ar21.svg";

  const register = () => {
    if(!name) {
      return alert("Please enter a full name!");
    }

    auth.createUserWithEmailAndPassword(email , password)
     .then((userAuth) => {
      userAuth.user.updateProfile({
        displayName: name,
        photoURL: profilePic, 
      }).then(() => {
        dispatch(login({
         email: userAuth.user.email,
         uid: userAuth.user.uid,
         displayName: name,
         photoUrl: profilePic,
        }));
      })
     }).catch((error) => {
      alert(error);
     })
    

  };

  const loginToApp = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email , password)
    .then((userAuth) => {
      dispatch(login({
        email: userAuth.user.email,
        uid: userAuth.user.uid,
        displayName: userAuth.user.displayName,
        photoUrl: userAuth.user.photoURL,
      }));
    })
    .then(() => {
      console.log(user);
    })
    .catch((e) => alert(e))
  };

  return (
    <div className='login'>
      <img src={linkedInPhotoURL} alt="" />
      <form >
        <input 
        type="text"  
        placeholder='Full name (required if registering)'
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <input type="text" 
        placeholder='Profile pic URL (optional)'
        value={profilePic} 
        onChange={(e) => setProfilePic(e.target.value)} 
        />
        <input 
         type="email" 
         placeholder='Email'
         value={email} 
         onChange={(e) => setEmail(e.target.value)}/>
        <input 
        type="password" 
        placeholder='Password'
        value={password} 
        onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={loginToApp}>Sign In</button>
      </form>
      <p>Not a member? <span className='login__register' onClick={register}>Register Now</span></p>
    </div>
  )
}

export default Login
