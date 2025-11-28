// Step 1: Select the mood display element from the DOM
const moodDisplay = document.querySelector('#moodDisplay');
const buttons = document.querySelector('#buttons');

// Step 2: Define an object with configurations for each mood
const moods = {
    happy: { bg: '#ff9800', text: '#3e2723', message: 'Pumpkin Spice Everything!'},
    calm: { bg: '#1ac6ff', text: '#ffffff', message: 'Dont worry about a thing!' },
    excited: { bg: '#ff3333', text: '#000000', message: 'I cant wait for finals to be over!' },
    chill: { bg: '#007acc', text: '#ffffff', message: 'Nothing but vibes' },
    mysterious: { bg: '#6b00b3', text: '#ffffff', message: 'Who knows what lies ahead?' },
};

// Step 3: Add event listener with delegation
buttons.addEventListener('click', function(event) {
    // Step 4: Get the mood and config inside the listener
    if (event.target.classList.contains('mood-btn')) {
        const mood = event.target.getAttribute('data-mood');
        const theme = moods[mood];
        
        // Step 5: Update the page styles and message
        document.body.style.backgroundColor = theme.bg;
        document.body.style.color = theme.text;
        moodDisplay.textContent = theme.message;
    }
});
