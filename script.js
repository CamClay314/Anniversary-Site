let clickCount = 0;
const maxClicks = 730;
const halfwayPoint = 360;
let heartInterval = 500;
const counterButton = document.getElementById("counterButton");
const photoGallery = document.getElementById("photoGallery");
const viewMemoriesButton = document.getElementById("viewMemoriesButton");
const slideshow = document.getElementById("slideshow");
const autoClickButton = document.getElementById("autoClickButton");
const frog = document.getElementById("frog");
const secretLink = document.getElementById("secretLink");

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

function updateHeartRate() {
    clearInterval(heartGenerator);
    heartInterval = Math.max(100, heartInterval - 10);
    heartGenerator = setInterval(createFallingHeart, heartInterval);
}

let heartGenerator = setInterval(createFallingHeart, heartInterval);

function showFrog() {
    frog.style.left = Math.random() * 90 + "vw";
    frog.style.top = Math.random() * 80 + "vh";
    frog.classList.remove("hidden");
    setTimeout(() => frog.classList.add("hidden"), 5000);
}

function startFrogTimer() {
    setInterval(() => {
        if (Math.random() < 0.2) {
            showFrog();
        }
    }, 10000);
}

startFrogTimer();

counterButton.addEventListener("click", () => {
    clickCount++;
    counterButton.innerText = `Day ${clickCount}`;
    updateHeartRate();

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

autoClickButton.addEventListener("click", () => {
    autoClickButton.classList.add("hidden");
    const autoClickInterval = setInterval(() => {
        clickCount++;
        counterButton.innerText = `Day ${clickCount}`;
        updateHeartRate();

        if (clickCount >= maxClicks) {
            clearInterval(autoClickInterval);
            counterButton.classList.add("hidden");
            photoGallery.classList.add("visible");
            viewMemoriesButton.classList.remove("hidden");
            setTimeout(() => {
                alert("I knew you'd be too tired to actually click through all 730 days!");
            }, 500);
        }
    }, 20);
});

frog.addEventListener("click", () => {
    secretLink.classList.remove("hidden");
    secretLink.click();
    secretLink.classList.add("hidden");
});

viewMemoriesButton.addEventListener("click", () => {
    viewMemoriesButton.classList.add("hidden");
    slideshow.classList.remove("hidden");
});
