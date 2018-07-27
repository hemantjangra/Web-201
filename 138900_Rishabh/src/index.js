

import './styles/main.scss';
import {
  app
} from './scripts/controller/GlobalController.js';

require('babel-polyfill');


import Jasmine from 'jasmine'

var jasmine = new Jasmine()
jasmine.loadConfigFile('spec/support/jasmine.json')
jasmine.execute();





//app.loadPolyfills();
//app.init();
