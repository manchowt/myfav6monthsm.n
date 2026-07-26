// ======================================================
// OUR PINTEREST ❤️
// SCRIPT.JS
// PART 1 - ELEMENTS, NAVIGATION & SEARCH
// ======================================================



// ======================================================
// ELEMENTS
// ======================================================

const homepage = document.getElementById("homepage");
const boardPage = document.getElementById("boardPage");
const boardLink = document.getElementById("boardLink");

const homeButton = document.getElementById("homeButton");
const exploreButton = document.getElementById("exploreButton");

const notificationButton = document.getElementById("notificationButton");
const messageButton = document.getElementById("messageButton");

const searchBox = document.getElementById("searchBox");



// ======================================================
// OPEN BOARD
// ======================================================

boardLink.addEventListener("click", function (e) {

    e.preventDefault();

    homepage.classList.add("hidden");
    boardPage.classList.remove("hidden");

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});



// ======================================================
// HOME BUTTON
// ======================================================

homeButton.addEventListener("click", function () {

    homepage.classList.remove("hidden");
    boardPage.classList.add("hidden");

    searchBox.value = "";

    document.querySelectorAll(".pin").forEach(function (pin) {

        pin.style.display = "block";

    });

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});



// ======================================================
// SEARCH
// ======================================================

searchBox.addEventListener("input", function () {

    const search = searchBox.value.toLowerCase().trim();

    if (search !== "") {

        homepage.classList.add("hidden");
        boardPage.classList.remove("hidden");

    }

    const pins = document.querySelectorAll(".pin");

    pins.forEach(function (pin) {

        const image = pin.querySelector("img");



        // ==========================
        // LETTER CARDS
        // ==========================

        if (!image) {

            const text =
                pin.innerText.toLowerCase();

            const tags =
                (pin.dataset.tags || "").toLowerCase();

            if (

                search === "" ||

                text.includes(search) ||

                tags.includes(search)

            ) {

                pin.style.display = "block";

            }

            else {

                pin.style.display = "none";

            }

            return;

        }



        // ==========================
        // IMAGE PINS
        // ==========================

        const caption =
            (image.dataset.caption || "").toLowerCase();

        const tags =
            (image.dataset.tags || "").toLowerCase();

        if (

            search === "" ||

            caption.includes(search) ||

            tags.includes(search)

        ) {

            pin.style.display = "block";

        }

        else {

            pin.style.display = "none";

        }

    });

});



// ======================================================
// ESC CLEARS SEARCH
// ======================================================

searchBox.addEventListener("keydown", function (e) {

    if (e.key === "Escape") {

        searchBox.value = "";

        document.querySelectorAll(".pin").forEach(function (pin) {

            pin.style.display = "block";

        });

    }

});
// ======================================================
// PART 2 - PINTEREST IMAGE POPUP
// ======================================================



// ======================================================
// CREATE OVERLAY
// ======================================================

const overlay = document.createElement("div");

overlay.style.position = "fixed";
overlay.style.top = "0";
overlay.style.left = "0";
overlay.style.width = "100vw";
overlay.style.height = "100vh";

overlay.style.display = "none";

overlay.style.justifyContent = "center";
overlay.style.alignItems = "center";

overlay.style.background = "rgba(0,0,0,.88)";
overlay.style.zIndex = "99999";

document.body.appendChild(overlay);



// ======================================================
// POPUP CARD
// ======================================================

const popup = document.createElement("div");

popup.style.width = "950px";
popup.style.maxWidth = "92vw";
popup.style.height = "88vh";

popup.classList.add("popup-card");
popup.style.borderRadius = "24px";

popup.style.display = "flex";

popup.style.overflow = "hidden";

overlay.appendChild(popup);



// ======================================================
// IMAGE
// ======================================================

const popupImage = document.createElement("img");

popupImage.style.width = "60%";
popupImage.style.height = "100%";

popupImage.style.objectFit = "cover";

popup.appendChild(popupImage);



// ======================================================
// RIGHT PANEL
// ======================================================

const rightPanel = document.createElement("div");

rightPanel.style.width = "40%";

rightPanel.style.padding = "35px";

rightPanel.style.display = "flex";
rightPanel.style.flexDirection = "column";

popup.appendChild(rightPanel);



// ======================================================
// TITLE
// ======================================================

const popupTitle = document.createElement("h2");

popupTitle.innerHTML = "❤️ my favourite person😁😝😽";

popupTitle.style.marginBottom = "18px";

rightPanel.appendChild(popupTitle);



// ======================================================
// CAPTION
// ======================================================

const popupCaption = document.createElement("p");

popupCaption.style.fontSize = "18px";
popupCaption.style.lineHeight = "1.8";

popupCaption.style.color = "#444";

popupCaption.style.flex = "1";

