import "bootstrap/dist/css/bootstrap.css";
import "./it-spa.scss";

import { Login } from "./views/Login";

import { Navigation } from "./navigation/Navigation";

const main = document.querySelector("main");
const header = document.createElement("header");
header.style.backgroundColor = "#212529";
main.before(header);
header.append(Navigation());
main.append(Login());

document.body.addEventListener("navigate", (event) => {
	const { detail: Component } = event;
	main.innerHTML = "";
	main.append(Component());
});
