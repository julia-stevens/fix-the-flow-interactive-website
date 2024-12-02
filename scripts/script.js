let playPauseButton = document.querySelector(".playpause-track"); // play/pause knop
let buttonImage = document.querySelector(".playpause-track img"); // play/pause img

let trackIndex = 0; // begin bij eerste track (back to black)
let isPlaying = false; // bij openen pagina niet afspelen

let currentTrack = document.createElement("audio"); // nieuwe audio variabele

let trackList = [ // array met nummers
    {
        path: "./assests/Back-To-Black_Amy-Winehouse.mp3" // path van eerste nummer
    }
]

playPauseButton.addEventListener("click", playPauseTrack); // bij klik op knop, activeer functie playPauseTrack

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
    currentTrack.src = trackList[trackIndex].path; // source currentTrack = haal uit array (start bij 0 (dus eerste nummer) en neem het path)
    currentTrack.load(); // laad currentTrack variabele
}

loadTrack(trackIndex); // laad trackIndex