rightPanel.appendChild(popupCaption);



// ======================================================
// FOOTER
// ======================================================

const popupFooter = document.createElement("div");

popupFooter.innerHTML =
"📌 Saved to <b>my favourite person😁😝😽</b>";

popupFooter.style.color = "#777";
popupFooter.style.marginTop = "25px";

rightPanel.appendChild(popupFooter);



// ======================================================
// OPEN IMAGE
// ======================================================

document.querySelectorAll(".pin img").forEach(function(image){

    image.addEventListener("click",function(){

        popupImage.src = image.src;

        popupCaption.innerHTML =
            image.dataset.caption || "";



        // ==================================
        // SCREENSHOTS
        // ==================================

        if(

            image.src.includes("ilu") ||

            image.src.includes("lugn") ||

            image.src.includes("bemyg") ||

            image.src.includes("platonic") ||

            image.src.includes("1stpic2gether") ||

            image.src.includes("hypedbemyg")

        ){

            popupImage.style.objectFit = "contain";

            popupImage.style.background = "#f6f6f6";

            popupImage.style.padding = "20px";

        }



        // ==================================
        // EVERYTHING ELSE
        // ==================================

        else{

            popupImage.style.objectFit = "cover";

            popupImage.style.background = "transparent";

            popupImage.style.padding = "0";

        }

        overlay.style.display = "flex";

    });

});



// ======================================================
// CLOSE POPUP
// ======================================================

overlay.addEventListener("click",function(e){

    if(e.target===overlay){

        overlay.style.display="none";

    }

});



document.addEventListener("keydown",function(e){

    if(e.key==="Escape"){

        overlay.style.display="none";

    }

});
// ======================================================
// PART 3 - BUTTONS & FINAL FEATURES
// ======================================================



// ======================================================
// NOTIFICATION
// ======================================================

notificationButton.addEventListener("click", function () {

    alert(
`❤️ 1 New Notification

its been six monthsss.
its been longer`
    );

});



// ======================================================
// MESSAGE
// ======================================================

messageButton.addEventListener("click", function () {

    alert(
`💬 From jaanu

thank you for the happiest six months of my life.
i lovee youu :)`
    );

});



// ======================================================
// EXPLORE
// ======================================================

exploreButton.addEventListener("click", function () {

    alert("hopefully, we explore much much more");

});



// ======================================================
// SEARCH SHORTCUTS
// ======================================================

searchBox.addEventListener("keydown", function(e){

    if(e.key !== "Enter") return;

    const value = searchBox.value.toLowerCase().trim();

    if(value === "photos"){

        searchBox.value = "";

        document.querySelectorAll(".pin").forEach(function(pin){

            if(pin.querySelector("img")){

                pin.style.display = "block";

            }else{

                pin.style.display = "none";

            }

        });

    }

    if(value === "letters" || value === "note"){

        searchBox.value = "";

        document.querySelectorAll(".pin").forEach(function(pin){

            if(pin.classList.contains("note")){

                pin.style.display = "block";

            }else{

                pin.style.display = "none";

            }

        });

    }

    if(value === "screenshots" || value === "texts" || value === "chat"){

        searchBox.value = "";

        document.querySelectorAll(".pin").forEach(function(pin){

            const img = pin.querySelector("img");

            if(!img){

                pin.style.display = "none";
                return;

            }

            const src = img.src.toLowerCase();

            if(

                src.includes("ilu") ||
                src.includes("lugn") ||
                src.includes("bemyg") ||
                src.includes("platonic") ||
                src.includes("1stpic2gether") ||
                src.includes("hypedbemyg")

            ){

                pin.style.display = "block";

            }else{

                pin.style.display = "none";

            }

        });

    }

});



// ======================================================
// OPEN LAST LETTER
// ======================================================

document.querySelectorAll(".pin.note").forEach(function(note){

    note.addEventListener("click", function(){

        if(!note.innerText.includes("Open Last")) return;

        const open = confirm(
`❤️ Before you continue...

This is the very last thing.

Make sure you've looked through every pin first.

Press OK to open your letter ❤️`
        );

        if(open){

            document.body.style.opacity = "0";

            setTimeout(function(){

                window.location.href = "letter.html";

            },500);

        }

    });

});


// ======================================================
// DOUBLE CLICK HOME LOGO
// ======================================================

document.querySelector(".logo").addEventListener("dblclick", function(){

    homepage.classList.remove("hidden");
    boardPage.classList.add("hidden");

    searchBox.value = "";

    document.querySelectorAll(".pin").forEach(function(pin){

        pin.style.display = "block";

    });

});



// ======================================================
// CONSOLE MESSAGE
// ======================================================

console.log(
"%cMade with ❤️ for our six months.",
"font-size:18px;color:#e60023;font-weight:bold;"
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
