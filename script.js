// Code for counting the clicks
let clicks = 0
let counter = document.getElementById("CountHold");
counter.textContent = `Clicks : ${clicks}`;

// Load the cookie 
const cookie = document.getElementById("cookieImg");

// Looks for clicks to update counter
cookie.addEventListener("click", () => {
    clicks++;
    counter.textContent = `Clicks : ${clicks}`;
    setTimeout(() => {
        cookie.classList.add("bigCookie");
    }, 100);

    setTimeout(() => {
        cookie.classList.remove("bigCookie");
    }, 200);
});