"use strict";

const contactForm = document.getElementById("contactForm");
const responseMessage = document.getElementById("responseMessage");

contactForm.addEventListener("submit", function (event) {
event.preventDefault();


const name = document.getElementById("name").value.trim();

if (!name) {
    responseMessage.textContent = "Please enter your name.";
    return;
}

responseMessage.textContent =
    `Thank you, ${name}! Your message has been recorded in this demo.`;

contactForm.reset();


});