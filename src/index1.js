import React from 'react';
import { connect } from 'react-redux';

import Heading from './components/heading/heading.js';
const hd = new Heading();
hd.render('Index-1');

import WPButton from './components/button/button.js';
import WPButton2 from './components/button/button2.js';

const button = new WPButton();
button.render();

const button2 = new WPButton2();
button2.render();
