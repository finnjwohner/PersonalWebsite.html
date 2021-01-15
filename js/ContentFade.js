function ScrollAppearFirst() {
    const text1 = document.querySelector('.first-text');
    const text1Pos = text1.getBoundingClientRect().top;
    const text1ScreenPos = window.innerHeight / 1.3;

    if (text1Pos < text1ScreenPos) {
        text1.style.opacity = 1;
        text1.style.transform = 'translateX(0)';
    }
}

function ScrollAppearSecond() {
    const text2 = document.querySelector('.second-text');
    const text2Pos = text2.getBoundingClientRect().top;
    const text2ScreenPos = window.innerHeight / 1.3;

    if (text2Pos < text2ScreenPos) {
        text2.style.opacity = 1;
        text2.style.transform = 'translateX(0)';
    }
}

function ScrollAppearThird() {
    const text3 = document.querySelector('.third-text');
    const text3Pos = text3.getBoundingClientRect().top;
    const text3ScreenPos = window.innerHeight / 1.3;

    if (text3Pos < text3ScreenPos) {
        text3.style.opacity = 1;
        text3.style.transform = 'translateX(0)';
    }
}

function ScrollAppearLine() {
    const line = document.querySelector('.page-line-left');
    const linePos = line.getBoundingClientRect().top;
    const lineScreenPos = window.innerHeight / 1.3;

    if (linePos < lineScreenPos) {
        line.style.height = '120%';
    }
}

function ScrollAppearFree() {
    const free = document.querySelector('section h1');
    const freePos = free.getBoundingClientRect().top;
    const freeScreenPos = window.innerHeight / 1.3;

    if (freePos < freeScreenPos) {
        free.style.opacity = 1;
    }
}

window.addEventListener('scroll', ScrollAppearFirst);
window.addEventListener('scroll', ScrollAppearSecond);
window.addEventListener('scroll', ScrollAppearThird);
window.addEventListener('scroll', ScrollAppearLine);
window.addEventListener('scroll', ScrollAppearFree);
