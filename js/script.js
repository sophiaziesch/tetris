window.addEventListener("load", () => {
	const startButton = document.getElementById("start-button");
	const restartButton = document.getElementById("restart-button");
	let game;

	startButton.addEventListener("click", () => {
		startGame();
	});

	restartButton.addEventListener("click", () => {
		location.reload();
	});

	function startGame() {
		game = new Game();
		game.start();
		game.makeStartGrid();
	}
});
