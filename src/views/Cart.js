import { cartManager } from "../cart/cart-manager";
import { RemoveFromCartButton } from "../common/RemoveFromCartButton";

const add = (a, b) => a + b;
const calculateTotal = (items) =>
	items
		.map((item) => item.price)
		.reduce(add, 0)
		.toFixed(2);

export function Cart() {
	const section = document.createElement("section");
	section.className = "container";
	section.innerHTML = `
        <h2>Twój koszyk</h2>
    `;

	const cartItems = cartManager.getAll();

	const table = document.createElement("table");
	table.classList.add("table");

	const tableHead = document.createElement("tr");
	tableHead.innerHTML = `
        <th>Przedmiot zamówienia:</th>
        <th>Cena:</th>
        <th>Termin:</th>
        <th>Usuń z koszyka:</th>
    `;

	const tableRows = cartItems.map((item) => {
		const tr = document.createElement("tr");
		tr.innerHTML = `
            <td>${item.name}</td>
            <td>${item.price.toFixed(2)}</td>
            <td>${item.date}</td>
            <td></td>
            `;
		tr.lastElementChild.append(RemoveFromCartButton(item));
		return tr;
	});

	const tableFooter = document.createElement("tr");
	tableFooter.innerHTML = `
        <td><strong>Razem do zapłaty:</strong> ${calculateTotal(cartItems)}</td>
    `;

	table.append(tableHead, ...tableRows, tableFooter);
	section.append(table);

	return section;
}
