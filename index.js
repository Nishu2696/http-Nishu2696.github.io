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

function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "marcnishaanth2696@gmail.com",
	Password : "Hakunamatata26!",
	To : 'nishaanth2696@gmail.com',
	From : "marcnishaanth2696@gmail.com",
	Subject : "hello brother",
	Body : "enjoy your vacation",
	}).then(
		message => alert("mail sent successfully")
	);
}