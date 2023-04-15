var lastScrollTop = 0;
navbar = document.getElementById("navbar");
window.addEventListener("scroll", function () {
	var scrollTop = window.pageYOffset || document.documentElement.scrolltop;
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

function copyEmail() {
	navigator.clipboard.writeText("contact.emil.todirascu@gmail.com");
	alert("Copied email to clipboard.");
}
