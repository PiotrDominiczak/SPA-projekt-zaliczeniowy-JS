import { RegisterButton } from "../common/RegisterButton.js";

export function Registration() {
	let section = document.createElement("section");
	section.className = "container";
	section.innerHTML = `
    <h2>Zarejestruj konto</h2>
    <form class="form-horizontal" id="form">
    <div class="form-group">
    <label class="control-label col-sm-2" for="name">Podaj Imię:</label>
    <div class="col-sm-10">
    <input class="form-control" type="text" name="name" id="name">
    </div>
    </div>

    <div class="form-group">
    <label class="control-label col-sm-2" for="email">Podaj swój e-mail:</label>
    <div class="col-sm-10">
    <input class="form-control" type="email" name="email" id="email">
    </div>
    </div>

    <div class="form-group">
    <label class="control-label col-sm-2" for="password">Wybierz hasło:</label>
    <div class="col-sm-10">
    <input class="form-control" type="password" name="password" id="password">
    </div>
    </div>
    <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
    <button id="submit" class="btn btn-primary formBtn"> Zarejestruj się</button>
    </div></div>
    </form>
    `;
	document.querySelector("main").append(section);
	document.querySelector("#submit").addEventListener("click", RegisterButton);
	return section;
}
