const key = "users";
export const registrationManager = {
	add(user) {
		if (!user.email.includes("@")) {
			window.alert("Podaj poprawny adres e-mail");
		} else {
			const registeredUsersLS = localStorage.getItem(key);
			if (registeredUsersLS === null) {
				fetch("http://localhost:3000/users")
					.then((response) => response.json())
					.then((users) => {
						const registeredUsers = users.map((user) => user);
						console.log(user.email, registeredUsers);
						registeredUsers.push(user);
						const serializedUsersContents =
							JSON.stringify(registeredUsers);
						localStorage.setItem(key, serializedUsersContents);
					});
			} else {
				const usersContents = JSON.parse(registeredUsersLS);
				usersContents.push(user);
				serializedUsersContents = JSON.stringify(usersContents);
				localStorage.setItem(key, serializedUsersContents);
			}
			let section = document.querySelector("section");

			section.innerHTML = `<h2>Dziękujemy za rejestrację, zaloguj się i korzystaj!</h2>`;
			return console.log(localStorage.users);
		}
	},
};
