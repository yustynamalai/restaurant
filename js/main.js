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
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
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
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
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
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
});


document.addEventListener("DOMContentLoaded",function(){
    const boxs = document.querySelectorAll(".box");
    const home_btn = document.querySelector(".home_btn");

    boxs.forEach(function(box){
        box.addEventListener("click", function(){
            const boxId = box.getAttribute("data-id");
            window.location.href = `details.html?id=${boxId}`;
        });
    });
    home_btn.addEventListener("click", function() {
        window.location.href = "index.html";
    });
});