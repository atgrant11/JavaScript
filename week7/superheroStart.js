//Andrew Grant DOM exercise 11/20/2025

// Superhero Theme Switcher – Your Mission!
const buttons = document.querySelector('#buttons');
//add the variable that targets the quote element in the page

// This object holds all hero themes

// YOUR JOB: Change Superman, Wonderwoman, and the Flash bg color, text color, and quotes below!
const heroes = {
  batman: { bg: '#000000', text: '#ffffff', quote: 'I am vengeance. I am the night. I AM BATMAN!' },
  superman: { bg: '#043efaff', text: '#f9fd04ff', quote: 'Up, Up, and Away!' },
  wonderwoman: { bg: '#ffffffff', text: '#043efaff', quote: 'You better tell the truth or my lasso will' },
  flash: { bg: '#fa0404ff', text: '#fffb00ff', quote: 'Im here to chew bubblegum and run REALLY FAST and im all out of bubblegum!' },
};

// ONE event listener that works for ALL buttons
// What variable holds the buttons element from the webpage?

buttons.addEventListener('click', function(event) {
    // Only run if a hero button was clicked
  if (event.target.classList.contains('hero-btn')) {
    // Get which hero was clicked
    const hero = event.target.getAttribute('data-hero');
    // Get that hero's theme from the object
    const theme = heroes[hero];
    // Change the webpage 
    document.body.style.backgroundColor = theme.bg;
    document.body.style.color = theme.text;
    quote.textContent = theme.quote;
  }
});