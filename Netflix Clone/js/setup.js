//carregado do github https://owlcarousel2.github.io/OwlCarousel2/demos/basic.html
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:5,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function openRickAndMorty(){
    window.open("https://www.youtube.com/watch?v=DuYpZeszaM4");
}
function moreInformation(){
    window.open("https://pt.wikipedia.org/wiki/Rick_and_Morty");
}