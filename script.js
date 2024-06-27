
document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');
    const info = document.querySelector('.info');
    const resetButton = document.getElementById('reset');
    const imgbox = document.querySelector('.imgbox img');
    const backgroundMusic = document.getElementById('backgroundMusic');
    let turn = "X";
    let isGameOver = false;

    // Function to change turn
    const changeTurn = () => {
        return turn === "X" ? "O" : "X";
    };

    // Function to check win
    const checkWin = () => {
        const boxtexts = document.querySelectorAll('.boxtext');
        const wins = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        wins.forEach(e => {
            if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "")) {
                info.innerText = boxtexts[e[0]].innerText + " Wins!";
                isGameOver = true;
                imgbox.style.width = "200px"; // Show the image
            }
        });
    };

    // Game Logic
    boxes.forEach(box => {
        box.addEventListener('click', () => {
            const boxtext = box.querySelector('.boxtext');
            if (boxtext.innerText === '' && !isGameOver) {
                boxtext.innerText = turn;
                checkWin();
                if (!isGameOver) {
                    turn = changeTurn();
                    info.innerText = "Turn for " + turn;
                }
            }
        });
    });

    // Reset button logic
    resetButton.addEventListener('click', () => {
        const boxtexts = document.querySelectorAll('.boxtext');
        boxtexts.forEach(boxtext => {
            boxtext.innerText = "";
        });
        turn = "X";
        isGameOver = false;
        info.innerText = "Turn for " + turn;
        imgbox.style.width = "0px"; // Hide the image
    });

    // Play background music
    backgroundMusic.play();
});
