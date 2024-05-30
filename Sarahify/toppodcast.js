
  const podcasts = [
    {
        title: 'Spooky Scary Skeletons',
        audioUrl: 'Satisfaction - Unlicensed Low Quality Preview.mp3',
        photoUrl: '../Sarahify/images/toppodcast1.jpeg',
        songTitle: 'Scary Story Podcast'
        
    }, 
    {  
        title: 'Go Forth',
        audioUrl: 'Go Forth - Unlicensed Low Quality Preview.mp3', 
        photoUrl: '../Sarahify/images/podcast2.jpg',
        songTitle: 'Go Forth'
        

    }, 
    {
        title:'Beyond The Cliffs',
        audioUrl:'Beyond the Cliffs - Unlicensed Low Quality Preview.mp3',
        photoUrl: '../Sarahify/images/podcast3.webp',
        songTitle: 'Beyond The Cliffs'
      
    }, 
    {
        title:'All On The Line',
        audioUrl: 'All On The Line.wav',
        photoUrl: '../Sarahify/images/podcast4.jpg',
        songTitle: 'All On The Line'
    }  
];

console.log(podcasts);

let currentIndex = 0;
const songImage = document.getElementById('songImage');
const description = document.getElementById('description')
const audioPlayer = document.getElementById('audioPlayer');
let paused = false; // Track if the audio is paused
let pausedTime= 0;

const placeholderImageUrl = 'istockphoto-1409329028-612x612.jpg';
songImage.src = placeholderImageUrl;

function playAudios() {
    const currentAudio = podcasts[currentIndex]; // Get the current audio object
    audioPlayer.src = currentAudio.audioUrl; // Assign the audioUrl to the src attribute
    songImage.src = currentAudio.photoUrl;
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
        currentIndex = (currentIndex + 1) % podcasts.length; // Move to the next audio item
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
    const currentAudio = podcasts[currentIndex]; // Get the current audio object
    audioPlayer.src = currentAudio.audioUrl; // Assign the audioUrl to the src attribute
    songImage.src = currentAudio.photoUrl;
    description.textContent = currentAudio.songTitle;    

    currentIndex = (currentIndex + 1) % podcasts.length; // Move to the next audio item
    playAudios(currentIndex);

  
}

function playAudiosP() {
    const currentAudio = podcasts[currentIndex]; // Get the current audio object
    audioPlayer.src = currentAudio.audioUrl; // Assign the audioUrl to the src attribute
    songImage.src = currentAudio.photoUrl;
    description.textContent = currentAudio.songTitle; 
    
    currentIndex = (currentIndex - 1 + podcasts.length) % podcasts.length; // Move to the previous audio item
    playAudios(currentIndex); // Play the previous audio

}