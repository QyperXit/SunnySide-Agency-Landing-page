let hamburger = document.querySelector(".fa-bars");
let hide = document.querySelector(".hide");
let modal = document.querySelector(".modal");

hamburger.addEventListener("click", (e) => {
	modal.classList.toggle("hidden");

	// Perform actions based on the current state of the modal
	if (modal.classList.contains("hidden")) {
		// Perform actions when modal is hidden
	} else {
		// Perform actions when modal is not hidden
	}
});

function scrollToSection(client1) {
	var section = document.getElementById(client1);
	section.scrollIntoView({ behavior: "smooth" });
}

function scrollToSection(social) {
	var section = document.getElementById(social);
	section.scrollIntoView({ behavior: "smooth" });
}

function scrollToSection(services) {
	var section = document.getElementById(services);
	section.scrollIntoView({ behavior: "smooth" });
}

// Close the nav if the window is resized
window.addEventListener("resize", () => {
	if (window.innerWidth < 750) {
		modal.classList.add("hidden");
	}
});
