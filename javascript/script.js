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

document.getElementById("my-form").addEventListener("submit", function (event) {
	event.preventDefault(); // Prevent the default form submission behavior

	var formData = new FormData(event.target);

	var xhr = new XMLHttpRequest();
	xhr.open(
		"POST",
		"https://formsubmit.co/b53dd580e275bfd553a5bd27fc8d42ce",
		true
	);

	xhr.onreadystatechange = function () {
		if (xhr.readyState === XMLHttpRequest.DONE) {
			if (xhr.status === 200) {
				alert("Message sent!\nI will get back to you as soon as possible.");
				event.target.reset();
			} else {
				alert(
					"There was a problem sending the message. Please contact me directly through the links below or try again later."
				);
			}
		}
	};

	// Send the form data
	xhr.send(formData);
});
