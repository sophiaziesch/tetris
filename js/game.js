class Game {
	constructor() {
		this.startScreen = document.getElementById("game-intro");
		this.gameScreen = document.getElementById("game-screen");
		this.endScreen = document.getElementById("game-end");
		this.gameContainer = document.getElementById("game-container");
		this.height = 800;
		this.width = 400;
		this.pieces = [];
		this.isGameOver = false;
		this.score = 0;
		this.level = 1;
		this.animateId;
	}

	start() {
		this.gameScreen.style.width = `${this.width}px`;
		this.gameScreen.style.height = `${this.height}px`;

		this.startScreen.style.display = "none";
		this.gameContainer.style.display = "block";
		this.gameScreen.style.display = "block";

		this.gameLoop();
	}

	gameLoop() {
		this.update();
		if (this.animateId % 400 === 0) {
			this.pieces.push(new Piece(this.gameScreen));
		}
		if (this.isGameOver) {
			this.endGame();
		} else {
			this.animateId = requestAnimationFrame(() => this.gameLoop());
		}
	}

	/* update() {
		this.currPiece.move();
		const piecesToKeep = [];
		this.pieces.forEach(piece => {
            piece.move()
            if ()
        });
	} */
}
