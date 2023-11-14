const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// create an li and display it
highScoresList.innerHTML = highScores
    .map(score => {
        return `<li class="high-score">${score.name} - ${score.score}</li>`;
    }).join("");