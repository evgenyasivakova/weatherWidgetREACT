import React from 'react';

import WeatherItem from './WeatherItem';

function WeatherOther(props) {
    const data = props.data.list;
    const filteredData = data.filter((item, i) => i%8 === 0);
        return (
            <ul className='bottom-weather'>
                {filteredData.map(weather => <WeatherItem key={weather.id} date={weather.dt_txt} icon={weather.weather[0].icon} temp={weather.main.temp} />)}
            </ul>
        )
    }

export default WeatherOther;

