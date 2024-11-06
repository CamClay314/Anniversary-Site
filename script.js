let clickCount = 0;
const maxClicks = 730;
const halfwayPoint = 360;
const counterButton = document.getElementById("counterButton");
const photoGallery = document.getElementById("photoGallery");
const viewMemoriesButton = document.getElementById("viewMemoriesButton");
const slideshow = document.getElementById("slideshow");
const autoClickButton = document.getElementById("autoClickButton");

// Create falling hearts
function createFallingHeart() {
    const heart = document.createElement("div");
    heart.classList.add("falling-heart");
    heart.innerHTML = "❤";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.animationDuration = Math.random() * 5 + 3 + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createFallingHeart, 500);

// Button click event
counterButton.addEventListener("click", () => {
    clickCount++;
    counterButton.innerText = `Day ${clickCount}`;

    if (clickCount === halfwayPoint) {
        autoClickButton.classList.remove("hidden");
    }

    if (clickCount >= maxClicks) {
        counterButton.classList.add("hidden");
        photoGallery.classList.add("visible");
        viewMemoriesButton.classList.remove("hidden");
        setTimeout(() => {
            alert("I knew you'd be too tired to actually click through all 730 days!");
        }, 500);
    }
});

// Autoclick button functionality
autoClickButton.addEventListener("click", () => {
    autoClickButton.classList.add("hidden");
    const autoClickInterval = setInterval(() => {
        clickCount++;
        counterButton.innerText = `Day ${clickCount}`;
        
        if (clickCount >= maxClicks) {
            clearInterval(autoClickInterval);
            counterButton.classList.add("hidden");
            photoGallery.classList.add("visible");
            viewMemoriesButton.classList.remove("hidden");
            setTimeout(() => {
                alert("I knew you'd be too tired to actually click through all 730 days!");
            }, 500);
        }
    }, 20); // Adjust speed of autoclicks if necessary
});

// Show slideshow on "View the Memories" button click
viewMemoriesButton.addEventListener("click", () => {
    viewMemoriesButton.classList.add("hidden");
    slideshow.classList.remove("hidden");
});
