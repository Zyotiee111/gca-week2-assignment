import React, { useState } from 'react';

import { weatherApi } from './weatherApi';
import './App.css';

const App = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    
    const searchWeather = async (e) => {
            const data = await weatherApi(query);
            setWeather(data);
            setQuery('');
        
    }

    return (
        <div className="mainContainer">
            <h1> Weather App</h1>
            <div className="container">
            
            <input 
            type="text"
            className="search"
            placeholder="Weather in your city "
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick ={(e) => searchWeather()} className="button"> Search </button>
            </div>
            {weather.main && (
                <div className="city">
                    <h2 className="cityName">
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>
                    <div className="cityTemp">
                        {Math.round(weather.main.temp)}
                        <sup>&deg;C</sup>
                    </div>
                    <div className="cityInfo">
                        <img className="cityIcon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                        <p>{weather.weather[0].description}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
