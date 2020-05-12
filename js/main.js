const game = document.getElementsByTagName("game")[0]

//
// vis element
//
function addFish() {
    const fish = document.createElement("fish");
    fish.style.transform = "translate(" + (Math.random() * (window.innerWidth - 130)) + "px, " + (Math.random() * (window.innerHeight - 110)) + "px)";
    fish.style.filter = "hue-rotate(" + Math.random() * 360 + "deg)";
    game.appendChild(fish);
}

//
// bubble element
//
function addBubble() {
    const bubble = document.createElement("bubble");
    bubble.style.transform = "translate(" + (Math.random() * (window.innerWidth - 55)) + "px, " + (Math.random() * (window.innerHeight - 55)) + "px)";
    game.appendChild(bubble);
}

for (let i = 0; i < 100; i++) {
    addFish();
    addBubble();
}
