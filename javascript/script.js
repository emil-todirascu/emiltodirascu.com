var lastScrollTop = 0;
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", function () {
	var scrollTop = window.scrollY || document.documentElement.scrolltop;
	if (scrollTop >= lastScrollTop || lastScrollTop == undefined) {
		navUp();
	} else {
		navDown();
	}
	lastScrollTop = scrollTop;
});

function navUp() {
	document.getElementById("navbar").style.top = "-6rem";
}

function navDown() {
	document.getElementById("navbar").style.top = "0rem";
}

const modal = document.getElementById("contact-email-copy");
console.log(modal);
function copyEmail() {
	navigator.clipboard.writeText("contact@emiltodirascu.com");

	// show modal for 2 seconds
	modal.show();
	setTimeout(() => {
		modal.close();
	}, 2500);
}
