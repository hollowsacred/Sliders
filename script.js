const up = document.querySelector(".up-button");
const down = document.querySelector(".down-button");
const sidebar = document.querySelector(".sidebar");
const mainSlide = document.querySelector(".main-slide");
const slidesCount = mainSlide.children.length;
const container = document.querySelector(".container");
sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;
let activeSlideIndex = 0;
up.addEventListener("click",() => {
    changeSlide("up");
});
down.addEventListener("click",() => {
    changeSlide("down");
});
function changeSlide(direction) {
    if (direction === "up") {
        activeSlideIndex++;
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0;
          
        }
    }
    else if (direction === "down") {
        activeSlideIndex--;
        if (activeSlideIndex === -1) {
            activeSlideIndex = slidesCount - 1;
        }
    }
    const height = container.clientHeight;
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}