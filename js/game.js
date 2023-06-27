class Game {
	constructor() {
		this.startScreen = document.getElementById("game-intro");
		this.gameScreen = document.getElementById("game-screen");
		this.endScreen = document.getElementById("game-end");
		this.gameContainer = document.getElementById("game-container");
		this.pieces = [];
		this.isGameOver = false;
		this.score = 0;
		this.level = 1;
		this.animateId;
	}

	start() {
		const ctx = this.gameScreen.getContext("2d");
		ctx.canvas.width = COLS * BLOCK_SIZE;
		ctx.canvas.height = ROWS * BLOCK_SIZE;
		ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

		this.startScreen.style.display = "none";
		this.gameContainer.style.display = "block";
	}

	makeStartGrid() {
		let grid = [];
		for (let i = 0; i < ROWS; i += 1) {
			grid.push([]);
			for (let j = 0; j < COLS; j += 1) {
				grid[grid.length - 1].push(0);
			}
		}
		return grid;
	}
}
