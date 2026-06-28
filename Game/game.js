document.addEventListener('DOMContentLoaded', () => {
    c
        const humanVal = Number(humanInput.value);
        if (!humanInput.value || isNaN(humanVal) || humanVal < min || humanVal > max) {
            alert(`Enter a number between ${min} and ${max}`);
            return;
        }

        const target = randInt(min, max);
        const computerGuess = randInt(min, max);
        const dPlayer = Math.abs(target - humanVal);
        const dComputer = Math.abs(target - computerGuess);

        computerInput.value = computerGuess;
        targetEl.textContent = target;

        let roundResult = 'Tie';
        if (dPlayer < dComputer) {
            roundResult = 'You win';
            playerScore += 1;
        } else if (dPlayer > dComputer) {
            roundResult = 'Computer wins';
            computerScore += 1;
        }

        rounds += 1;
        updateUI(roundResult);

        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = `#${rounds} — target:${target} you:${humanVal} comp:${computerGuess} → ${roundResult}`;
        historyList.prepend(li);
        humanInput.select();
    }

    document.getElementById('playBtn').addEventListener('click', playRound);
    document.getElementById('resetBtn').addEventListener('click', resetGame);
    difficultySel.addEventListener('change', () => {
        setDifficulty();
        resetGame();
    });

    humanInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            playRound();
        }
    });

    setDifficulty();
    updateUI('Ready');
});
