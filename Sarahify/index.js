
const top_hits = [
    {
        title: 'A New Chapter',
        audioUrl: 'A New Chapter - Unlicensed Low Quality Preview.mp3',
        photoUrl: 'music1.jpg',
        songTitle: 'A New Chapter'
    }, 
    {  
        title: 'Pathless',
        audioUrl: 'Pathless - Unlicensed Low Quality Preview.mp3', 
        photoUrl: '../Sarahify/images/music3.jpg',
        songTitle: 'Pathless'
    }, 
    {
        title: 'Heed the Call',
        audioUrl: 'Heed the Call - Unlicensed Low Quality Preview.mp3',
        photoUrl: '../Sarahify/images/music2.webp',
        songTitle: 'Heed The Call'
    }, 
    {
        title: 'Revolve',
        audioUrl: 'Revolve - Unlicensed Low Quality Preview.mp3',
        photoUrl: '../Sarahify/images/music4.avif',
        songTitle: 'Revolve'
    }  
];

let currentIndex = 0;
const audioPlayer = document.getElementById('audioPlayer');
const songImage = document.getElementById('songImage')
const description= document.getElementById('description');

let paused = false; // Track if the audio is paused
let pausedTime = 0;

const placeholderImageUrl = 'istockphoto-1409329028-612x612.jpg';
songImage.src = placeholderImageUrl;



function playAudios() {
    const currentAudio = top_hits[currentIndex]; // Get the current audio object
    songImage.src = currentAudio.photoUrl;
    audioPlayer.src = currentAudio.audioUrl; // Assign the audioUrl to the src attribute
    description.textContent = currentAudio.songTitle;
    
    
    if (paused) {
        // Resume from the paused position
        audioPlayer.currentTime = pausedTime;
        audioPlayer.play(); // Resume playback
        paused = false; // Reset paused flag
    } else {
        audioPlayer.play(); // Start playing the audio from the beginning
    }

    // Listen for 'ended' event to automatically play the next audio
    audioPlayer.addEventListener('ended', () => {
        currentIndex = (currentIndex + 1) % top_hits.length; // Move to the next audio item
        playAudios(); // Play the next audio
    });

}

function pauseAudios() {
   
    if (!audioPlayer.paused) {
        audioPlayer.pause(); // Pause the audio
        paused = true; // Set paused flag
        pausedTime = audioPlayer.currentTime; // Store the current playback position
    }
}

function playAudiosN() {
     const currentAudio = top_hits[currentIndex];
    description.textContent = currentAudio.songTitle;
     songImage.src = currentAudio.photoUrl;
   
   currentIndex = (currentIndex + 1) % top_hits.length;
   playAudios(currentIndex);
}
function playAudiosP() {
    

    const currentAudio = top_hits[currentIndex];
    description.textContent = currentAudio.songTitle;
    songImage.src = currentAudio.photoUrl;
    audioPlayer.src = currentAudio.audioUrl;

   currentIndex = (currentIndex - 1 + top_hits.length) % top_hits.length; // Calculate previous index
   playAudios(currentIndex);
}




