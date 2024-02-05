import React, { useState } from 'react';
import {useDispatch} from "react-redux";
import { saveLogin } from '../ReduxManager/action';

const Mylogin = () => {

const [logInId,setLogInId]=useState('');

const dispatch= useDispatch()

const handleLogIn=()=>{
  console.log("login",logInId);
  dispatch(saveLogin(logInId))
  setLogInId('')
}

  return (
    <div>
       <div className='login'>
            <label>
           Please Enter Your LogIn Id:
            <input
              value={logInId}
              onChange={e => setLogInId(e.target.value)}
            />
          </label>
          <div>
            <button onClick={handleLogIn}>Log In</button>
          </div>
            </div>
    </div>
  )
}

export default Mylogin
