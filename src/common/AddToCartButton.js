import { cartManager } from "../cart/cart-manager";

export function AddToCartButton(item) {
	const button = document.createElement("button");
	button.classList.add("btn", "btn-danger");
	button.setAttribute("type", "button");
	button.style.marginTop = "10px";
	button.innerText = "Dodaj do koszyka 🛒";
	button.addEventListener("click", () => {
		const dateInput = document.querySelector("." + item.inputName);
		item.date = dateInput.value;
		item.date === ""
			? window.alert("Podaj poprawny termin!!")
			: cartManager.add(item);
	});

	return button;
}
