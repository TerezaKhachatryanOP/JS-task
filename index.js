import { cardDetails } from "./constants.js";

const cards = document.querySelector(".cards");
function createCard() {
    cardDetails.forEach((card) => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.classList.add(`card-${card.name.toLowerCase()}`);
        cardElement.innerHTML = `
            <div class="card-content">
                <img src=${card.img} alt=${card.name} class="card-img">
                <h1 class="card-title">${card.name}</h1>
                <p class="card-desc">${card.decs}</p>
            </div>
        `
        const button = document.createElement("button");
        button.classList.add("card-btn");
        button.textContent = "Learn More";

        if (card.name.toUpperCase() === "SUVS") {
            button.addEventListener("click", () => {
                window.open("https://www.caranddriver.com/rankings/best-suvs", "_blank");
            });
        } else if (card.name.toUpperCase() === "SEDANS") {
            button.addEventListener("click", () => {
                window.open("https://www.caranddriver.com/rankings/best-sedans", "_blank");
            });
        } else if (card.name.toUpperCase() === "LUXURY") {
            button.addEventListener("click", () => {
                window.open("https://www.caranddriver.com/rankings/best-luxury-cars", "_blank");
            });
        }
        cardElement.appendChild(button);
        cards.appendChild(cardElement);
    })
}
createCard()