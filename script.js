document.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById('bg-music');
    const audioToggle = document.getElementById('audio-toggle');
    const icon = audioToggle.querySelector('i');

    music.volume = 0.5;

    // Unmute setelah interaksi pertama
    document.body.addEventListener('click', () => {
        if (music.muted) {
            music.muted = false;
            icon.classList.remove('fa-volume-mute');
            icon.classList.add('fa-volume-up');
        }
    }, { once: true });

    // Klik ikon untuk toggle mute/unmute
    audioToggle.addEventListener('click', () => {
        if (music.muted) {
            music.muted = false;
            icon.classList.remove('fa-volume-mute');
            icon.classList.add('fa-volume-up');
        } else {
            music.muted = true;
            icon.classList.remove('fa-volume-up');
            icon.classList.add('fa-volume-mute');
        }
    });
});
