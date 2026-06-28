
            alert(`Enter a number between ${min} and ${max}`);
            return;
        }
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
