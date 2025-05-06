// DOM Elements
const categorySelect = document.getElementById("categorySelect");
const quoteText = document.getElementById("quoteText");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const randomBtn = document.getElementById("randomBtn");
const modeToggle = document.getElementById("modeToggle");
const increaseFont = document.getElementById("increaseFont");
const decreaseFont = document.getElementById("decreaseFont");

// Quote Data
const quotes = {
  science: [
    "Science is a way of thinking much more than it is a body of knowledge. – Carl Sagan",
    "The good thing about science is that it's true whether or not you believe in it. – Neil deGrasse Tyson",
    "Equipped with his five senses, man explores the universe around him and calls the adventure Science. – Edwin Hubble",
    "Science knows no country, because knowledge belongs to humanity. – Louis Pasteur",
    "Somewhere, something incredible is waiting to be known. – Carl Sagan",
    "The important thing is not to stop questioning. Curiosity has its own reason for existing. – Albert Einstein",
    "Science and everyday life cannot and should not be separated. – Rosalind Franklin",
  ],
  inspiration: [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. – Zig Ziglar",
    "The best way to get started is to quit talking and begin doing. – Walt Disney",
    "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
  ],
  love: [
    "Love is composed of a single soul inhabiting two bodies. – Aristotle",
    "To love and be loved is to feel the sun from both sides. – David Viscott",
    "Where there is love there is life. – Mahatma Gandhi",
    "Love isn't something you find. Love is something that finds you. – Loretta Young",
    "You know you're in love when you can't fall asleep because reality is finally better than your dreams. – Dr. Seuss",
    "The best thing to hold onto in life is each other. – Audrey Hepburn",
    "Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope. – Maya Angelou",
    "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage. – Lao Tzu",
  ],
};

let currentCategory = "science";
let currentIndex = 0;
let currentFontSize = 1.25;

// Initial Render
function renderQuote() {
  const selectedQuotes = quotes[currentCategory];
  quoteText.textContent = selectedQuotes[currentIndex];
  quoteText.style.fontSize = `${currentFontSize}rem`;
}

renderQuote();

//For Category Change
categorySelect.addEventListener("change", () => {
  currentCategory = categorySelect.value;
  currentIndex = 0;
  renderQuote();
});

// Next, Prev and Random Quote Button
nextBtn.addEventListener("click", () => {
  const selectedQuotes = quotes[currentCategory];
  currentIndex = (currentIndex + 1) % selectedQuotes.length;
  renderQuote();
});

prevBtn.addEventListener("click", () => {
  const selectedQuotes = quotes[currentCategory];
  currentIndex =
    (currentIndex - 1 + selectedQuotes.length) % selectedQuotes.length;
  renderQuote();
});

randomBtn.addEventListener("click", () => {
  const selectedQuotes = quotes[currentCategory];
  currentIndex = Math.floor(Math.random() * selectedQuotes.length);
  renderQuote();
});

// Dark Mode Toggle
modeToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark");
  });

// Font Size
increaseFont.addEventListener("click", () => {
  currentFontSize += 0.1;
  renderQuote();
});

decreaseFont.addEventListener("click", () => {
  if (currentFontSize > 0.5) {
    currentFontSize -= 0.1;
    renderQuote();
  }
});
