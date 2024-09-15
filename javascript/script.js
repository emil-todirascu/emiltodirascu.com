const modal = document.getElementById("contact-email-copy");

function copyEmail() {
	navigator.clipboard.writeText("contact@emiltodirascu.com");

	modal.show();
	setTimeout(() => {
		modal.close();
	}, 2500);
}
