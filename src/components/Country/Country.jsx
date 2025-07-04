import React from 'react';
import './Country.css'

const Country = ({country}) => {
    const {name}= (country)
    return (
        <div className='country'>
            <h3>Name : <span className='countryName'>{name?.common} </span> </h3>
        </div>
    );
};

export default Country;