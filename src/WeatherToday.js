import React from 'react';
import moment from 'moment';

function WeatherToday(props) {
    const data = props.data.data;
    const deg = data.list[0].wind.deg;
    const direction = getDirectionWind(deg);
    const temp = normilizeTemp(data.list[0].main.temp);
    if(props.data.hasAnswer === true) {
        return (
            <div className='top-weather'>
                <div>{data.city.name}, {data.city.country}</div>
                <div>{moment().format('hh:mm')}</div>
                <img src={`https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`} className='img-weather' width='70' height='70'/>
                <div>{data.list[0].weather[0].main}</div>
                <div>{temp} ℃</div>
                <div>{direction}</div>
                <div>{Math.floor(data.list[0].wind.speed)} m/s</div>
            </div>
        )
    }
}

function getDirectionWind(deg) {
    if(deg < 90) {
        return 'North-West';
    } else if(deg = 90) {
        return 'North';
    } else if(deg < 180) {
        return 'North-East';
    } else if(deg = 180) {
        return 'East';
    } else if(deg < 270) {
        return 'South-East';
    } else if(deg = 270) {
        return 'South';
    } else if(deg <360) {
        return 'South-West';
    } else {
        return 'West';
    }
}

function normilizeTemp(temp) {
    return Math.floor(temp - 273);
}

export default WeatherToday;