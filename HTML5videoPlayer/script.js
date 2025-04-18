const  player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');

const toggle = player.querySelector('.toggle');
const skipBtns = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullScreenBtn = player.querySelector('.fullScreen');


// function togglePlay() {
//     if(video.paused) {
//         video.play();
//     }else {
//         video.pause();
//     }
// }
function updateButton() {
    const icon = this.paused ? '▶' : '❚❚';
    toggle.textContent = icon;
}

function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
    video[this.name] = this.value;
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

function fullScreen() {
 if (!document.fullscreenElement) {
    player.requestFullscreen();
    } else {
    document.exitFullscreen();
        }
    }

video.addEventListener('click', togglePlay);

video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipBtns.forEach(btn => {
   btn.addEventListener('click', skip) 
});

ranges.forEach(range => {
    range.addEventListener('click', handleRangeUpdate)
});
ranges.forEach(range => {
    range.addEventListener('change', handleRangeUpdate)
});
ranges.forEach(range => {
    range.addEventListener('mousemove', handleRangeUpdate)
});

let mouseDown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mouseDown && scrub(e));
progress.addEventListener('mousedown', () => mouseDown = true);
progress.addEventListener('mouseup', () => mouseDown = false);

fullScreenBtn.addEventListener('click', fullScreen);