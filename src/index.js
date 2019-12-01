import React from 'react';
import ReactDom from 'react-dom';

import WeatherApp from './WeatherApp';

const app = document.querySelector('.wrapper');
ReactDom.render(<WeatherApp />, app);
