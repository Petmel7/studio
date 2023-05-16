import example from "./images/bee-on-daisy.jpg";
import imgSvg from "./images/google-icon.svg";
import imgPng from "./images/png-transparent-butterfly-pink-free-butterflies-pics-purple-blue-image-file-formats.png";
import { sum } from "./helper/sum.js";
import "./styles/main.scss";

console.log("Webpack");

class Game {
    name = "Violin Charades"
}

const myGame = new Game ();

const p = document.createElement("p");
p.textContent = `I like ${myGame.name}.`;

const heading = document.createElement("h1");
heading.textContent = "Interesting!";

const app = document.querySelector("#root");
app.append(heading, p);

const img = document.createElement('img');
img.src = example;
app.append(img);

const svgImg = document.createElement('img');
svgImg.src = imgSvg;
app.append(svgImg);

const pngImg = document.createElement('img');
pngImg.src = imgPng;
app.append(pngImg);

console.log(sum(2, 3));
