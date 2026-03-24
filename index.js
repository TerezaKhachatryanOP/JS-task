import { cardDetails } from "./constants.js";

const cards = document.querySelector(".cards");
function createCard() {
    cardDetails.forEach((card) => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.classList.add(`card-${card.name.toLowerCase()}`);
        cardElement.innerHTML = `
            <img src=${card.img} alt=${card.name} class="card-img">
            <h1 class="card-title">${card.name}</h1>
            <p class="card-desc">${card.decs}</p>
        `
        const button = document.createElement("button");
        button.classList.add("card-btn");
        button.textContent = "Learn More";
        cardElement.appendChild(button);
        cards.appendChild(cardElement);
    })
}
createCard()