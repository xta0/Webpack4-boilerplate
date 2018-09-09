import "./button2.scss";

class WPButton2 {
  render() {
    const body = document.querySelector("body");
    const button = document.createElement("button");
    button.classList.add("wp-btn-2");
    button.innerHTML = "Hello World";
    button.onclick = () => {
      console.log("onclick!");
      const p = document.createElement("p");
      p.classList.add("wp-p-2");
      p.innerHTML = "on click!";
      body.appendChild(p);
    };

    body.appendChild(button);
  }
}

export default WPButton2;
