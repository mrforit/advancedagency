

var nav = document.querySelector('nav');
let height = window.innerHeight;
console.log( typeof height)

if (height <= 800 ){
    var pageheight = 400;
}
else{
    var pageheight = 800;
}
window.addEventListener('scroll', function() {
    if (window.pageYOffset > pageheight) {
        nav.classList.remove('navbar-dark');
        nav.classList.add('navbar-test');
    } else {
        nav.classList.remove('navbar-test');
        nav.classList.add('navbar-dark');
    }
});



$('.team-slider').owlCarousel({
    loop: true,            
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 450,
    margin: 20,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        991: {
            items: 3
        },
        1200: {
            items: 4
        },
        1920: {
            items: 4
        }
    }
});

$('.partner-slider').owlCarousel({
    loop: true,            
    nav: false,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 550,
    margin: 100,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        991: {
            items: 3
        },
        1200: {
            items: 4
        },
        1920: {
            items: 5
        }
    }
});


console.log("i'm working");