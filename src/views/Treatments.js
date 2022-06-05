import { Treatment } from "./Treatment";

export function Treatments() {
	const section = document.createElement("section");
	section.className = "container";
	section.innerHTML = `
        <h2>Zabiegi</h2>
        <p id="loading">Loading...</p>
    `;
	fetch("http://localhost:3000/treatments")
		.then((response) => response.json())
		.then((treatments) => {
			const articles = treatments.map((treatment) =>
				Treatment(treatment)
			);

			section.querySelector("#loading").remove();
			articles.map((roomCard, index) => {
				if (index % 4) {
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
		});

	return section;
}
