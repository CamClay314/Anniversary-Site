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
    const edge = Math.floor(Math.random() * 4);
    frog.classList.remove("hidden");

    switch (edge) {
        case 0:
            frog.style.left = "0";
            frog.style.top = Math.random() * 100 + "vh";
            break;
        case 1:
            frog.style.right = "0";
            frog.style.top = Math.random() * 100 + "vh";
            break;
        case 2:
            frog.style.top = "0";
            frog.style.left = Math.random() * 100 + "vw";
            break;
        case 3:
            frog.style.bottom = "0";
            frog.style.left = Math.random() * 100 + "vw";
            break;
    }

    setTimeout(() => frog.classList.add("hidden"), 5000);
}

function startFrogTimer() {
    setInterval(() => {
        if (Math.random() < 0.3) {
            showFrog();
        }
    }, 15000);
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
