const animals = [
    { name: "Cat", image: "images/cat.jpeg" },
    { name: "Dog", image: "images/dog.jpeg" },
    { name: "Cow", image: "images/cow.jpeg" },
    { name: "Horse", image: "images/horse.jpeg" },
    { name: "Sheep", image: "images/sheep.jpeg" },
    { name: "Goat", image: "images/goat.jpeg" },
    { name: "Duck", image: "images/duck.jpeg" },
    { name: "Hen", image: "images/hen.jpeg" },
    { name: "Fish", image: "images/fish.jpeg" },
    { name: "Bird", image: "images/bird.jpeg" },
    { name: "Rabbit", image: "images/rabbit.jpeg" },
    { name: "Lion", image: "images/lion.jpeg" },
    { name: "Tiger", image: "images/tiger.jpeg" },
    { name: "Elephant", image: "images/elephant.jpeg" },
    { name: "Monkey", image: "images/monkey.jpeg" },
    { name: "Bear", image: "images/bear.jpeg" },
    { name: "Zebra", image: "images/zebra.jpeg" },
    { name: "Giraffe", image: "images/giraffe.jpeg" },
    { name: "Frog", image: "images/frog.jpeg" },
    { name: "Turtle", image: "images/turtle.jpeg" }
];

const fruits = [
    { name: "Apple", image: "images/apple.jpeg" },
    { name: "Banana", image: "images/banana.jpeg" },
    { name: "Orange", image: "images/orange.jpeg" },
    { name: "Mango", image: "images/mango.jpeg" },
    { name: "Grapes", image: "images/grapes.jpeg" },
    { name: "Pineapple", image: "images/pineapple.jpeg" },
    { name: "Strawberry", image: "images/strawberry.jpeg" },
    { name: "Blueberry", image: "images/blueberry.jpeg" },
    { name: "Watermelon", image: "images/watermelon.jpeg" },
    { name: "Papaya", image: "images/papaya.jpeg" },
    { name: "Kiwi", image: "images/kiwi.jpeg" },
    { name: "Lemon", image: "images/lemon.jpeg" },
    { name: "Cherry", image: "images/cherry.jpeg" },
    { name: "Peach", image: "images/peach.jpeg" },
    { name: "Pear", image: "images/pear.jpeg" },
    { name: "Coconut", image: "images/coconut.jpeg" },
    { name: "Plum", image: "images/plum.jpeg" },
    { name: "Pomegranate", image: "images/pomegranate.jpeg" },
    { name: "Guava", image: "images/guava.jpeg" },
    { name: "Melon", image: "images/melon.jpeg" }
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
