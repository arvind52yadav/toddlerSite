const animals = [
    { name: "Cat", image: "https://googleusercontent.com/image_collection/image_retrieval/3469785087538742540_0" },
    { name: "Dog", image: "https://googleusercontent.com/image_collection/image_retrieval/3698286948941955453_0" },
    { name: "Cow", image: "https://googleusercontent.com/image_collection/image_retrieval/1336040822648439976_0" },
    { name: "Horse", image: "https://googleusercontent.com/image_collection/image_retrieval/4827038317769530419_0" },
    { name: "Sheep", image: "https://googleusercontent.com/image_collection/image_retrieval/12975949667794711696_0" },
    { name: "Goat", image: "https://googleusercontent.com/image_collection/image_retrieval/12056977461974720972_0" },
    { name: "Duck", image: "https://googleusercontent.com/image_collection/image_retrieval/1031737728514571066_0" },
    { name: "Hen", image: "https://googleusercontent.com/image_collection/image_retrieval/4678229202575204781_0" },
    { name: "Fish", image: "https://googleusercontent.com/image_collection/image_retrieval/14995079782548818274_0" },
    { name: "Bird", image: "https://googleusercontent.com/image_collection/image_retrieval/6292592751433246473_0" },
    { name: "Rabbit", image: "https://googleusercontent.com/image_collection/image_retrieval/1457169542718991472_0" },
    { name: "Lion", image: "https://googleusercontent.com/image_collection/image_retrieval/10313061872124986872_0" },
    { name: "Tiger", image: "https://googleusercontent.com/image_collection/image_retrieval/11507776071823835758_0" },
    { name: "Elephant", image: "https://googleusercontent.com/image_collection/image_retrieval/18396195170509000977_0" },
    { name: "Monkey", image: "https://googleusercontent.com/image_collection/image_retrieval/4183861805141974751_0" },
    { name: "Bear", image: "https://googleusercontent.com/image_collection/image_retrieval/2569584732104523955_0" },
    { name: "Zebra", image: "https://googleusercontent.com/image_collection/image_retrieval/12023023247954930263_0" },
    { name: "Giraffe", image: "https://googleusercontent.com/image_collection/image_retrieval/10385805364433140502_0" },
    { name: "Frog", image: "https://googleusercontent.com/image_collection/image_retrieval/15264386927909322230_0" },
    { name: "Turtle", image: "https://googleusercontent.com/image_collection/image_retrieval/16075939227653518901_0" }
];

const fruits = [
    { name: "Apple", image: "https://googleusercontent.com/image_collection/image_retrieval/16518694356068693616_0" },
    { name: "Banana", image: "https://googleusercontent.com/image_collection/image_retrieval/2252587650617642401_0" },
    { name: "Orange", image: "https://googleusercontent.com/image_collection/image_retrieval/2879543419651495932_0" },
    { name: "Mango", image: "https://googleusercontent.com/image_collection/image_retrieval/3909774676176527506_0" },
    { name: "Grapes", image: "https://googleusercontent.com/image_collection/image_retrieval/12401337695873111206_0" },
    { name: "Pineapple", image: "https://googleusercontent.com/image_collection/image_retrieval/6312151664183617154_0" },
    { name: "Strawberry", image: "https://googleusercontent.com/image_collection/image_retrieval/4891281485437273781_0" },
    { name: "Blueberry", image: "https://googleusercontent.com/image_collection/image_retrieval/17696205776100913926_0" },
    { name: "Watermelon", image: "https://googleusercontent.com/image_collection/image_retrieval/17589920216440101736_0" },
    { name: "Papaya", image: "https://googleusercontent.com/image_collection/image_retrieval/14897258079527947196_0" },
    { name: "Kiwi", image: "https://googleusercontent.com/image_collection/image_retrieval/13812239459523277028_0" },
    { name: "Lemon", image: "https://googleusercontent.com/image_collection/image_retrieval/17823521255530752119_0" },
    { name: "Cherry", image: "https://googleusercontent.com/image_collection/image_retrieval/11690987132960684279_0" },
    { name: "Peach", image: "https://googleusercontent.com/image_collection/image_retrieval/14299446468755673418_0" },
    { name: "Pear", image: "https://googleusercontent.com/image_collection/image_retrieval/1498144216839556828_0" },
    { name: "Coconut", image: "https://googleusercontent.com/image_collection/image_retrieval/13927622839958066557_0" },
    { name: "Plum", image: "https://googleusercontent.com/image_collection/image_retrieval/8856950275816223297_0" },
    { name: "Pomegranate", image: "https://googleusercontent.com/image_collection/image_retrieval/2361795779647247738_0" },
    { name: "Guava", image: "https://googleusercontent.com/image_collection/image_retrieval/12027599723238618063_0" },
    { name: "Melon", image: "https://googleusercontent.com/image_collection/image_retrieval/10317132537233256037_0" }
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
