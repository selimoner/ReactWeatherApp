import Axios from "axios";
import { useEffect, useState } from "react";
import Test from "./Test";
import React from 'react';

function Weather() {
    const [buttonClicked, setButtonClicked] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [countries, setCountries] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');

    const getCountriesFromApi = async () => {
        const response = await Axios.get("https://countriesnow.space/api/v0.1/countries");
        setCountries(response.data.data);
    };

    const citiesFromCountries = (country) => {
        const selectedCountry = countries.find((c) => c.country === country);
        setCities(selectedCountry.cities);
    };

    const submitFunc = () => {
        setFormSubmitted(true);
        setButtonClicked(true);
    };

    useEffect(() => {
        getCountriesFromApi();
    }, []);

    return (
        <div className="container">
            <h1 className="card-header">Select the Country and its City to see its weather</h1>
            <div className="card-header d-flex justify-content-between">
                <div className="col-sm-6 mx-auto mt-3">
                    <h4>Country:</h4>
                    <select className="form-select mb-3" onChange={(e) => citiesFromCountries(e.target.value)}>
                        <option value="" selected disabled>Select your country</option>
                        {countries.map((country) => (
                            <option key={country.country} value={country.country}>
                                {country.country}
                            </option>
                        ))}
                    </select>
                    <h4>City:</h4>
                    <select className="form-select mb-3" onChange={(e) => setSelectedCity(e.target.value)}>
                        <option value="" selected disabled>Select your city</option>
                        {cities.map((city) => (
                            <option key={city} value={city}>
                                {city}
                            </option>
                        ))}
                    </select>

                    <button className="btn btn-primary" onClick={submitFunc}>Submit</button>
                    {buttonClicked && formSubmitted && <Test cityData={selectedCity} />}
                </div>
            </div>
        </div>


    );
}

export default Weather;
