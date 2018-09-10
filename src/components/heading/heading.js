import './heading.css';

class Heading {
  render(name) {
    const h1 = document.createElement('h1');
    const body = document.querySelector('body');
    h1.innerHTML = name;
    body.appendChild(h1);
  }
}
export default Heading;
