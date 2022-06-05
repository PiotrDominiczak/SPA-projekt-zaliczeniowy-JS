export function BackButton(Component) {
	const button = document.createElement("button");
	button.classList.add("btn", "btn-light");
	button.style.width = "20%";
	button.style.padding = "1rem";
	button.setAttribute("type", "button");
	button.innerText = "BACK";

	const navigateEvent = new CustomEvent("navigate", {
		detail: Component,
	});

	button.addEventListener("click", () => {
		document.body.dispatchEvent(navigateEvent);
	});

	return button;
}
