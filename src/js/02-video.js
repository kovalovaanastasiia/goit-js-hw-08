import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const CURRENT_TIME_KEY = "videoplayer-current-time";
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(controlTime, 1000));

function controlTime(event) {
  const currentSeconds = event.seconds;
  localStorage.setItem(CURRENT_TIME_KEY, currentSeconds)
}

const currentTime = localStorage.getItem(CURRENT_TIME_KEY);
if (currentTime) {
  player.setCurrentTime(currentTime);
}