//scroll-up button which has been used in the UI design is implemented
const scrollToTop = document.getElementById("scroll-to-top");
let dataShow = false;

window.addEventListener("scroll", () => {
    if (window.scrollY > 50 && !dataShow) {
        scrollToTop.setAttribute("data-show", "true");
        dataShow = true;
    }

    if (window.scrollY <= 50 && dataShow) {
        scrollToTop.setAttribute("data-show", "false");
        dataShow = false;
    }
});

scrollToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});