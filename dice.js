// JavaScript: script.js
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function playDiceGame() {
    const input = document.getElementById("playerNames").value;
    const playerNames = input.split(",").map(name => name.trim()).filter(name => name !== "");
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    if (playerNames.length === 0) {
        resultsDiv.textContent = "Please enter at least one player name.";
        return;
    }

    let scores = {};
    for (let player of playerNames) {
        let roll = rollDice();
        scores[player] = roll;
    }

    let maxScore = Math.max(...Object.values(scores));
    let winners = Object.keys(scores).filter(player => scores[player] === maxScore);

    let resultsHTML = "<h2>Game Results</h2><ul>";
    for (let player in scores) {
        resultsHTML += `<li>${player} rolled a ${scores[player]}</li>`;
    }
    resultsHTML += "</ul>";

    if (winners.length === 1) {
        resultsHTML += `<p class='winner'>Winner: ${winners[0]} with a score of ${maxScore}!</p>`;
    } else {
        resultsHTML += `<p class='tie'>It's a tie between: ${winners.join(", ")} with a score of ${maxScore}!</p>`;
    }

    resultsDiv.innerHTML = resultsHTML;
}
