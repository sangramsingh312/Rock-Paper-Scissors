let userScore = 0;
let computerScore = 0;
let highScore = 0;
let history = [];

// START GAME
function startGame() {
  const name = document.getElementById("modalUsername").value.trim();
  if (!name) return alert("Please enter your name");

  document.getElementById("navUsername").innerText = name;
  document.getElementById("nameModal").style.display = "none";
  document.getElementById("mainContent").style.display = "flex";
}

// TABS
function showTab(tabId, btn) {
  document
    .querySelectorAll(".tab-content")
    .forEach((t) => t.classList.remove("active"));
  document
    .querySelectorAll(".tab")
    .forEach((b) => b.classList.remove("active"));

  document.getElementById(tabId).classList.add("active");
  btn.classList.add("active");
}

