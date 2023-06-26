window.addEventListener("load", () => {
	const startButton = document.getElementById("start-button");
	const restartButton = document.getElementById("restart-button");
	let game;

	startButton.addEventListener("click", () => {
		startGame();
	});

	restartButton.addEventListener("cick", () => {
		location.reload();
	});

	function startGame() {
		game = new Game();
		game.start();
		document.addEventListener("keydown", (event) => {
			const key = event.key;
			const possibleKeys = ["ArrowLeft", "ArrowRight", "ArrowDown"];
			if (possibleKeys.includes(key)) {
				switch (key) {
					case "ArrowLeft":
						game.currPiece.rotateLeft = -1;
						break;
					case "ArrowRight":
						game.currPiece.rotateRight = 1;
						break;
					case "ArrowDown":
						game.currPiece.goDown = 1;
						break;
				}
			}
		});
		document.addEventListener("keyup", (event) => {
			const key = event.key;
			const possibleKeys = ["ArrowLeft", "ArrowRight", "ArrowDown"];
			/* if(possibleKeys.includes(key)) {
                switch(key) {
                    to be continued
                }
            } */
		});
	}
});
