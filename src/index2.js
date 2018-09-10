import React from 'react';
import { connect } from 'react-redux';

import Heading from './components/heading/heading.js';
import IconImage from './components/icon-image/icon-image';

const heading = new Heading();
heading.render('Index-2');

const icon = new IconImage();
icon.render();
