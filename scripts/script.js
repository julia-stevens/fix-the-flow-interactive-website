// Hamburger navigatie in nav
const navHamburger = document.querySelector("nav button");
const navMenu = document.querySelector("nav ul");
const navButton = document.querySelector(".nav-button img");

navHamburger.addEventListener("click", toggleMenu);

function toggleMenu() {
    navMenu.classList.toggle("showMenu");
    navButton.classList.toggle("showMenu");

    if (navMenu.hasAttribute("inert")) {
        navMenu.removeAttribute("inert");
    } else {
        navMenu.setAttribute("inert", true);
    }
}

// hamburger als je resized
function reportWindowSize() {
    const windowWidth = window.innerWidth;

    if (windowWidth >= 800) {
        navMenu.removeAttribute("inert");
    } else {
        navMenu.setAttribute("inert", true);
    }
}

// checken als het schermbreedte verandert
window.onresize = reportWindowSize;

// checken bij laden pagina
reportWindowSize();

// Zenders menu bij nav
const buttonZenders = document.querySelector(".nav-zenders button");
const navZenders = document.querySelector(".nav-zenders");
const buttonImgZenders = document.querySelector(".nav-zenders button img");
const navZendersUl = document.querySelector(".zenders-menu")

buttonZenders.addEventListener("click", toggleZenders);

function toggleZenders() {
    navZenders.classList.toggle("showZenders");
    buttonImgZenders.classList.toggle("showZenders");

    if (navZendersUl.hasAttribute("inert")) {
        navZendersUl.removeAttribute("inert");
    } else {
        navZendersUl.setAttribute("inert", true);
    }
}


// DETAILS
// let details = document.querySelector(".details-slam");

// details.addEventListener("click", openDetails);

// function openDetails() {
//     details.open = true; 
// }

// PLAYER
let playPauseButton = document.querySelector(".playpause-track"); // play/pause knop
let buttonImage = document.querySelector(".playpause-track img"); // play/pause img

let showName = document.querySelector(".show-name"); // h2 element voor show naam
let trackNameArtist = document.querySelector(".track-name-artist"); // p element voor titel nummer en artiest
let trackArt = document.querySelector(".track-art"); // album cover img

let seekSlider = document.querySelector(".seek-slider");
let currentTime = document.querySelector(".current-time");
let totalDuration = document.querySelector(".total-duration");

let trackIndex = 0; // begin bij eerste track (back to black)
let isPlaying = false; // bij openen pagina niet afspelen
let updateTimer; 

let currentTrack = document.createElement("audio"); // nieuwe audio variabele

let trackList = [ // array met content player 
    {
        // [0] BACK TO BLACK - AMY WINEHOUSE
        path: "./assests/Back-To-Black_Amy-Winehouse.mp3", // path van eerste nummer
        name: "Goud van Oud", // show-name
        artist: "Back to Black - Amy Winehouse", // track-name-artist
        image: "./assests/back-to-black-thumbnail.png" // track-art
    },
    {
        // [1] KILLER QUEEN - QUEEN
        path: "./assests/queen-killer-queen.mp3", 
        name: "Goud van Oud", 
        artist: "Killer Queen - Queen", 
        image: "./assests/sheer-heart-attack.jpg"
    }
]

loadTrack(trackIndex); // laad trackIndex

playPauseButton.addEventListener("click", playPauseTrack); // bij klik op knop, activeer functie playPauseTrack

seekSlider.addEventListener("change", seekTo);

function loadTrack(trackIndex) {
    // clear previous seek timer
    clearInterval(updateTimer); 
    resetValues();

    // load new track
    currentTrack.src = trackList[trackIndex].path; // source currentTrack = haal uit array (start bij 0 (dus eerste nummer) en neem het path)
    currentTrack.load(); // laad currentTrack variabele
    
    // update details
    trackNameArtist.textContent = trackList[trackIndex].artist; // laad trackNameArtist met artist uit trackList
    showName.textContent = trackList[trackIndex].name; // laad showName met name uit trackList
    trackArt.src = trackList[trackIndex].image; // laad trackArt met image uit trackList

    // update elke seconde
    updateTimer = setInterval(seekUpdate, 1000);

    // wanneer track eindigd, roep "nextTrack" op
    currentTrack.addEventListener("ended", nextTrack);
}

function playPauseTrack() { 
    if (isPlaying === false) { // als niks aan het afspelen, play currentTrack, remove play icon, add pause icon, isPlaying = true
        currentTrack.play(); 
        isPlaying = true; 
        buttonImage.classList.remove("play-track");
        buttonImage.classList.add("pause-track");

    } else { // anders (als wel aan het afspelen), pause currentTrack, remove pause icon, add play icon, isPlaying = false
        currentTrack.pause();
        isPlaying = false;
        buttonImage.classList.remove("pause-track");
        buttonImage.classList.add("play-track");
    }
}

function playTrack() { 
    currentTrack.play(); // play currentTrack, remove play icon, add pause icon, isPlaying = true
    isPlaying = true; 
    buttonImage.classList.remove("play-track");
    buttonImage.classList.add("pause-track");
}

function nextTrack() { // 
    if (trackIndex < trackList.length - 1) // als huidige trackIndex kleiner is dan de laatste index van de trackList
        trackIndex += 1; // dan tel er 1 bij op
    else trackIndex = 0;  // anders trackIndex = 0; en dus terug naar eerste nummer in lijst

    loadTrack(trackIndex); // laad de trackIndex
    playTrack(); // speel nummer af
}

function resetValues() {
    currentTime.textContent = "00:00";
    totalDuration.textContent = "00:00";
    seekSlider.value = 0;
}

function seekTo() {
    // duration = lengte in seconde 
    // seekSlider.value is lengte van slider van 0 tot 100
    seekTo = currentTrack.duration * (seekSlider.value / 100); // berekent relatieve afstand van de duration ten opzichte van de slider (0 tot 100)
    currentTrack.currentTime = seekTo; // plaats op juiste plek in slider
}

function seekUpdate() {
    let seekPosition = 0; // slider begint bij 0 

    if (!isNaN(currentTrack.duration)) {
        // update position slider
        seekPosition = currentTrack.currentTime * (100 / currentTrack.duration); // berekent relatieve afstand van de duration ten opzichte van de slider (0 tot 100)
        seekSlider.value = seekPosition; // plaats op juiste plek in slider

        // calculate current time
        // let currentMinutes = Math.floor(currentTrack.currentTime / 60);
        // let currentSeconds = Math.floor(currentTrack.currentTime - currentMinutes * 60);
        // let durationMinutes = Math.floor(currentTrack.duration / 60);
        // let durationSeconds = Math.floor(currentTrack.duration - durationMinutes * 60);

        // Add a zero to the single digit time values
        // if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
        // if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        // if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
        // if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }
    
        // Display the updated duration
        // currentTime.textContent = currentMinutes + ":" + currentSeconds;
        // totalDuration.textContent = durationMinutes + ":" + durationSeconds;
    }
}