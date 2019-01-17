document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/*
function debounce (func, wait = 20, inmediate = true) {
    var timeout;
    return function(){
        var context = this, args = arguments;
        var later = function(){
            timeout = null;
            if(!inmediate) func.apply(context, args);
        };
        var callNow = inmediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callNow) func.apply(context, args);
    };
};

const imagesAnimated = document.querySelectorAll('.animatedElement');

function checkAnimate(e){
    imagesAnimated.forEach(imageAnimate => {
        const slideInAt = (window.scrollY + window.innerHeight) - imageAnimate.height / 2;

        const imageBottom = imageAnimate.offsetTop + imageAnimate.height;
        const isHalfShown = slideInAt > imageAnimate.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if(isHalfShown && isNotScrolledPast){
            imageAnimate.classList.add('.animatedElement');
        } else {
            imageAnimate.classList.remove('.animatedElement');
        }
    })
}

window.addEventListener('scroll', debounce(checkAnimate))*/
