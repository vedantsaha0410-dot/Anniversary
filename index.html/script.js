// 1. Array of Jokes/Messages
const jokes = [
    "Guess kro 1 kilo lohe aur 1 kilo samose kon sa jyada bhari hoga?.....😂😂😂😂😂🤣🤣🤣🤣🤣 1kilo samosa kyuki chutney bhi toh rhegi!(Dumbo)",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "A termite walks into a bar and asks, 'Is the bar tender here?'",
    "Did you hear about the mathematician who’s afraid of negative numbers? He’ll stop at nothing to avoid them.",
    // **PRO-TIP: Add 5-10 personalized inside jokes or sweet messages here!**
    "**Sweet Message:** Every moment with you is my favorite memory. Happy Anniversary!",
    "**Another Joke:** What kind of car does an egg drive? A yolkswagen!",
    "**Personal Message:** I knew I loved you when you smiled at my joke in the class i felled for you and wanted to have you i could have done anything for you at that time to have u remember i and ur bestfriend'y' convincing u to have me.",
];

// 2. Get the elements from the HTML
const button = document.getElementById('anniversaryButton');
const jokeTextElement = document.getElementById('jokeText');
const container = document.querySelector('.container');

// 3. Function to select a random joke
function getRandomJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
}

// 4. Function to change the background and show the joke
let clickCount = 0;

function handleButtonClick() {
    // A. Increment the counter
    clickCount++;
    
    // B. Display a new joke
    jokeTextElement.textContent = getRandomJoke();
    
    // C. Change the button text
    button.textContent = `Give Me Another! (${clickCount})`;
    
    // D. Add a fun, celebratory style change (e.g., a sparkle effect or color flash)
    container.style.boxShadow = `0 0 40px ${clickCount % 2 === 0 ? '#ff6b6b' : '#ffc3a0'}`;
    
    // E. (The grand finale interaction!) After 5 clicks, show a special message
    if (clickCount >= 5) {
        button.textContent = "Click for the GRAND FINALE!";
    }
    
    if (clickCount === 6) {
        // Change everything for the final surprise!
        document.body.style.background = 'linear-gradient(45deg, #ffd700, #ff8c00)';
        container.style.backgroundColor = '#ffe0b2';
        container.innerHTML = `
            <h2>Surprise! You unlocked the secret message!</h2>
            <p style="font-size: 1.5em; color: #d63384; font-weight: bold;">
                Happy Anniversary, my love! You are the best part of my life, and that's no joke.
            </p>
            <p style="font-size: 0.9em;">(Yaar! kaash tere saath hota ye din celebrate krne ko but kabhi aur sahi konsa mai K2 jaa rha oe maybe dunno!(NVM the case agli baar sahi but saath rhenge hum humesha !!!{I love YOU!} 😉)</p>
        `;
    }
}

// 5. Attach the function to the button click event
button.addEventListener('click', handleButtonClick);

