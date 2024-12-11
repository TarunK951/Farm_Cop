import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../Firebase';
import CreAcc from './Signin';

function Login() {
  const [showRegister, setShowRegister] = useState(false);  
  const openRegister = () => setShowRegister(true);
  const closeRegister = () => setShowRegister(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handlesubmit = async (e) => {
    e.preventDefault();
    
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("logged in successfully")
    } catch (error) {
      
    }
  }

  // Navigate to the register page when button is clicked

  return (
    <div>
      <center>
        <form onSubmit={handlesubmit}>
          <h1>Login :</h1>
          <h3>E-Mail:</h3>
          <input type="text"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <h3>Password:</h3>
          <input
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          /><br />
          {/* Use a button and trigger navigation on click */}
          <br />
          <input
            type='button'
            value='login'
          /><br />
          <h3>If u don't have a account </h3>
          <input type="button" onClick={openRegister} value="Register" />
        </form>
      </center>

      {/* showregister pop comes here through register button */}

      {showRegister && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeRegister}>&times;</span>
            <CreAcc />  {/* The registration form */}
          </div>
        </div>
          )}
    </div>
  );
}

export default Login;
