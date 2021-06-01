import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import Error from './Error';

const WeatherInfo = ({ data }) => {

    const [countryName, setCountryName] = useState('');

    useEffect(() => {
        const getCountryName = async () => {
            if (data.cod === 200) {
                await fetch(`https://restcountries.eu/rest/v2/alpha/${data.sys.country}`)
                    .then(response => response.json())
                    .then(result => setCountryName(result.name))
            }
        }
        getCountryName();
    }, [data])

    return (
        data.cod === 200 ? (
            <div className='weather-data-container'>
                <h2 className='city-description'>{data.weather[0].description}
                <span>
                    <img alt='Weather Icon' src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} />
                </span>
                </h2>
                <h1 className='city-name'>{data.name}
                <span><img alt='city-icon' 
                className='city-icon'
                src='images/city.png' /></span>
                </h1>
                <h1 className='country-name'>Country: {countryName} <span>
                    <img
                        className='country-flag mx-4'
                        src={`https://www.countryflags.io/${data.sys.country}/flat/64.png`}
                        alt='Country Flag'
                    />
                </span>
                </h1>

                <Table striped bordered variant='dark'>
                    <thead>
                        <tr>
                            <th>Parameter</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ID
                        <img src='images/id.png' alt='id' />
                            </td>
                            <td>{data.weather[0].id}</td>
                        </tr>
                        <tr>
                            <td>LAT
                        <img src='images/location.png' alt='location' />
                            </td>
                            <td>{data.coord.lat}</td>
                        </tr>
                        <tr>
                            <td>LON
                    <img src='images/location.png' alt='location' />
                            </td>
                            <td>{data.coord.lon}</td>
                        </tr>
                        <tr>
                            <td>TEMP
                    <img src='images/thermometer.png' alt='thermometer' />
                            </td>
                            <td>{ (data.main.temp-273.15).toFixed(2)} <sup>o</sup>C</td>
                        </tr>
                        <tr>
                            <td>Humidity
                    <img src='images/humidity.png' alt='humidity' />
                            </td>
                            <td>{data.main.humidity}</td>
                        </tr>
                        <tr>
                            <td>Pressure
                    <img src='images/pressure.png' alt='pressure' />
                            </td>
                            <td>{data.main.pressure}</td>
                        </tr>
                        <tr>
                            <td>Wind speed
                    <img src='images/wind_speed.png' alt='wind' />
                            </td>
                            <td>{data.wind.speed} km/h</td>
                        </tr>
                        <tr>
                            <td>Degree
                    <img src='images/angle.png' alt='angle' />
                            </td>
                            <td>{data.wind.deg}<sup>o</sup></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        ) : (<div>
            <Error />
        </div>)
    )
}

export default WeatherInfo
