// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});


// ================= MENU FILTER =================

const filterButtons = document.querySelectorAll(".filter-btn");
const coffeeCards = document.querySelectorAll(".coffee-card");

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const category = button.getAttribute("data-category");

        coffeeCards.forEach(function (card) {

            if (
                category === "all" ||
                card.getAttribute("data-category") === category
            ) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});


// ================= ORDER BUTTON =================

const orderButtons = document.querySelectorAll(".order-btn");

orderButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const coffeeName =
            button.parentElement.querySelector("h3").textContent;

        alert(coffeeName + " has been added to your order! ☕");

    });

});


// ================= SPECIAL OFFER =================

const offerBtn = document.getElementById("offerBtn");

offerBtn.addEventListener("click", function () {

    alert("Your special offer has been claimed! 🎉");

});


// ================= CONTACT FORM =================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {

        alert("Please fill in all fields.");

        return;
    }

    alert("Thank you, " + name + "! Your message has been sent. ☕");

    contactForm.reset();

});