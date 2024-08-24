const modal = document.getElementById("contact-email-copy");

function copyEmail() {
	navigator.clipboard.writeText("contact@emiltodirascu.com");

	modal.show();
	setTimeout(() => {
		modal.close();
	}, 2500);
}

window.onscroll = function () {
	stickyNavbar();
};

const navbar = document.getElementsByClassName("navbar")[0];
const placeholder = document.getElementsByClassName("navbar-placeholder")[0];
const sticky = navbar.offsetTop;
function stickyNavbar() {
	if (window.scrollY >= sticky) {
		navbar.classList.add("sticky");
		placeholder.style.display = "block";
	} else {
		navbar.classList.remove("sticky");
		placeholder.style.display = "none";
	}
}
