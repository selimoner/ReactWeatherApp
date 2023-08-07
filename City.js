import React from 'react';

const City = ({ cityData }) => {

    return (

        <div className="col-md-6 mt-4">
            {cityData && (
                <div>
                    <h4>Weather of: {cityData.name}</h4>
                    <h4>Temperature: {cityData.main.temp}&deg;C</h4>
                    <h4>How is it? {cityData.weather[0].main}</h4>
                </div>
            )}
        </div>

    );
};

export default City;
