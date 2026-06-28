
            alert(`Enter a number between ${min} and ${max}`);
            return;'click', playRound);
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
