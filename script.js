// ======================================================
// ELEMENTS
// ======================================================

const homepage = document.getElementById("homepage");
const boardPage = document.getElementById("boardPage");
const boardLink = document.getElementById("boardLink");

const homeButton = document.getElementById("homeButton");
const exploreButton = document.getElementById("exploreButton");

const notificationButton =
document.getElementById("notificationButton");

const messageButton =
document.getElementById("messageButton");

const searchBox =
document.getElementById("searchBox");

const darkModeButton =
document.getElementById("darkModeButton");

console.log(homepage);
console.log(boardPage);
console.log(boardLink);
console.log(homeButton);
console.log(exploreButton);
console.log(notificationButton);
console.log(messageButton);
console.log(searchBox);
console.log(darkModeButton);


// ======================================================
// OPEN BOARD
// ======================================================

boardLink.addEventListener("click", function(e){

    e.preventDefault();

    homepage.classList.add("hidden");
    boardPage.classList.remove("hidden");

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});



// ======================================================
// HOME BUTTON
// ======================================================

homeButton.addEventListener("click", function(){

    homepage.classList.remove("hidden");
    boardPage.classList.add("hidden");

    searchBox.value = "";

    document.querySelectorAll(".pin").forEach(function(pin){

        pin.style.display = "block";

    });

});



// ======================================================
// SEARCH
// ======================================================

searchBox.addEventListener("input", function(){

    const search =
    searchBox.value.toLowerCase().trim();

    if(search !== ""){

        homepage.classList.add("hidden");
        boardPage.classList.remove("hidden");

    }

    document.querySelectorAll(".pin").forEach(function(pin){

        const image = pin.querySelector("img");

        let text = "";

        if(image){

            text =
            (image.dataset.caption || "") +
            " " +
            (image.dataset.tags || "");

        }

        else{

            text =
            pin.innerText +
            " " +
            (pin.dataset.tags || "");

        }

        text = text.toLowerCase();

        if(search === "" || text.includes(search)){

            pin.style.display = "block";

        }

        else{

            pin.style.display = "none";

        }

    });

});// ======================================================
// IMAGE POPUP
// ======================================================

const overlay = document.createElement("div");

overlay.style.position = "fixed";
overlay.style.top = "0";
overlay.style.left = "0";
overlay.style.width = "100%";
overlay.style.height = "100%";
overlay.style.background = "rgba(0,0,0,.9)";
overlay.style.display = "none";
overlay.style.justifyContent = "center";
overlay.style.alignItems = "center";
overlay.style.zIndex = "99999";

document.body.appendChild(overlay);



const popupImage =
document.createElement("img");

popupImage.style.maxWidth = "90vw";
popupImage.style.maxHeight = "90vh";
popupImage.style.borderRadius = "20px";

overlay.appendChild(popupImage);



document.querySelectorAll(".pin img").forEach(function(img){

    img.addEventListener("click", function(){

        popupImage.src = img.src;

        overlay.style.display = "flex";

    });

});



overlay.addEventListener("click", function(){

    overlay.style.display = "none";

});



document.addEventListener("keydown", function(e){

    if(e.key === "Escape"){

        overlay.style.display = "none";

    }

});// ======================================================
// NOTIFICATION
// ======================================================

notificationButton.addEventListener("click", function(){

    alert(
"❤️ 1 New Notification\n\nHappy Six Months ❤️"
    );

});



// ======================================================
// MESSAGE
// ======================================================

messageButton.addEventListener("click", function(){

    alert(
"💬 From Jaanu\n\nThank you for the happiest six months ❤️"
    );

});



// ======================================================
// EXPLORE
// ======================================================

exploreButton.addEventListener("click", function(){

    alert(
"Hopefully we explore much much more ❤️"
    );

});// ======================================================
// OPEN LAST LETTER
// ======================================================

document.querySelectorAll(".pin.note")
.forEach(function(note){

    note.addEventListener("click", function(){

        if(
            !note.innerText.includes("Open Last")
        ) return;

        const open = confirm(
"Open your final letter? ❤️"
        );

        if(open){

            window.location.href =
            "letter.html";

        }

    });

});



// ======================================================
// DARK MODE
// ======================================================

darkModeButton.addEventListener("click", function(){

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        darkModeButton.innerHTML = "☀️";

    }

    else{

        darkModeButton.innerHTML = "🌙";

    }

});



// ======================================================
// CONSOLE MESSAGE
// ======================================================

console.log(
"%cMade with ❤️ for our six months.",
"font-size:18px;color:#e60023;font-weight:bold;"
);
