// This creates the Mad Libs when the "Create Adventure!" button is clicked.
document.querySelector("#submit-btn").addEventListener("click", createStory);

// This function creates the Mad Libs itself
function createStory() {

    // This prevents the page from automatically reloading
    event.preventDefault();

    /* This takes all of the entries from the forms fields
    and actually creates the story by plugging them into the
    story below. */
    const bodyPart = document.querySelector("#body-part").value;
    const adj = document.querySelector("#adj").value;
    const verb = document.querySelector("#verb").value;
    const noun1 = document.querySelector("#noun1").value;
    const noun2 = document.querySelector("#noun2").value;
    const job = document.querySelector("#job").value;
    const animal = document.querySelector("#animal").value;
    let num = Number(document.querySelector("#num").value);

    let doubleNum = (num * 2).toFixed(1);

    // This if / else determines what ending the user gets based on some conditions.
    let ending;
    if (noun1.length < 4 || doubleNum <= 10) {
        ending = ` The ${animal} weren't threatening after all and were curious about Karlach's ${noun1}`;
    } else if (noun1.length >= 5 && doubleNum > 11) {
        ending = ` Luckily, Astarion's expertise as a ${job} helped the party outsmart and escape the ${animal} unharmed.`;
    } else {
        ending = ` Shadowheart's divine powers as a cleric calmed the ${animal} and sent them back into the cave.`;
    }

    // The story itself that gets created based on what is entered in the form fields.
    const story = `
        The Party stood shoulder to ${bodyPart} at the opening of a dark cave. Karlach,
        the ${adj} barbarian, ${verb} into the cave. But then Shadowheart, the cleric,
        held her back. "I sense an evil presence coming from in there," the cleric whispered
        as the light atop her torch flickered. Karlach gripped her two-handed ${noun1} and
        smirked. "We'll take care of it," she said. Then Astarion, the elven ${job}, appeared
        from behind his cloak. "Don't be so sure," he murmured, grasping a knife in his hand.
        Suddenly, ${num} ferocious ${animal} bolted out of the cave, with an evil look in their eyes.
        Karlach squealed with delight, "Get ready guys! It's time for ${noun2}!" In the end: ${ending}
    `;

    // This outputs the story to the webpage
    document.querySelector("#storyOutput").innerHTML = story;

};

// This function reloads the page when the "Restart Adventure!" button is clicked.
function refreshPage() {
    window.location.reload();
};



