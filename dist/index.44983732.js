let hamburger = document.querySelector(".fa-bars");
let hide = document.querySelector(".hide");
let modal = document.querySelector(".modal");
hamburger.addEventListener("click", (e)=>{
    modal.classList.toggle("hidden");
    // Perform actions based on the current state of the modal
    modal.classList.contains("hidden");
});
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({
        behavior: "smooth"
    });
}
// Example usage:
// scrollToSection("client1");
// scrollToSection("social");
// scrollToSection("services");
// Close the nav if the window is resized
window.addEventListener("resize", ()=>{
    if (window.innerWidth < 750) modal.classList.add("hidden");
});

//# sourceMappingURL=index.44983732.js.map
