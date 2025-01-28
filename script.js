// JavaScript for smooth scrolling

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".navbar a");

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth",
                });
            }
        });
    });
});
