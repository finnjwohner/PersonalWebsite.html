const imgs = document.images;
let counter = 0;

const fadeIn = () => {
    const header = document.querySelector('header');
    header.style.opacity = 1;
    
    const headerName = document.querySelector('header .container h1');
    setTimeout(function() {
        headerName.style.opacity = 1;
        headerName.style.transform = 'translateY(0)';
    }, 800);
    
    const headerSub = document.querySelector('header .container h2');
    setTimeout(function() {
        headerSub.style.opacity = 1;
        headerSub.style.transform = 'translateY(0)';
    }, 1000);
    
    const pageLine = document.querySelector('.page-line-right');
    setTimeout(function() {
        pageLine.style.height = '100%';
    }, 1300);
    
    const locationA = document.querySelector('header .container a');
    setTimeout(function() {
        locationA.style.opacity = 1;
        locationA.style.transform = 'translateY(0)';
    }, 1700);
}

const incrementCounter = () => {
    counter++;
    if(counter == imgs.length)
        fadeIn();
}

Array.prototype.forEach.call(imgs, function(img) {
    if(img.complete)
        incrementCounter();
    else {
        img.addEventListener('load', incrementCounter);
    }
        
})