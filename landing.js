const bgProgBar = document.querySelector(".bg-progress-bar");
const bgVids = document.querySelectorAll(".background-video");

const zIndices = [-1, -2, -2, -2];
let bgIndex = 1;
let progCount = 0.0;

console.log(bgVids);
const updateBg = () => {
    if(bgIndex === 0) {
        zIndices[0]++;
        zIndices[3]--;
    }
    else {
        zIndices[bgIndex - 1]--;
        zIndices[bgIndex]++;
    }
    if(bgIndex === 3) {
        bgIndex = 0;
    }
    else {
        bgIndex++;
    }
    for(let i = 0; i < bgVids.length; i++) {
        bgVids[i].style.zIndex = zIndices[i];
    }
}

const moveProg = () => {
    if(progCount > 100.0) {
        updateBg();
        progCount = 0.0;
    }
    progCount += .1;
    bgProgBar.style.transform =`scaleX(${progCount}%)`;
    setTimeout(moveProg, 8);
}

document.addEventListener('DOMContentLoaded', moveProg);