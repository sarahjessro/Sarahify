const randb = [
    {
        title: 'Murals',
        audioUrl: 'Murals - Unlicensed Low Quality Preview.mp3',
        photoUrl: '../Sarahify/images/chillrandb1.jpg',
        songTitle:'Murals'
        
    }, 
    {  
        title: 'Orchids',
        audioUrl: 'Orchids - Unlicensed Low Quality Preview.mp3', 
        photoUrl: '../Sarahify/images/chillrandb2.jpg',
        songTitle: 'Orchids'
        

    }, 
    {
        title:'Subtext',
        audioUrl:'Subtext - Unlicensed Low Quality Preview.mp3',
        photoUrl: '../Sarahify/images/chillrandb3.jpg',
        songTitle:'Subtext'
      
    }, 
    {
        title:'Analog Dreams',
        audioUrl: 'Analog Dreams - Unlicensed Low Quality Preview.mp3',
        photoUrl:'../Sarahify/images/chillrandb4.jpg',
        songTitle: 'Analog Dreams'
    }  
];

console.log(randb);

let currentIndex = 0;
const audioPlayer = document.getElementById('audioPlayer');
const songImage = document.getElementById('songImage')
const description= document.getElementById('description');
let paused = false; // Track if the audio is paused
let pausedTime = 0;

const placeholderImageUrl = 'istockphoto-1409329028-612x612.jpg';
songImage.src = placeholderImageUrl;

function playAudios() {
    const currentAudio = randb[currentIndex]; // Get the current audio object
    audioPlayer.src = currentAudio.audioUrl; // Assign the audioUrl to the src attribute
    description.textContent = currentAudio.songTitle;
    songImage.src = currentAudio.photoUrl;

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
        currentIndex = (currentIndex + 1) % randb.length; // Move to the next audio item
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
    const currentAudio = randb[currentIndex];
    audioPlayer.src = currentAudio.audioUrl;
    songImage.src = currentAudio.photoUrl;
    description.textContent = currentAudio.songTitle;

  currentIndex = (currentIndex + 1) % randb.length;
  playAudios(currentIndex);
}

function playAudiosP() {
  

    const currentAudio = randb[currentIndex];
    description.textContent = currentAudio.songTitle;
    songImage.src = currentAudio.photoUrl;
    audioPlayer.src = currentAudio.audioUrl;

    currentIndex = (currentIndex - 1 + randb.length) % randb.length; // Calculate previous index
    playAudios(currentIndex);
}
