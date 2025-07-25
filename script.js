document.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById('bg-music');
    music.volume = 0.5; // Atur volume default (0.0 - 1.0)

    // Agar autoplay bisa jalan di mobile/desktop (butuh interaksi user)
    document.body.addEventListener('click', () => {
        if (music.paused) music.play();
    });
});
