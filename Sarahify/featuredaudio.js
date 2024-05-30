document.addEventListener('DOMContentLoaded', () => {
    let paused = false; // Track if the audio is paused
    let pausedTime = 0;

    const buttons = document.querySelectorAll('.play-pause-button');

    buttons.forEach(button => {
        const playIcon = button.querySelector('.playIcon');
        const pauseIcon = button.querySelector('.pauseIcon');
        const audio = button.parentElement.querySelector('audio');

        button.addEventListener('click', () => {
            if (audio.paused) {
                // Pause any other playing audio
                document.querySelectorAll('audio').forEach(aud => {
                    if (!aud.paused && aud !== audio) {
                        aud.pause();
                    }
                });

                // Play audio
                audio.play().then(() => {
                    playIcon.style.display = 'none';
                    pauseIcon.style.display = 'block';
                    button.classList.remove('play-button');
                    button.classList.add('pause-button');
                });
            } else {
                // Pause audio
                audio.pause();
                 audioPlayer.currentTime = pausedTime;
                playIcon.style.display = 'block';
                pauseIcon.style.display = 'none';
                button.classList.remove('pause-button');
                button.classList.add('play-button');
            }
        });

        // Listen for the "pause" event on the audio element
        audio.addEventListener('pause', () => {
            playIcon.style.display = 'block';
            pauseIcon.style.display = 'none';
            button.classList.remove('pause-button');
            button.classList.add('play-button');
        });

        // Listen for the "play" event on the audio element
        audio.addEventListener('play', () => {
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'block';
            button.classList.remove('play-button');
            button.classList.add('pause-button');
        });
    });
});
