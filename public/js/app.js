// Get the theme toggle button element
const themeToggle = document.getElementById("theme-toggle");

// Function to toggle the dark theme
// function toggleDarkTheme() {
//     document.body.classList.toggle("dark-theme");
// }

function toggleDarkTheme() {
    // Check if the body has the 'dark-theme' class
    if (document.body.classList.contains("dark-theme")) {
        // If dark theme is applied, remove it (toggle to light theme)
        document.body.classList.remove("dark-theme");
    } else {
        // If dark theme is not applied, add it (toggle to dark theme)
        document.body.classList.add("dark-theme");
    }
}
// Event listener for the theme toggle button
themeToggle.addEventListener("click", toggleDarkTheme);

// Audio;

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
