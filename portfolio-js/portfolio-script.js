const navLinks = document.querySelectorAll(".nav-bar li a");
navLinks.forEach(link => {
	link.addEventListener("click", () => {
		if (window.innerWidth <= 500) {
			var navbar = document.querySelector(".nav-bar");
			navbar.classList.remove("open");
		}
	});
});

function desplegar() {
	if (window.innerWidth <= 500) {
		var navbar = document.querySelector(".nav-bar");
		navbar.classList.toggle("open");
	}
}

const navSlide = () => {
	const hamburger = document.querySelector(".hamburger");
	const navbar = document.querySelector(".nav-bar");
	const navLinks = document.querySelectorAll(".nav-bar li");

	hamburger.onclick = () => {

		if (window.innerWidth <= 500) {
			navbar.classList.toggle("open");
		} else {
			navbar.classList.toggle("nav-active");

			//Animation links
			navLinks.forEach((link, index) => {
				if (link.style.animation) {
					link.style.animation = "";
				} else {
					link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
				}
			});
		}

		//Hamburger animation
		hamburger.classList.toggle("toggle");
	};
};

navSlide();  