import React from 'react';
import { useNavigate } from 'react-router-dom';



function Crop() {

const navigate = useNavigate();
const goBack = () => {
    navigate('/');

  

  
};


  
  
  

  return (
    <div>
      <h2>Crop Information</h2>
      <p>Details about crops go here...</p>
      <button onClick={goBack}>Back</button>




    </div>
  );
}

export default Crop;
