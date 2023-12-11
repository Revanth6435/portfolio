// Get the theme toggle button element
const themeToggle = document.getElementById("theme-toggle");

// Function to toggle the dark theme
function toggleDarkTheme() {
    document.body.classList.toggle("dark-theme");
}

// Event listener for the theme toggle button
themeToggle.addEventListener("click", toggleDarkTheme);

// Audio

const audio = document.getElementById("audioPlayer");
audio.volume = 1;
const playPauseButton = document.querySelector("#controls button");

function playPause() {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = "Pause";
    } else {
        audio.pause();
        playPauseButton.textContent = "Play";
    }
}

// Scroll speed reducer
let index = 0,
    interval = 1000;

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const animate = (star) => {
    star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
    star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

    star.style.animation = "none";
    star.offsetHeight;
    star.style.animation = "";
};

for (const star of document.getElementsByClassName("magic-star")) {
    setTimeout(() => {
        animate(star);

        setInterval(() => animate(star), 1000);
    }, index++ * (interval / 3));
}

/* -- ↓↓↓ If you want the sparkle effect to only occur on hover, replace lines 16 and on with this code ↓↓↓ -- */

// let timeouts = [],
//     intervals = [];

// const magic = document.querySelector(".magic");

// magic.onmouseenter = () => {
//   let index = 1;

//   for(const star of document.getElementsByClassName("magic-star")) {
//     timeouts.push(setTimeout(() => {
//       animate(star);

//       intervals.push(setInterval(() => animate(star), 1000));
//     }, index++ * 300));
//   };
// }

// magic.onmouseleave = onMouseLeave = () => {
//   for(const t of timeouts) clearTimeout(t);
//   for(const i of intervals) clearInterval(i);

//   timeouts = [];
//   intervals = [];
// }
