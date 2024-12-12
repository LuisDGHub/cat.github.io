function displayGreeting() {
    const greetingElement = document.getElementById("greeting");
    const hour = new Date().getHours();
    let greeting;

    if (hour < 12) {
        greeting = "Good morning!";
    } else if (hour < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }

    if (greetingElement) {
        greetingElement.textContent = greeting;
    }
}

function showRandomFact() {
    const facts = [
        "Cats have five toes on their front paws but only four on their back paws.",
        "A group of cats is called a clowder.",
        "Cats can make over 100 different sounds.",
        "A cat’s nose is as unique as a human fingerprint.",
        "Cats spend 70% of their lives sleeping.",,
        "Cats have a special reflective layer behind their retinas, called the tapetum lucidum, which helps them see in low light.",
        "A cat's whiskers are not just for measuring gaps; they also help them navigate in the dark.",
        "Domestic cats can run up to 30 miles per hour in short bursts.",
        "Cats have been domesticated for over 4,000 years.",
        "Cats can jump up to six times their body length in one leap.",
        "A cat’s heart beats twice as fast as a human’s, at 110-140 beats per minute.",
        "The oldest recorded cat lived to be 38 years and 3 days old.",
    ];

    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    const factElement = document.getElementById("catFact");
    if (factElement) {
        factElement.textContent = randomFact;
    }
}

window.onload = function () {
    displayGreeting();
    showRandomFact();
};
