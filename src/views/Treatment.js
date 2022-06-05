import { AddToCartButton } from "../common/AddToCartButton";
import { today, todayNextYear } from "./Room";
export function Treatment(treatment) {
	const { name, area, time, price, inputName, imageSrc } = treatment;
	const article = document.createElement("article");

	article.className = "card roomCard col-lg";
	article.innerHTML = `
    <h4 class="card-title treatmentTitle">${name}</h4>
    <img class="card-img-top treatmentImage" src="${imageSrc}">  
    <p  class="card-text">Area: ${area}</p>
    <p  class="card-text">Time: ${time} minutes</p>
    
    <p class="card-text">Cena: ${price.toFixed(2)} USD
    ${price < 100 ? "✔️" : "❌"}</p>
    
    <label for="inputId">Podaj datę zabiegu:
    <input id="inputId" class="form-control ${inputName}" type="date" min="${today}" max="${todayNextYear}"></label>
    `;

	article.append(AddToCartButton(treatment));

	return article;
}
