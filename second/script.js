const urlParams = new URLSearchParams(window.location.search);
const playerName = urlParams.get('playerName') || localStorage.getItem("playerName");

if (!playerName) {
    window.location.href = "../index.html";
} else {
    localStorage.setItem("playerName", playerName);
}

// Check unlocked levels in localStorage
document.addEventListener("DOMContentLoaded", function () {
    let unlockedLevels = ["rainwater"];
    try {
        unlockedLevels = JSON.parse(localStorage.getItem("unlockedLevels")) || ["rainwater"];
        if (!Array.isArray(unlockedLevels)) {
            unlockedLevels = ["rainwater"];
        }
    } catch (e) {
        unlockedLevels = ["rainwater"];
    }

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

    // Intercept Home button click to append playerName query param
    const homeBtn = document.querySelector(".home-nav-btn");
    if (homeBtn) {
        homeBtn.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "../index.html?playerName=" + encodeURIComponent(playerName);
        });
    }
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

    let unlockedLevels = ["rainwater"];
    try {
        unlockedLevels = JSON.parse(localStorage.getItem("unlockedLevels")) || ["rainwater"];
        if (!Array.isArray(unlockedLevels)) {
            unlockedLevels = ["rainwater"];
        }
    } catch (e) {
        unlockedLevels = ["rainwater"];
    }

    if (!unlockedLevels.includes(option)) {
        alert("This level is locked! Please complete the previous levels first.");
        return;
    }

    if (gamePages[option]) {
        window.location.href = gamePages[option] + "?playerName=" + encodeURIComponent(playerName);
    }
}