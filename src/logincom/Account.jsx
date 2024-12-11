import { getDoc } from "firebase/firestore";
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { auth, db } from '../Firebase';
import Login from './Login';
import './login.css';
import CreAcc from './Signin';

function LoginReg() {
  
  const [showLogin, setShowLogin] = useState(false);       // State to show login popup
  const [showRegister, setShowRegister] = useState(false); // State to show register popup

  const openLogin = () => setShowLogin(true);
  const closeLogin = () => setShowLogin(false);

  const openRegister = () => setShowRegister(true);
  const closeRegister = () => setShowRegister(false);

  const [userDetails, setUserdetails] = useState(null);
  const fetchUserData  = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      const docRef = (db, 'Users', user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserdetails(docSnap.data())
        console.log();
      } else {
        console.log("user not entered")
      }
    })
  }
  useEffect(() => {
    fetchUserData()
  },[])

    if (showLogin || showRegister) {
        document.body.classList.add('scroll-show')
    } else {
        document.body.classList.remove('scroll-show')
    }

  return (
      
      <div>
         
      
      <div className='reg-btns'>

        <div>
        {userDetails ? (
          <>
            <h3>Welcome {userDetails.firstName}</h3>
            <p>Email:{userDetails.email}</p>
            <p>LastName:{userDetails.lastName}</p>
            <button className='' >logout</button>
          </>
        ) : (
            <p>loading......</p>
      )}
      </div>   
      

        <input type='button' className="log-btn" value='Login' onClick={openLogin} />
        <input type='button' value='Register' className='reg-btn' onClick={openRegister} />
       
      </div>

      {/* Modal for Login */}
      
      {showLogin && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeLogin}>&times;</span>
            <Login />  {/* The login form */}
          </div>
        </div>
      )}

      {/* Modal for Register */}

      {showRegister && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeRegister}>&times;</span>
            <CreAcc />  {/* The registration form */}
          </div>
        </div>
          )}
          
          {/* router routes started here ------->> */}
          
          <Routes>
          
                  <Route path='/CreAcc' element={<CreAcc />} />      
              
          </Routes>

    </div>
  );
}

export default LoginReg;