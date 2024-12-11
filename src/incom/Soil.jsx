import React from 'react';
import { useNavigate } from 'react-router-dom';

function Soil() {
  
    const navigate = useNavigate();
  

 const home = () => {
    navigate('/')
 }

  const Climate = () => {
    navigate('/climate')
  }

  const crop = () => {
    navigate('/crop')
  }

  return (
    <div>
      <h2>Soil Type information</h2>
      <p>Details about soil go here...</p>
      <button className="back-button" onClick={home}>Back to Home</button>
      <button className="back-button" onClick={crop}>Crop Page</button>
      <button className="back-button" onClick={Climate} >Climate page</button>
      
    </div>
  );
}

export default Soil;
