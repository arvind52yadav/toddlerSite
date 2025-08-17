const animals = [
    { name: "Dog", image: "https://googleusercontent.com/image_collection/image_retrieval/3698286948941955453_0" },
    { name: "Cat", image: "https://googleusercontent.com/image_collection/image_retrieval/3469785087538742540_0" },
    { name: "Lion", image: "https://googleusercontent.com/image_collection/image_retrieval/10313061872124986872_0" },
    { name: "Elephant", image: "https://googleusercontent.com/image_collection/image_retrieval/18396195170509000977_0" },
    { name: "Tiger", image: "https://googleusercontent.com/image_collection/image_retrieval/11507776071823835758_0" },
    { name: "Bear", image: "https://googleusercontent.com/image_collection/image_retrieval/2569584732104523955_0" },
    { name: "Zebra", image: "https://googleusercontent.com/image_collection/image_retrieval/12023023247954930263_0" },
    { name: "Duck", image: "https://googleusercontent.com/image_collection/image_retrieval/1031737728514571066_0" }
];

const fruits = [
    { name: "Apple", image: "https://googleusercontent.com/image_collection/image_retrieval/16518694356068693616_0" },
    { name: "Banana", image: "https://googleusercontent.com/image_collection/image_retrieval/2252587650617642401_0" },
    { name: "Orange", image: "https://googleusercontent.com/image_collection/image_retrieval/2879543419651495932_0" },
    { name: "Strawberry", image: "https://googleusercontent.com/image_collection/image_retrieval/4891281485437273781_0" },
    { name: "Grapes", image: "https://googleusercontent.com/image_collection/image_retrieval/12401337695873111206_0" },
    { name: "Mango", image: "https://googleusercontent.com/image_collection/image_retrieval/3909774676176527506_0" },
    { name: "Kiwi", image: "https://googleusercontent.com/image_collection/image_retrieval/13812239459523277028_0" },
    { name: "Pineapple", image: "https://googleusercontent.com/image_collection/image_retrieval/6312151664183617154_0" }
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
