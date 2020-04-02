import 'core-js/es/map';
import 'core-js/es/set';
import 'raf/polyfill';
import 'react-app-polyfill/ie9';
import React from 'react';
import {render} from 'react-dom';
import {App} from './App';

render(<App />, document.getElementById('root'));