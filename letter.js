// ======================================================
// LETTER.JS
// ======================================================



// ======================================================
// ELEMENTS
// ======================================================

const lastThingButton = document.getElementById("lastThing");
const surprise = document.getElementById("surprise");



// ======================================================
// HIDE SURPRISE INITIALLY
// ======================================================

surprise.style.display = "none";
surprise.style.opacity = "0";
surprise.style.transform = "translateY(30px)";



// ======================================================
// ONE LAST THING
// ======================================================

lastThingButton.addEventListener("click", function () {

    lastThingButton.style.display = "none";

    surprise.style.display = "block";

    setTimeout(function () {

        surprise.style.transition = "all .8s ease";

        surprise.style.opacity = "1";
        surprise.style.transform = "translateY(0)";

        surprise.scrollIntoView({

            behavior: "smooth",
            block: "center"

        });

    }, 100);

});



// ======================================================
// FADE PAGE IN
// ======================================================

document.body.style.opacity = "0";

window.addEventListener("load", function () {

    document.body.style.transition = "opacity 1.2s ease";

    document.body.style.opacity = "1";

});



// ======================================================
// BACK BUTTON FADE
// ======================================================

const backButton = document.querySelector(".backButton");

backButton.addEventListener("click", function (e) {

    e.preventDefault();

    document.body.style.opacity = "0";

    setTimeout(function () {

        window.location.href = "index.html";

    }, 600);

});



// ======================================================
// LITTLE EASTER EGG ❤️
// ======================================================

let clicks = 0;

document.querySelector("h1").addEventListener("click", function () {

    clicks++;

    if (clicks === 6) {

        alert(
`❤️

Happy Six Months. ❤️

I love you.

Thank you for being my favourite person.

❤️`
        );

        clicks = 0;

    }

});



// ======================================================
// CONSOLE MESSAGE
// ======================================================

console.log(
"%cFor my favourite person ❤️",
"font-size:20px;color:#e60023;font-weight:bold;"
);
// ======================================
// DARK MODE
// ======================================

const darkModeButton = document.getElementById("darkModeButton");

darkModeButton.addEventListener("click", function(){

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        darkModeButton.innerHTML = "☀️";

    }

    else{

        darkModeButton.innerHTML = "🌙";

    }

});