const bgProgBar = document.querySelector(".bg-progress-bar");
const bgVids = document.querySelectorAll(".background-video");
const introBox = document.querySelector(".intro-box");
const introSection = document.querySelector("intro");

let bgIndex = 1;
let progCount = 0.0;

const updateBg = () => {
    let prevIndex = bgIndex - 1;
    let curIndex = bgIndex;
    if(bgIndex === 0) {
        prevIndex = bgVids.length - 1;
        curIndex = 0;
    }
    if(bgIndex === bgVids.length - 1) {
        bgIndex = 0;
    }
    else {
        bgIndex++;
    }
    bgVids[curIndex].classList.toggle('dim opacity-zero');
    bgVids[curIndex].classList.toggle('opacity-zero');
    bgVids[prevIndex].classList.toggle('dim');
    bgVids[prevIndex].classList.toggle('opacity-zero');
};

const moveProg = () => {
    if(progCount > 100.0) {
        updateBg();
        progCount = 0.0;
    }
    progCount += .1;
    bgProgBar.style.transform =`scaleX(${progCount}%)`;
    setTimeout(moveProg, 1);
};

document.addEventListener('DOMContentLoaded', moveProg);

const toggleIntroBox = () => {
    introBox.classList.toggle('opacity-zero');
};

introBox.addEventListener('click', toggleIntroBox);
introSection.addEventListener('click', toggleIntroBox);