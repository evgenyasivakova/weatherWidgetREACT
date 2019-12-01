import React from 'react';
import moment from 'moment';

function WeatherItem(props) {
    const date = new Date(props.date);
    const prettyDate = moment(date).format('DD MMM HH a');
    const temp = Math.floor(props.temp - 273) + ' ℃';
    
    return (
        <li>
            <div>{prettyDate}</div>
            <img src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`} width='45' height='45'/>
            <div>{temp}</div>
           
        </li>
    );
}

export default WeatherItem;
