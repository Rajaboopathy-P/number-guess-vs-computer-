document.addEventListener('DOMContentLoaded', () => {
    const humanInput = document.getElementById('human');
    const computerInput = document.getElementById('computer');
    const resultEl = document.getElementById('result');
    const targetEl = document.getElementById('target').querySelector('span');
    const roundsEl = document.getElementById('rounds');
    const playerScoreEl = document.getElementById('playerScore');
    const computerScoreEl = document.getElementById('computerScor
    const historyList = document.getElementById('history');
    const difficultySel = document.getElementById('difficulty');

    let min =
        
    let max = 20;
    let rounds = 0;
    let playerScore = 0;
    let computerScore = 0;

    function setDifficulty() {
        const d = difficultySel.value;
        max = d === 'easy' ? 10 : d === 'hard' ? 50 : 20;
        humanInput.placeholder = `${min}-${max}`;
        humanInput.min = min;
        humanInput.max = max;
    }

    function randInt(a, b) {
        return Math.floor(Math.random() * (b - a + 1)) + a;
    }

    function updateUI(message) {
        resultEl.textContent = message;
        roundsEl.textContent = rounds;
        playerScoreEl.textContent = playerScore;
        computerScoreEl.textContent = computerScore;
    }

    function resetGame() {
        rounds = 0;
        playerScore = 0;
        computerScore = 0;
        humanInput.value = '';
        computerInput.value = '';
        historyList.innerHTML = '';
        targetEl.textContent = '?';
        updateUI('Game reset');
    }

    function playRound() {
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
