const bgProgBar = document.querySelector(".bg-progress-bar");
const bgVids = document.querySelectorAll(".background-video");

const opacitys = [1, 0, 0, 0];
let bgIndex = 1;
let progCount = 0.0;

console.log(bgVids);
const updateBg = () => {
    if(bgIndex === 0) {
        opacitys[0]++;
        opacitys[opacitys.length - 1]--;
    }
    else {
        opacitys[bgIndex - 1]--;
        opacitys[bgIndex]++;
    }
    if(bgIndex === opacitys.length - 1) {
        bgIndex = 0;
    }
    else {
        bgIndex++;
    }
    for(let i = 0; i < bgVids.length; i++) {
        bgVids[i].style.opacity = opacitys[i];
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