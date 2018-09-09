import webpack_icon from "../assets/images/webpack.png";
console.log(webpack_icon);

function addImage() {
  const img = document.createElement("img");
  img.alt = "webpack";
  img.width = 300;
  img.height = 300;
  img.src = webpack_icon;

  const body = document.querySelector("body");
  body.appendChild(img);
}
export default addImage;
