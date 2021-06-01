import React, { useEffect, useState } from 'react'
import Header from './Header';
import Search from './Search';
import WeatherInfo from './WeatherInfo';
import Footer from './Footer';

require('dotenv').config();

const {REACT_APP_WEATHER_TOKEN} = process.env;


const App = () => {

    // const example = 'kolkata';
    const [cityName,setCityName] = useState('');
    const [data,setData] = useState([])


    useEffect(()=>{
        const fetchData = async ()=>{
            await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${REACT_APP_WEATHER_TOKEN}`
            ).then(response => response.json())
            .then((result)=>{
                console.log(result);
                setData(result);
            },
            (error)=>{
                console.log(error);
            }
            )
        }
        fetchData()
    },[cityName])

    return (
        <div className='app'>
            <Header />
            <Search setCityName = {setCityName} />
            <WeatherInfo data={data} />
            <Footer />
        </div>
    )
}

export default App
