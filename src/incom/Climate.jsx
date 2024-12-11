import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './csscom/Climate.css';


function Climate() {

    const navigate = useNavigate();
    const goBack = () => {
        navigate('/');
    }
      // useState Declarations--->> 
    
  const [indata, setIndata] = useState('');
  const [temperature, setTemperature] = useState('');
  const [humidity, setHumidity] = useState('');
  const [windspeed, setWindspeed] = useState('');
    const [city, setCity] = useState('');
    const [feelLike, setFLike] = useState('');
    const [rain, setRain] = useState('');

    // input data event handler-->>
    
  const changeHandler = e => {
    setIndata(e.target.value);
  }

    // submit event handler ---->>
  
  const submitHandler = e => {
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${indata}&units=metric&appid=5b1783cdceced3bd4a3db7650531689c`)
      .then(response => response.json())
      .then(data => {
        if (data.main && data.main.temp) {
          const tempResult = data.main.temp;
          const humidityRes = data.main.humidity;
          const windSpeedRes = data.wind.speed;
            const cityName = data.name;
            const feelLik = data.main.feels_like;
            const rainocc = data.rain ? data.rain["1h"] : 'No rain';

          setTemperature(Math.round(tempResult) + "°C");
          setHumidity(humidityRes);
          setWindspeed(Math.round(windSpeedRes) + 'Km/h');
          setCity(cityName);
          setFLike(feelLik);
          setRain(rainocc);

          console.log(data.main.temp);
        } else {
          alert('City not found or no temperature data available');
            setTemperature('');
            // Clear the temperature if the city is not found
        }
      })
      .catch(error => {
        console.error("Error fetching the weather data:", error);
        alert("An error occurred while fetching the weather data. Please try again.");
      })
  }
    


  return (
      <div>
          <center>
        <div className='weather-card'>
          <div className='weather-card-body'>
                      <h4 className='weather-card-title'>Weather Update</h4>
                    
                      {/* main search bar and event handlers */}

            <form onSubmit={submitHandler}>
              <input type='text' name='city' className='input-field' value={indata} onChange={changeHandler} placeholder="Enter city" /><br />
              <input type='submit' className='submit-button' value='Enter' />
                      </form>
                      
             {/* weather details add or remove*/}
                      
            <div className='weather-details'>
              <div className="detail-item">
                <h1>📍City: {city}</h1>
              </div>
              <div className="detail-item">
                <h1> 🌤️Temperature: {temperature}</h1>
                          </div>
                            <div className="detail-item">
                <h1>🌡️Feels Like: {feelLike}</h1>
                          </div>
                          <div className="detail-item">
                <h1>🌧️ Rain: {rain}</h1>
                          </div>
              <div className="detail-item">
                <h1>💦Humidity: {humidity}</h1>
              </div>
              <div className="detail-item">
                <h1>🌬️ Wind Speed: {windspeed}</h1>
                          </div>
            <button onClick={goBack} className='submit-button'>Back</button>
            </div>
          </div>
        </div>
      </center>
          
          
    </div>
  )
}

export default Climate