import React, { useState } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';


const Weather = () => {

    const [weatherData, setWeatherData] = useState(null);
    const [cityName, setCityName] = useState("karachi");
    const [foreCastWeatherData, setForeCastWeatherData] = useState(null);

    const getWeather = (e) => {
        e.preventDefault();
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=703521844ed91f1477e9cf8a9bb48a5a`)
            .then((response) => {
                console.log(response);
                setWeatherData(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=703521844ed91f1477e9cf8a9bb48a5a`)
            .then((response) => {
                var foreCastArray = Array.from(response.data.list);
                // console.log(response.data);
                setForeCastWeatherData(foreCastArray)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const getCityName = (e) => {
        setCityName(e.target.value);
    }

    return <>
        <div>
            <nav>
                <div>Weather App</div>
            </nav>
            <div className="main">
                <div>
                    <div id="search">
                        <form>
                            <input type="text" placeholder="Enter city name" id="cityName" onChange={getCityName} />
                            <button onClick={getWeather}><FontAwesomeIcon icon={faSearch} /></button>
                        </form>
                    </div>
                    <div id="data">
                        <div id="temp">
                            <img src="" alt="" id="mainImg" />
                            {weatherData == null ? <div id="tempText">0.0°C</div> : <div id="tempText">{weatherData.main.temp}°C</div>}
                        </div>
                        <div id="locationContainer">

                            {weatherData == null ?
                                <div className="details" id="location">
                                    <span>location</span>
                                </div> : <div className="details" id="location">
                                    <span>{weatherData.name}</span>
                                </div>}

                            {weatherData == null ?
                                <div className="details" id="weatherDetail">
                                    <span>weather</span>
                                </div> : <div className="details" id="weatherDetail">
                                    <span>{weatherData.weather[0].description}</span>
                                </div>}


                        </div>
                        <div id="detailsContainer">
                            <div className="details" id="countryCoontainer">
                                {weatherData == null ? <div id="country">Country :</div> : <div id="country">Country :{weatherData.sys.country}</div>}
                                {weatherData == null ? <div id="temp_min">Temp Min :</div> : <div id="temp_min">Temp Min :{`${Math.round(weatherData.main.temp_min)}°C`}</div>}
                                {weatherData == null ? <div id="temp_max">Temp Max :</div> : <div id="temp_max">Temp Max :{`${Math.round(weatherData.main.temp_max)}°C`}</div>}
                                {weatherData == null ? <div id="humidity">Humidity :</div> : <div id="humidity">Humidity :{`${weatherData.main.humidity}`}</div>}
                            </div>
                            <div className="details">
                                {weatherData == null ? <div id="feels_like">Feels Like :</div> : <div id="feels_like">Feels Like :{`${Math.round(weatherData.main.feels_like)}°C`}</div>}
                                {weatherData == null ? <div id="wind_speed">Wind Speed:</div> : <div id="wind_speed">Wind Speed:{weatherData.wind.speed}</div>}
                                {weatherData == null ? <div id="wind_deg">wind Deg :</div> : <div id="wind_deg">Wind Deg :{weatherData.wind.deg}</div>}
                                {weatherData == null ? <div id="pressure">Pressure :</div> : <div id="pressure">Pressure :{`${weatherData.main.pressure} N/m3`}</div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {foreCastWeatherData == null ? <div id="forecastDetails">
            <div className="forecastCard">
                <div className="forecastDay">Mon</div>
                <div className="forecastTime">00:00</div>
                <img src="https://openweathermap.org/img/wn/10d@2x.png" width="55px" alt="" />
                <div>
                    <div className="forecastTemp">Desc</div>
                    <div className="forecastTemp"><span>Temp</span>:00°C</div>
                    <div className="forecastTemp"><span>MaxTemp</span>:00°C</div>
                    <div className="forecastTemp"><span>MinTemp</span>:00°C</div>
                </div>
            </div>
            <div className="forecastCard">
                <div className="forecastDay">Mon</div>
                <div className="forecastTime">00:00</div>
                <img src="https://openweathermap.org/img/wn/10d@2x.png" width="55px" alt="" />
                <div>
                    <div className="forecastTemp">Desc</div>
                    <div className="forecastTemp"><span>Temp</span>:00°C</div>
                    <div className="forecastTemp"><span>MaxTemp</span>:00°C</div>
                    <div className="forecastTemp"><span>MinTemp</span>:00°C</div>
                </div>
            </div>
            <div className="forecastCard">
                <div className="forecastDay">Mon</div>
                <div className="forecastTime">00:00</div>
                <img src="https://openweathermap.org/img/wn/10d@2x.png" width="55px" alt="" />
                <div>
                    <div className="forecastTemp">Desc</div>
                    <div className="forecastTemp"><span>Temp</span>:00°C</div>
                    <div className="forecastTemp"><span>MaxTemp</span>:00°C</div>
                    <div className="forecastTemp"><span>MinTemp</span>:00°C</div>
                </div>
            </div>
            <div className="forecastCard">
                <div className="forecastDay">Mon</div>
                <div className="forecastTime">00:00</div>
                <img src="https://openweathermap.org/img/wn/10d@2x.png" width="55px" alt="" />
                <div>
                    <div className="forecastTemp">Desc</div>
                    <div className="forecastTemp"><span>Temp</span>:00°C</div>
                    <div className="forecastTemp"><span>MaxTemp</span>:00°C</div>
                    <div className="forecastTemp"><span>MinTemp</span>:00°C</div>
                </div>
            </div>
            <div className="forecastCard">
                <div className="forecastDay">Mon</div>
                <div className="forecastTime">00:00</div>
                <img src="https://openweathermap.org/img/wn/10d@2x.png" width="55px" alt="" />
                <div>
                    <div className="forecastTemp">Desc</div>
                    <div className="forecastTemp"><span>Temp</span>:00°C</div>
                    <div className="forecastTemp"><span>MaxTemp</span>:00°C</div>
                    <div className="forecastTemp"><span>MinTemp</span>:00°C</div>
                </div>
            </div>
            <div className="forecastCard">
                <div className="forecastDay">Mon</div>
                <div className="forecastTime">00:00</div>
                <img src="https://openweathermap.org/img/wn/10d@2x.png" width="55px" alt="" />
                <div>
                    <div className="forecastTemp">Desc</div>
                    <div className="forecastTemp"><span>Temp</span>:00°C</div>
                    <div className="forecastTemp"><span>MaxTemp</span>:00°C</div>
                    <div className="forecastTemp"><span>MinTemp</span>:00°C</div>
                </div>
            </div>
            <div className="forecastCard">
                <div className="forecastDay">Mon</div>
                <div className="forecastTime">00:00</div>
                <img src="https://openweathermap.org/img/wn/10d@2x.png" width="55px" alt="" />
                <div>
                    <div className="forecastTemp">Desc</div>
                    <div className="forecastTemp"><span>Temp</span>:00°C</div>
                    <div className="forecastTemp"><span>MaxTemp</span>:00°C</div>
                    <div className="forecastTemp"><span>MinTemp</span>:00°C</div>
                </div>
            </div>
            <div className="forecastCard">
                <div className="forecastDay">Mon</div>
                <div className="forecastTime">00:00</div>
                <img src="https://openweathermap.org/img/wn/10d@2x.png" width="55px" alt="" />
                <div>
                    <div className="forecastTemp">Desc</div>
                    <div className="forecastTemp"><span>Temp</span>:00°C</div>
                    <div className="forecastTemp"><span>MaxTemp</span>:00°C</div>
                    <div className="forecastTemp"><span>MinTemp</span>:00°C</div>
                </div>
            </div>
        </div> :
            <div id="forecastDetails">
                {foreCastWeatherData.map((element) => {
                    return(
                    <div className="forecastCard">
                        <div className="forecastDay">{new Date(element.dt_txt).toString().slice(0, 3)}</div>
                        <div className="forecastTime">{new Date(element.dt_txt).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</div>
                        <img src={`https://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`} width="55px" alt="" />
                        <div>
                            <div className="forecastTemp">{element.weather[0].description}</div>
                            <div className="forecastTemp"><span>Temp</span>:{Math.round(element.main.temp)}°C</div>
                            <div className="forecastTemp"><span>MaxTemp</span>:{Math.round(element.main.temp_max)}°C</div>
                            <div className="forecastTemp"><span>MinTemp</span>:{Math.round(element.main.temp_min)}°C</div>
                        </div>
                    </div>)
                })}
            </div>
        }
    </>
}
export default Weather;