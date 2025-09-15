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
    { name: "Turtle", image: "images/turtle.jpeg" },
    // Added Pig to the animals array
    { name: "Pig", image: "images/pig.jpg" }
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

// Added the new "Other" items array
const otherItems = [
    { name: "Ball", image: "images/ball.jpeg" },
    { name: "Bed", image: "images/bed.jpg" },
    { name: "Boat", image: "images/boat.jpeg" },
    { name: "Book", image: "images/book.jpg" },
    { name: "Bottle", image: "images/bottle.jpg" },
    { name: "Brush", image: "images/brush.jpg" },
    { name: "Bus", image: "images/bus.jpg" },
    { name: "Car", image: "images/car.jpg" },
    { name: "Chair", image: "images/chair.jpg" },
    { name: "Cup", image: "images/cup.jpeg" },
    { name: "Hat", image: "images/hat.jpg" },
    { name: "Plane", image: "images/plane.jpg" },
    { name: "Plate", image: "images/plate.jpg" },
    { name: "Shoe", image: "images/shoe.jpg" },
    { name: "Sock", image: "images/sock.jpg" },
    { name: "Spoon", image: "images/spoon.jpg" },
    { name: "Table", image: "images/table.jpg" },
    { name: "Train", image: "images/train.jpg" },
    { name: "Truck", image: "images/truck.jpeg" },
    { name: "Teddy", image: "images/teddy.jpg" }
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

// Getting the new elements from the HTML
const otherTile = document.getElementById("other-tile");
const backBtn = document.getElementById("back-btn");

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
    // Using 'flex' display for tiles for better layout
    categoryTiles.style.display = "none";
    flashcardContainer.style.display = "block";
    displayFlashcard();
}

// Function to go back to the home/category selection screen
function showHome() {
    flashcardContainer.style.display = "none";
    categoryTiles.style.display = "flex";
}

function handleNext() {
    currentIndex = (currentIndex + 1) % currentCategory.length;
    displayFlashcard();
}

function handlePrev() {
    currentIndex = (currentIndex - 1 + currentCategory.length) % currentCategory.length;
    displayFlashcard();
}

// Adding event listeners for the new elements
animalsTile.addEventListener("click", () => {
    showCategory(animals);
});

fruitsTile.addEventListener("click", () => {
    showCategory(fruits);
});

otherTile.addEventListener("click", () => {
    showCategory(otherItems);
});

backBtn.addEventListener("click", showHome);
nextBtn.addEventListener("click", handleNext);
prevBtn.addEventListener("click", handlePrev);
