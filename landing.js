const bgProgBar = document.querySelector(".bg-progress-bar");
const bgSelectors = document.querySelectorAll(".bg-selector");
const bgVids = document.querySelectorAll(".background-video");
const introBox = document.querySelector(".intro-box");
const mobileNavButton = document.querySelector(".mobile-nav-button");
const mobileNav = document.querySelector(".mobile-nav");

let bgCurIndex = 0;
let progCount = 0.0;

const updateBg = bgNextIndex => {
    bgVids[bgCurIndex].classList.toggle('dim');
    bgVids[bgCurIndex].classList.toggle('opacity-zero');
    bgVids[bgNextIndex].classList.toggle('dim');
    bgVids[bgNextIndex].classList.toggle('opacity-zero');
    bgSelectors[bgCurIndex].classList.toggle('selected');
    bgSelectors[bgNextIndex].classList.toggle('selected');
    bgCurIndex = bgNextIndex;
};

const rotateBg = () => {
    let bgNextIndex;
    if(bgCurIndex === bgVids.length - 1) {
        bgNextIndex = 0;
    }
    else {
        bgNextIndex = bgCurIndex + 1;
    }
    updateBg(bgNextIndex);
};

const selectBg = bgNextIndex => {
    progCount = 0.0;
    bgProgBar.style.transform =`scaleX(${progCount}%)`;
    updateBg(bgNextIndex);
}

for(let i = 0; i < bgSelectors.length; i++) {
    bgSelectors[i].addEventListener('click', selectBg.bind(this, i));
}

const moveProg = () => {
    if(progCount > 100.0) {
        rotateBg();
        progCount = 0.0;
    }
    progCount += .1;
    bgProgBar.style.transform =`scaleX(${progCount}%)`;
    setTimeout(moveProg, .1);
};

document.addEventListener('DOMContentLoaded', moveProg);

const toggleIntroBox = () => {
    introBox.classList.toggle('opacity-zero');
};

introBox.addEventListener('click', toggleIntroBox);

const toggleMobileNav = () => {
    mobileNavButton.classList.toggle('mobile-nav-activated');
    mobileNav.classList.toggle('mobile-nav-opened');
};

mobileNavButton.addEventListener('click', toggleMobileNav);