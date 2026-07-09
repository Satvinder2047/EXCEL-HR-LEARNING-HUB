// =======================================
// EXCEL & HR LEARNING HUB
// script.js
// =======================================

// Website Loaded
console.log("Excel & HR Learning Hub Loaded Successfully!");

// =======================================
// Search Function
// =======================================

function searchSite() {

    let search = document.getElementById("searchBox").value.toLowerCase().trim();

    if (search === "") {
        alert("Please enter an Excel function.");
        return;
    }

    switch (search) {

        case "if":
            window.location.href = "excel/if.html";
            break;

        case "sum":
            window.location.href = "excel/sum.html";
            break;

        case "average":
            window.location.href = "excel/average.html";
            break;

        case "countif":
            window.location.href = "excel/countif.html";
            break;

        case "vlookup":
            window.location.href = "excel/vlookup.html";
            break;

        case "xlookup":
            window.location.href = "excel/xlookup.html";
            break;

        case "filter":
            window.location.href = "excel/filter.html";
            break;

        case "sumifs":
            window.location.href = "excel/sumifs.html";
            break;

        case "index":
            window.location.href = "excel/index.html";
            break;

        case "match":
            window.location.href = "excel/match.html";
            break;

        case "let":
            window.location.href = "excel/let.html";
            break;

        case "lambda":
            window.location.href = "excel/lambda.html";
            break;

        default:
            alert("Tutorial coming soon for: " + search);
    }
}

// Press Enter to Search
document.addEventListener("DOMContentLoaded", function () {

    const box = document.getElementById("searchBox");

    if (box) {

        box.addEventListener("keypress", function (event) {

            if (event.key === "Enter") {

                searchSite();

            }

        });

    }

});

// =======================================
// Smooth Scroll
// =======================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});

// =======================================
// Footer Year
// =======================================

document.addEventListener("DOMContentLoaded", () => {

    const year = new Date().getFullYear();

    const footer = document.getElementById("year");

    if (footer) {

        footer.textContent = year;

    }

});
// ===========================
// Reading Progress Bar
// ===========================

window.addEventListener("scroll", function () {

let winScroll = document.body.scrollTop || document.documentElement.scrollTop;

let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

let scrolled = (winScroll / height) * 100;

let progress = document.getElementById("progressBar");

if(progress){

progress.style.width = scrolled + "%";

}

});
// ===========================
// IF Function Simulator
// ===========================

function checkResult() {

    let marks = document.getElementById("marks");

    if (!marks) return;

    let value = Number(marks.value);

    let result = document.getElementById("resultText");

    if (value >= 35) {

        result.innerHTML = "✅ Pass";

        result.className = "text-success";

    } else {

        result.innerHTML = "❌ Fail";

        result.className = "text-danger";

    }

}
