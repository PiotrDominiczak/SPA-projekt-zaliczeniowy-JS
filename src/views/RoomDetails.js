import { BackButton } from "../common/BackButton";
import { Rooms } from "./Rooms";

export function RoomDetails(id) {
	const section = document.createElement("section");
	section.className = "container";
	section.innerHTML = `
        <p id="loading">Loading...</p>
    `;

	fetch(`http://localhost:3000/rooms/${id}`)
		.then((response) => response.json())
		.then((room) => {
			const { name, beds, guests, price, description, imageSrc } = room;
			const article = document.createElement("article");
			article.innerHTML = `
            <h2>${name}</h2>
            <div class="card roomCard col-lg">
                <img class="card-img-top" src="${imageSrc}"> 
                <hr>
                <p class="card-text">${beds} x 🛏️ ${guests} x 💁</p>
                <p class="card-text">${description}</p>
                <footer class="footerDetails">
                <p class="card-text">Cena:
                    <strong> ${price.toFixed(2)} USD ${
				price < 100 ? "✔️" : "❌"
			}</strong>
                </p></footer>
            </div>
            `;
			section.querySelector("#loading").remove();
			section.append(article);
			const footer = document.querySelector("footer");
			footer.append(BackButton(Rooms));
		});

	return section;
}
