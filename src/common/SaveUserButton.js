export function SaveUserButton() {
	const getAllUsersButton = document.createElement("button");
	getAllUsersButton.setAttribute("type", "submit");
	getAllUsersButton.setAttribute("id", "submit");
	getAllUsersButton.innerText = "Zapisz";

	return getAllUsersButton;
}
