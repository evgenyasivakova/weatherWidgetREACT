import React from 'react';
import axios from 'axios';

import WeatherToday from './WeatherToday';
import WeatherOther from './WeatherOther';

const url = 'https://api.openweathermap.org/data/2.5/forecast?q=Minsk&appid=d2ef0eabeba01a0502cde3d096e7aadf';

class WeatherApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           data: [],
           hasAnswer: false,
       };
    };

    async componentDidMount() {
        const response = await axios(url);
        this.setState( {data: response.data, hasAnswer: true} );
    }
    
    render() {
        if(this.state.hasAnswer === true) {
            return (
                <div>
                    <WeatherToday data={this.state}/>
                    <WeatherOther data={this.state.data}/>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default WeatherApp;