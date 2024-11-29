// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
const submitBtn = document.getElementById("submit-button");
const contactPage = document.getElementById("contact-page");

function submitClickerHandler() {
    contactPage.innerHTML = "<p>Thank you for your message!</p>";
    contactPage.classList.add("large-text");
}

submitBtn.addEventListener("click", submitClickerHandler);


// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

