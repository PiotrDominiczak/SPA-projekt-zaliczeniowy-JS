import { Rooms } from "../views/Rooms";
import { Treatments } from "../views/Treatments";
import { NavigationButton } from "./NavigationButton";
import "./navigation.scss";
import { Cart } from "../views/Cart";
import { Registration } from "../views/Registration";
import { Login } from "../views/Login";

const navigationItems = [
	{ component: Login, name: "Zaloguj się" },
	{ component: Registration, name: "Rejestracja" },
	{ component: Rooms, name: "Pokoje" },
	{ component: Treatments, name: "Zabiegi" },
	{ component: Cart, name: "🛒" },
];

export function Navigation() {
	const nav = document.createElement("nav");
	nav.style.backgroundColor = "#212529";
	nav.className = "container";
	const navigationButtons = navigationItems.map((item) => {
		const { component, name } = item;
		return NavigationButton(component, name);
	});

	navigationButtons[0].classList.add("active-btn");

	nav.append(...navigationButtons);
	return nav;
}
