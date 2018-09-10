import icon from './webpack.png';
import './icon-image.scss';

class IconImage {
  render() {
    const img = document.createElement('img');
    img.src = icon;
    img.alt = 'webpack';
    img.classList.add('icon-image');

    const body = document.querySelector('body');
    body.appendChild(img);
  }
}
export default IconImage;
