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