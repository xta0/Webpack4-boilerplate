import Heading from './components/heading/heading.js';
const hd = new Heading();
hd.render();

import addImage from './image';
addImage();

import WPButton from './components/button';
import WPButton2 from './components/button2';

const button = new WPButton();
button.render();

const button2 = new WPButton2();
button2.render();

console.log(123);
