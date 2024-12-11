import { doc, getDoc } from "firebase/firestore"; // Ensure the correct Firestore methods are imported
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { auth, db } from '../Firebase';
import Login from './Login';
import './login.css';
import CreAcc from './Signin';

function LoginReg() {

  const [showLogin, setShowLogin] = useState(false);       // State to show login popup
  const [showRegister, setShowRegister] = useState(false); // State to show register popup
  const [userDetails, setUserDetails] = useState(null);    // State to store user details
  const [showProfileDetails, setShowProfileDetails] = useState(false); // State to toggle profile details

  // Open/Close login and register modals
  const openLogin = () => setShowLogin(true);
  const closeLogin = () => setShowLogin(false);

  const openRegister = () => setShowRegister(true);
  const closeRegister = () => setShowRegister(false);

  // Toggle profile details visibility
  const toggleProfileDetails = () => setShowProfileDetails(!showProfileDetails);

  // Fetch user data from Firestore
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        console.log("User found:", user);  // Check if the user exists
        try {
          // Ensure that 'db' is the Firestore instance and 'Users' is the correct collection name
          const docRef = doc(db, 'Users', user.uid);  // Correct Firestore document reference
          const docSnap = await getDoc(docRef);  // Fetch the document

          if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setUserDetails(docSnap.data());  // Set user details in state
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching document:", error);
        }
      } else {
        console.log("No user is logged in");
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  // Logout function (to be linked with Firebase auth)
  const logout = () => {
    auth.signOut().then(() => {
      setUserDetails(null);  // Clear user details on logout
    }).catch((error) => {
      console.error("Logout error: ", error);
    });
  };

  if (showLogin || showRegister) {
    document.body.classList.add('scroll-show');
  } else {
    document.body.classList.remove('scroll-show');
  }

  return (
    <div>
      {/* Profile Button or Login/Register Buttons */}
      <div className='reg-btns'>
        {userDetails ? (
          <>
            {/* Profile button with first name if user is logged in */}
            <button className="profile-btn" onClick={toggleProfileDetails}>
              {userDetails.firstName}
            </button>

            {/* Display user details when profile button is clicked */}
            {showProfileDetails && (
              <div className="profile-details">
                <p><strong>First Name:</strong> {userDetails.firstName}</p>
                <p><strong>Last Name:</strong> {userDetails.lastName}</p>
                <p><strong>Email:</strong> {userDetails.email}</p>
                <button className='logout-btn' onClick={logout}>Logout</button>
              </div>
            )}
          </>
        ) : (
          <>
            {/* Login and Register buttons when not logged in */}
            <input type='button' className="log-btn" value='Login' onClick={openLogin} />
            <input type='button' value='Register' className='reg-btn' onClick={openRegister} />
          </>
        )}
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

      {/* Routes */}
      <Routes>
        <Route path='/CreAcc' element={<CreAcc />} />
      </Routes>
    </div>
  );
}

export default LoginReg;
