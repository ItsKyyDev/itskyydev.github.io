const audio = document.getElementById('bgm');
const toggle = document.getElementById('audioToggle');
const icon = document.getElementById('audioIcon');

let isPlaying = false;

toggle.addEventListener('click', () => {
  if (isPlaying) {
    audio.pause();
    icon.src = 'icons/volume-off.svg'; // icon OFF
  } else {
    audio.play();
    icon.src = 'icons/volume-on.svg';  // icon ON
  }
  isPlaying = !isPlaying;
});
