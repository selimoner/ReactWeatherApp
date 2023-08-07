import React, { useState, useEffect } from 'react'
import axios from 'axios';
import City from './City.js'

function Test(props) {

    const cityName = props.cityData;
    const key = "b2418e89a0a71c078b14659ee5d8e59c";
    const [city, setCity] = useState();

    useEffect(() => {

        async function getData() {

            try {

                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`);
                setCity(response.data);

            } catch (error) {

                console.error(error);

            }
        }
        getData();
    }, [cityName]);


    return (

        <div>
            <div className="App">
                <div>
                    {city && <City cityData={city} />}
                </div>
            </div>
        </div>

    )

}

export default Test