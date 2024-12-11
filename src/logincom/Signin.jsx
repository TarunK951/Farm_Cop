import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { ToastContainer } from "react-toastify";
import { auth, db } from '../Firebase';
import Login from './Login';


function CreAcc() {

  const [showRegister, setShowRegister] = useState(false);
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleRegister = async(e) => {
    e.preventDefault();
    


    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, 'Users', user.uid),{
          email: user.email,
          firstName: fname,
          lastname:lname
        })
      }
      console.log("user registered successfull")
      
    
    } catch (error) {
      console.log(error.message);
      
    }
  }

  
 

  const openPopUp = () => {
    setShowRegister(true)
  };

  const closePopUp = () => {
    setShowRegister(false)
  };




  return (
    <div>
      <center>
        <form onSubmit={handleRegister}>
          <h1>Register here</h1>
          <h3>First-Name:</h3>
          <input
            type='text'
            value={fname}
            onChange={(e)=>setFName(e.target.value)}
          /><br />

          <h3>Last-Name:</h3>
          <input
            type='text'
            value={lname}
            onChange={(e)=>setLName(e.target.value)}
          /> <br />

          <h3>Email:</h3>
          <input
            type='email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          
          /> <br />

          <h3>Password:</h3>
          <input
            type='password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          
          /> <br />

          <h3>Re-Enter Password:</h3>
          <input
            type='password'
          
          /> <br />
          <br />
          <input type='submit' value='create' className='cr-btn' />
          <p>if u already have a account</p>
          <input type='button' value='login' onClick={openPopUp} />
        
        </form>
      </center>
            <ToastContainer />

      {showRegister && (
        <div className='modal'>
          <div className='modal-content'>
            <span className='close' onClick={closePopUp} >&times; </span>
            <Login />
          </div>
          <div />
        </div>
      )}
    </div>
  );
}
export default CreAcc;

