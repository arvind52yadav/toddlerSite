const animals = [
    { name: "Dog", image: "dog.jpg" },
    { name: "Cat", image: "cat.jpg" },
    { name: "Lion", image: "lion.jpg" },
    { name: "Elephant", image: "elephant.jpg" },
];

const fruits = [
    { name: "Apple", image: "apple.jpg" },
    { name: "Banana", image: "banana.jpg" },
    { name: "Orange", image: "orange.jpg" },
    { name: "Strawberry", image: "strawberry.jpg" },
];

let currentCategory = [];
let currentIndex = 0;

const flashcardContainer = document.querySelector(".flashcard-container");
const cardImage = document.getElementById("card-image");
const cardName = document.getElementById("card-name");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const animalsTile = document.getElementById("animals-tile");
const fruitsTile = document.getElementById("fruits-tile");
const categoryTiles = document.querySelector(".category-tiles");

function displayFlashcard() {
    if (currentCategory.length === 0) {
        return; // Don't do anything if no category is selected
    }
    const item = currentCategory[currentIndex];
    cardImage.src = `images/${item.image}`;
    cardName.textContent = item.name;
}

function showCategory(category) {
    currentCategory = category;
    currentIndex = 0;
    categoryTiles.style.display = "none";
    flashcardContainer.style.display = "block";
    displayFlashcard();
}

function handleNext() {
    currentIndex = (currentIndex + 1) % currentCategory.length;
    displayFlashcard();
}

function handlePrev() {
    currentIndex = (currentIndex - 1 + currentCategory.length) % currentCategory.length;
    displayFlashcard();
}

// Event Listeners for the tiles
animalsTile.addEventListener("click", () => {
    showCategory(animals);
});

fruitsTile.addEventListener("click", () => {
    showCategory(fruits);
});

// Event listeners for the flashcard buttons
nextBtn.addEventListener("click", handleNext);
prevBtn.addEventListener("click", handlePrev);
