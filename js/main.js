let navbar = document.querySelector(".header .navbar");
let menuBtn = document.querySelector("#menu-btn");

menuBtn.onclick = () =>{
    menuBtn.classList.toggle("fa-times");
    navbar.classList.toggle("active");
};

var homeSwiper = new Swiper (".home-slider",{
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    navigation: {
        nextE1: "swiper-button-next",
        prevE1: "swiper-button-prev"
    },
});

var foodSwiper = new Swiper (".food-slider",{
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextE1: "swiper-button-next",
        prevE1: "swiper-button-prev"
    },
});

var gallerySwiper = new Swiper (".gallery-slider",{
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextE1: "swiper-button-next",
        prevE1: "swiper-button-prev"
    },
});