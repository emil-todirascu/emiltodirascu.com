const modal = document.getElementById("contact-email-copy");

function copyEmail() {
	navigator.clipboard.writeText("contact@emiltodirascu.com");

	modal.show();
	setTimeout(() => {
		modal.close();
	}, 2500);
}
// When the user scrolls the page, execute myFunction
window.onscroll = function () {
	myFunction();
};

const navbar = document.getElementsByClassName("navbar")[0];
const sticky = navbar.offsetTop;
function myFunction() {
	if (window.scrollY >= sticky) {
		navbar.classList.add("sticky");
	} else {
		navbar.classList.remove("sticky");
	}
}
