const bgProgBar = document.querySelector(".bg-progress-bar");
const bgVids = document.querySelectorAll(".background-video");

const opacitys = [1, 0, 0, 0];
let bgIndex = 1;
let progCount = 0.0;

const updateBg = () => {
    let prevIndex = bgIndex - 1;
    let curIndex = bgIndex;
    if(bgIndex === 0) {
        prevIndex = opacitys.length - 1;
        curIndex = 0;
    }
    if(bgIndex === opacitys.length - 1) {
        bgIndex = 0;
    }
    else {
        bgIndex++;
    }
    bgVids[curIndex].style.opacity = ++opacitys[curIndex]; 
    bgVids[prevIndex].style.opacity = --opacitys[prevIndex];
}

const moveProg = () => {
    if(progCount > 100.0) {
        updateBg();
        progCount = 0.0;
    }
    progCount += .1;
    bgProgBar.style.transform =`scaleX(${progCount}%)`;
    setTimeout(moveProg, 1);
}

document.addEventListener('DOMContentLoaded', moveProg);