import { Room } from "./Room";

export function Rooms() {
	let section = document.createElement("section");
	section.className = "container";
	section.innerHTML = `
    <h2>Pokoje</h2>
    <p id="loading">Loading...</p>
    `;

	fetch("http://localhost:3000/rooms")
		.then((response) => response.json())
		.then((rooms) => {
			const cards = rooms.map((room) => Room(room));

			cards.map((roomCard, index) => {
				if (index % 2) {
					const divRow = document.querySelector(
						"section>div:last-child"
					);
					divRow.append(roomCard);
				} else {
					const divRow = document.createElement("div");
					divRow.className = "row";
					section.append(divRow);
					divRow.append(roomCard);
				}
			});

			section.querySelector("#loading").remove();
		});

	return section;
}
