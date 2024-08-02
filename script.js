const flashcards = [
    { question: '10-7', answer: 'Out of service' },
    { question: '10-8', answer: 'In service' },
    { question: '10-9', answer: 'Repeat' },
    { question: '10-10', answer: 'Fight' },
    { question: '10-20', answer: 'Location' },
    { question: '10-23', answer: 'Arrived on scene' },
    { question: '10-32', answer: 'Person with gun' },
    { question: '10-34', answer: 'Drug sale' },
    { question: '10-37', answer: 'Suspicious activity' },
    { question: '10-38', answer: 'Traffic stop' },
    { question: '10-41', answer: 'On duty' },
    { question: '10-42', answer: 'Off duty' },
    { question: '10-47', answer: 'Injured person' },
    { question: '10-50', answer: 'Car crash' },
    { question: '10-76', answer: 'En route' },
    { question: '10-80', answer: 'Chase in progress' },
    { question: '10-90', answer: 'Bank/vault robbery' },
    { question: '10-95', answer: 'Suspect in custody' },
    { question: '13A', answer: 'Officer down intentional' },
    { question: '13B', answer: 'Officer down' },
    { question: '14A', answer: 'Doctor down intentional' },
    { question: '14B', answer: 'Doctor down' }
];

let currentIndex = 0;

// Function to display a random flashcard
function displayRandomFlashcard() {
    // Get a random index
    const randomIndex = Math.floor(Math.random() * flashcards.length);
    // Select the flashcard at that index
    const flashcard = flashcards[randomIndex];
    // Update the question and answer elements
    questionElement.textContent = flashcard.question;
    answerElement.textContent = flashcard.answer;
    // Update the current index
    currentIndex = randomIndex;
}

// Function to show the next flashcard
function nextFlashcard() {
    displayRandomFlashcard();
    cardElement.classList.remove('flipped');
}

// Elements
const cardElement = document.querySelector('.card');
const questionElement = document.querySelector('.question');
const answerElement = document.querySelector('.answer');
const nextButton = document.getElementById('next');

// Add event listener to flip the card on click
cardElement.addEventListener('click', () => {
    cardElement.classList.toggle('flipped');
});

// Add event listener to the next button
nextButton.addEventListener('click', nextFlashcard);

// Display the first flashcard initially
displayRandomFlashcard();
