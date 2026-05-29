// Check unlocked levels in localStorage
document.addEventListener("DOMContentLoaded", function () {
    let unlockedLevels = JSON.parse(localStorage.getItem("unlockedLevels")) || ["rainwater"]; // First level unlocked

    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let option = card.getAttribute("onclick")?.match(/'([^']+)'/)?.[1]; // Extract level name
        let button = card.querySelector(".choose-btn");

        if (!unlockedLevels.includes(option)) {
            card.classList.add("locked"); // Apply locked style
            if (button) {
                button.innerText = "LOCKED";
                button.disabled = true;
            }
        } else {
            card.classList.remove("locked");
            if (button) {
                button.innerText = "PLAY";
                button.disabled = false;
            }
        }
    });
});

// Function to redirect & check unlocked status
function chooseOption(option, event) {
    if (event) {
        event.stopPropagation();
    }
    
    let gamePages = {
        "rainwater": "../WaterConservationGame/index.html",
        "extract_groundwater": "../surplus.html",
        "more_groundwater": "../filter_water.html",
        "do_nothing": "../micro_irrigation.html"
    };

    let unlockedLevels = JSON.parse(localStorage.getItem("unlockedLevels")) || ["rainwater"];

    if (!unlockedLevels.includes(option)) {
        alert("This level is locked! Please complete the previous levels first.");
        return;
    }

    if (gamePages[option]) {
        window.location.href = gamePages[option];
    }
}