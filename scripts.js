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
        "Cats spend 70% of their lives sleeping."
    ];

    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    const factElement = document.getElementById("catFact");
    if (factElement) {
        factElement.textContent = randomFact;
    }
}

// Run functions after the page loads
window.onload = function () {
    displayGreeting();
    showRandomFact();
};
