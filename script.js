const animals = [
    { name: "Cat", image: "images/cat.jpg" },
    { name: "Dog", image: "images/dog.jpg" },
    { name: "Cow", image: "images/cow.jpg" },
    { name: "Horse", image: "images/horse.jpg" },
    { name: "Sheep", image: "images/sheep.jpg" },
    { name: "Goat", image: "images/goat.jpg" },
    { name: "Duck", image: "images/duck.jpg" },
    { name: "Hen", image: "images/hen.jpg" },
    { name: "Fish", image: "images/fish.jpg" },
    { name: "Bird", image: "images/bird.jpg" },
    { name: "Rabbit", image: "images/rabbit.jpg" },
    { name: "Lion", image: "images/lion.jpg" },
    { name: "Tiger", image: "images/tiger.jpg" },
    { name: "Elephant", image: "images/elephant.jpg" },
    { name: "Monkey", image: "images/monkey.jpg" },
    { name: "Bear", image: "images/bear.jpg" },
    { name: "Zebra", image: "images/zebra.jpg" },
    { name: "Giraffe", image: "images/giraffe.jpg" },
    { name: "Frog", image: "images/frog.jpg" },
    { name: "Turtle", image: "images/turtle.jpg" }
];

const fruits = [
    { name: "Apple", image: "images/apple.jpg" },
    { name: "Banana", image: "images/banana.jpg" },
    { name: "Orange", image: "images/orange.jpg" },
    { name: "Mango", image: "images/mango.jpg" },
    { name: "Grapes", image: "images/grapes.jpg" },
    { name: "Pineapple", image: "images/pineapple.jpg" },
    { name: "Strawberry", image: "images/strawberry.jpg" },
    { name: "Blueberry", image: "images/blueberry.jpg" },
    { name: "Watermelon", image: "images/watermelon.jpg" },
    { name: "Papaya", image: "images/papaya.jpg" },
    { name: "Kiwi", image: "images/kiwi.jpg" },
    { name: "Lemon", image: "images/lemon.jpg" },
    { name: "Cherry", image: "images/cherry.jpg" },
    { name: "Peach", image: "images/peach.jpg" },
    { name: "Pear", image: "images/pear.jpg" },
    { name: "Coconut", image: "images/coconut.jpg" },
    { name: "Plum", image: "images/plum.jpg" },
    { name: "Pomegranate", image: "images/pomegranate.jpg" },
    { name: "Guava", image: "images/guava.jpg" },
    { name: "Melon", image: "images/melon.jpg" }
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
        return; 
    }
    const item = currentCategory[currentIndex];
    cardImage.src = item.image;
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

animalsTile.addEventListener("click", () => {
    showCategory(animals);
});

fruitsTile.addEventListener("click", () => {
    showCategory(fruits);
});

nextBtn.addEventListener("click", handleNext);
prevBtn.addEventListener("click", handlePrev);
