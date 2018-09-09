import "./button.css";

class WPButton {
  constructor() {
    this.btnClass = "wp-btn";
  }
  render() {
    const body = document.querySelector("body");
    const button = document.createElement("button");
    button.classList.add(this.btnClass);
    button.innerHTML = "Hello World";
    button.onclick = () => {
      console.log("onclick!");
      const p = document.createElement("p");
      p.classList.add("wp-p");
      p.innerHTML = "on click!";
      body.appendChild(p);
    };

    body.appendChild(button);
  }
}

export default WPButton;
