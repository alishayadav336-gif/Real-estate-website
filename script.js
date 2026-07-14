// ===============================
// DreamHome Real Estate Platform
// script.js
// ===============================

// Welcome message
window.addEventListener("load", function () {
    console.log("Welcome to DreamHome Real Estate Platform!");
});

// ===============================
// Smooth Scroll for Buttons
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// ===============================
// Search Button
// ===============================

// ===============================
// Property Search
// ===============================

const searchBtn = document.querySelector(".search-box button");

if(searchBtn){

searchBtn.addEventListener("click", function(){

const city=document
.getElementById("searchInput")
.value

const cards=document.querySelectorAll(".property-card");

cards.forEach(function(card){

const propertyCity=card.dataset.city.toLowerCase();

if(propertyCity.includes(city) || city===""){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

}


// ===============================
// Property Card Hover Effect
// ===============================

const cards = document.querySelectorAll(".property-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});



// =======================
// Wishlist Button
// =======================

const hearts=document.querySelectorAll(".wishlist");

hearts.forEach(function(heart){

heart.addEventListener("click",function(){

const icon=this.querySelector("i");

if(icon.classList.contains("fa-regular")){

icon.classList.remove("fa-regular");

icon.classList.add("fa-solid");

icon.style.color="red";

}else{

icon.classList.remove("fa-solid");

icon.classList.add("fa-regular");

icon.style.color="black";

}

});

});

const hiddenElements = document.querySelectorAll(".featured, .about-preview, .contact-preview");

hiddenElements.forEach(el => {
    observer.observe(el);
});

// =======================
// Wishlist Button
// =======================

const hearts = document.querySelectorAll(".wishlist");

hearts.forEach(function(heart){

    heart.addEventListener("click", function(){

        const icon = this.querySelector("i");

        if(icon.classList.contains("fa-regular")){

            icon.classList.remove("fa-regular");
            icon.classList.add("fa-solid");
            icon.style.color = "red";

        } else {

            icon.classList.remove("fa-solid");
            icon.classList.add("fa-regular");
            icon.style.color = "black";

        }

    });

});