import { LoginButton } from "../common/LoginButton";

export function Login() {
	let section = document.createElement("section");
	section.className = "container";
	section.innerHTML = `
    <h2>Zaloguj się</h2>
    <form id="form" class="form-horizontal">
    <div class="form-group">
    <label class="control-label col-sm-2" for="email">Podaj swój e-mail:</label>
    <div class="col-sm-10">
    <input type="email" id="email" class="form-control">
    </div>
    </div>
    <div class="form-group">
    <label class="control-label col-sm-2" for="password">Podaj hasło:</label>
    <div class="col-sm-10">
    <input type="password" id="password" class="form-control">
    </div>
    </div>
    <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
    <button id="submit" class="btn btn-primary formBtn">Zaloguj</button>
    </form>
    
    `;
	document.querySelector("main").append(section);
	document.querySelector("#submit").addEventListener("click", LoginButton);
	return section;
}
