import { AddToCartButton } from "../common/AddToCartButton";
import { RoomDetails } from "./RoomDetails";

function SeeMoreButton(id) {
	const button = document.createElement("button");
	button.setAttribute("type", "button");
	button.innerText = "Zobacz więcej";
	button.classList.add("btn", "btn-success");
	button.style.marginTop = "10px";
	const navigateEvent = new CustomEvent("navigate", {
		detail: () => RoomDetails(id),
	});

	button.addEventListener("click", () => {
		document.body.dispatchEvent(navigateEvent);
	});

	return button;
}
export let today = new Date().toISOString().slice(0, 10);
export let todayNextYear = new Date(
	new Date().setFullYear(new Date().getFullYear() + 1)
)
	.toISOString()
	.slice(0, 10);
export function Room(room) {
	const { id, name, price, inputName, imageSrc } = room;

	const div = document.createElement("div");
	const img = document.createElement("img");
	div.className = "card roomCard col-lg";
	div.innerHTML = `
    <h4 class="card-title">${name}</h4>
    <img class="card-img-top" src="${imageSrc}"> 
    <p class="card-text">Cena: ${price} USD</p>
    <label for="inputId">Podaj datę przyjazdu (pokój można okupować tylko jedną dobę!):
    <input id="inputId" class="form-control ${inputName}" type="date" min="${today}" max="${todayNextYear}"></label>
    `;
	div.append(AddToCartButton(room));
	div.append(SeeMoreButton(id));
	return div;
}
