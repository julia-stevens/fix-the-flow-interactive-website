let playPauseButton = document.querySelector(".playpause-track"); // play/pause knop
let buttonImage = document.querySelector(".playpause-track img"); // play/pause img

let seekSlider = document.querySelector(".seek-slider");
let currentTime = document.querySelector(".current-time");
let totalDuration = document.querySelector(".total-duration");

let trackIndex = 0; // begin bij eerste track (back to black)
let isPlaying = false; // bij openen pagina niet afspelen
let updateTimer; 

let currentTrack = document.createElement("audio"); // nieuwe audio variabele

let trackList = [ // array met nummers
    {
        path: "./assests/Back-To-Black_Amy-Winehouse.mp3" // path van eerste nummer
    }
]


playPauseButton.addEventListener("click", playPauseTrack); // bij klik op knop, activeer functie playPauseTrack
seekSlider.addEventListener("change", seekTo);


loadTrack(trackIndex); // laad trackIndex

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

function loadTrack(trackIndex) {
    // clear previous seek timer
    clearInterval(updateTimer); 
    resetValues();

    // load new track
    currentTrack.src = trackList[trackIndex].path; // source currentTrack = haal uit array (start bij 0 (dus eerste nummer) en neem het path)
    currentTrack.load(); // laad currentTrack variabele

    updateTimer = setInterval(seekUpdate, 1000);
}

function resetValues() {
    currentTime.textContent = "00:00";
    totalDuration.textContent = "00:00";
    seekSlider.value = 0;
}

function seekTo() {
    seekTo = currentTrack.duration * (seekSlider.value / 100);

    currentTrack.currentTime = seekTo; 
}

function seekUpdate() {
    let seekPosition = 0; 

    if (!isNaN(currentTrack.duration)) {
        // update position slider
        seekPosition = currentTrack.currentTime * (100 / currentTrack.duration); 
        seekSlider.value = seekPosition;

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




