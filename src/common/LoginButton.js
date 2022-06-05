const key = "users";

export function LoginButton() {
	const registeredUsersLS = localStorage.getItem(key);
	console.log(registeredUsersLS === null);
	if (registeredUsersLS === null) {
		fetch("http://localhost:3000/users")
			.then((response) => response.json())
			.then((users) => {
				const logedIn = users.filter(
					(user) =>
						user.email === document.querySelector("#email").value &&
						user.password ===
							document.querySelector("#password").value
				);

				if (logedIn.length > 0) {
					document.querySelector("section").innerHTML = `
            <h2>Zalogowany</h2>`;
					return logedIn;
				} else {
					document.querySelector("section").innerHTML = `
            <h2>Nieprawidłowy adres email lub hasło</h2>`;
					return logedIn;
				}
			});
	} else {
		const registered = JSON.parse(registeredUsersLS);
		const logedIn = registered.filter(
			(user) =>
				user.email === document.querySelector("#email").value &&
				user.password === document.querySelector("#password").value
		);

		if (logedIn.length > 0) {
			document.querySelector("section").innerHTML = `
        <h2>Zalogowany</h2>`;
			return logedIn;
		} else {
			document.querySelector("section").innerHTML = `
        <h2>Nieprawidłowy adres email lub hasło</h2>`;
			return logedIn;
		}
	}
}
