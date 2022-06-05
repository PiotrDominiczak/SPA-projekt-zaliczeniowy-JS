import { registrationManager } from "../registration/registration-manager";
export function RegisterButton() {
	const user = {
		name: document.querySelector("#name").value,
		email: document.querySelector("#email").value,
		password: document.querySelector("#password").value,
	};
	registrationManager.add(user);
}
