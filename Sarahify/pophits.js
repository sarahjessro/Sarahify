

  const pop_tunes = [
    {
        title: 'Chasing Frontiers',
        audioUrl: 'Chasing Frontiers - Unlicensed Low Quality Preview.mp3',
        songTitle: 'Chasing Frontiers',
        photoUrl: '../Sarahify/images/pop1.jpeg'
        
    }, 
    {  
        title: 'The Construct',
        audioUrl: 'The Construct - Unlicensed Low Quality Preview.mp3', 
        songTitle: 'The Construct',
        photoUrl: '../Sarahify/images/pop2.jpg'

        

    }, 
    {
        title:'The Jump',
        audioUrl:'The Jump - Unlicensed Low Quality Preview.mp3',
        songTitle: 'The Jump',
        photoUrl: '../Sarahify/images/pop3.webp'
      
    }, 
    {
        title:'The Great Escape',
        audioUrl: 'This Is Our Mission - Unlicensed Low Quality Preview.mp3',
        songTitle:'The Great Escape',
        photoUrl: '../Sarahify/images/pop4.jpg'
    }  
];

console.log(pop_tunes);

let currentIndex = 0;
const audioPlayer = document.getElementById('audioPlayer');
const songImage = document.getElementById('songImage')
const description= document.getElementById('description');
let paused = false; // Track if the audio is paused
let pausedTime = 0;

const placeholderImageUrl = 'istockphoto-1409329028-612x612.jpg';
songImage.src = placeholderImageUrl;


function playAudios() {
    const currentAudio = pop_tunes[currentIndex]; // Get the current audio object
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
        currentIndex = (currentIndex + 1) % pop_tunes.length; // Move to the next audio item
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
     const currentAudio = pop_tunes[currentIndex];
     audioPlayer.src = currentAudio.audioUrl; // Assign the audioUrl to the src attribute
    songImage.src = currentAudio.photoUrl;
    description.textContent = currentAudio.songTitle;

   currentIndex = (currentIndex + 1) % pop_tunes.length;
   playAudios(currentIndex);
}


function playAudiosP() {
   

    const currentAudio = pop_tunes[currentIndex];
    description.textContent = currentAudio.songTitle;
    songImage.src = currentAudio.photoUrl;
    audioPlayer.src = currentAudio.audioUrl;

     currentIndex = (currentIndex - 1 + pop_tunes.length) % pop_tunes.length; // Calculate previous index
     playAudios(currentIndex);

    
}