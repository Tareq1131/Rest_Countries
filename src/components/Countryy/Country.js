import React from 'react';
import "./Country.css"

const Country = (props) => {
    console.log(props.country);
    const{name,population,region,area,flags}=props.country;
   
    return (
        <div className='country'>
            <h2>Country Name:{name.common}</h2>
            <img src={flags.png} alt='img'/>
            <p>Population:{population}</p>
            <p>Region:{region}</p>
            <p> <small>Area: {area}</small></p>
        </div>
    );
};

export default Country;