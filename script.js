window.addEventListener("scroll",()=>{

const elements=document.querySelectorAll(".box,.final");


elements.forEach(el=>{

const position=el.getBoundingClientRect().top;

if(position < window.innerHeight - 100){

el.style.opacity="1";
el.style.transform="translateY(0)";

}

});

});
document.querySelectorAll(".projet").forEach(projet => {

    const image = projet.querySelector(".slider-image");

    const images = image.dataset.images.split(",");

    let index = 0;

    projet.querySelector(".next").onclick = () => {

        index++;

        if(index >= images.length) index = 0;

        image.src = images[index];

    }

    projet.querySelector(".prev").onclick = () => {

        index--;

        if(index < 0) index = images.length - 1;

        image.src = images[index];

    }

});
/* ===========================
   GALERIE PROJETS
=========================== */

document.querySelectorAll(".projet").forEach((projet) => {

    const image = projet.querySelector(".slider-image");

    if (!image) return;

    const images = image.dataset.images
        .split(",")
        .map(img => img.trim())
        .filter(img => img !== "");

    let index = 0;

    const next = projet.querySelector(".next");
    const prev = projet.querySelector(".prev");

    next.addEventListener("click", () => {

        index++;

        if (index >= images.length) {

            index = 0;

        }

        image.src = images[index];

    });

    prev.addEventListener("click", () => {

        index--;

        if (index < 0) {

            index = images.length - 1;

        }

        image.src = images[index];

    });

});