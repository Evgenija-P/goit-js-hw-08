import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', curentTime);

function curentTime() {}

// let curentTime = player
//   .getCurrentTime()
//   .then(function () {
//     // seconds = the current playback position
//   })
//   .catch(function (error) {
//     // an error occurred
//   });
// console.log();

// player
//   .setCurrentTime(120.46)
//   .then(function (seconds) {
//     // seconds = the actual time that the player seeked to
//   })
//   .catch(function (error) {
//     switch (error.name) {
//       case 'RangeError':
//         // the time was less than 0 or greater than the video’s duration
//         break;

//       default:
//         // some other error occurred
//         break;
//     }
//   });
