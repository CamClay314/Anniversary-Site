let clickCount = 0;
const maxClicks = 730;
const counterButton = document.getElementById("counterButton");
const photoGallery = document.getElementById("photoGallery");
const viewMemoriesButton = document.getElementById("viewMemoriesButton");
const slideshow = document.getElementById("slideshow");

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
    counterButton.innerText = `Clicked ${clickCount} times`;

    if (clickCount >= maxClicks) {
        counterButton.classList.add("hidden");
        photoGallery.classList.add("visible");
        viewMemoriesButton.classList.remove("hidden");
    }
});

// Show slideshow on "View the Memories" button click
viewMemoriesButton.addEventListener("click", () => {
    viewMemoriesButton.classList.add("hidden");
    slideshow.classList.remove("hidden");
});
