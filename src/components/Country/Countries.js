import React, { useEffect, useState } from 'react';
import Country from '../Countryy/Country';
import './Countries.css';

const Countries = () => {

   const[countries, setCountries] =useState([]);

   useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data =>setCountries(data));

   },[])

    return (
        <div>
            <h2>Total Countris{countries.length }</h2>

           <div className ='cc'>
           {
                countries.map(country=> <Country 
                    country={country}
                    key={country.cca3}
                    // name={country.name.common}
                    // population={country.population}
                    // region={country.region}
                    // area={country.area}
                />)
            }
           </div>
        </div>
    );
};

export default Countries;