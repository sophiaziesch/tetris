# Tetris Game

[Click here to play the deployed game](https://example.com)

## Description

This is a classic implementation of the Tetris game using JavaScript. The game provides an interactive experience where players can control falling tetromino shapes within a grid, aiming to clear lines and achieve the highest score.

## MVP (Minimum Viable Product)

- Display a grid-based game area with a fixed size.
- Allow tetromino shapes to fall and be controlled using arrow keys.
- Implement collision detection to prevent overlapping or going beyond the boundaries.
- Detect completed lines and clear them from the grid.
- Display the score and update it based on cleared lines.

## Backlog

- Levels: Increase the game difficulty by introducing levels with faster falling speed.
- Sound Effects: Add sound effects for various game events, such as line clears or tetromino movements.
- Next Shape Preview: Display the next tetromino shape to give players a preview of the upcoming piece.
- High Score Tracking: Implement a high score system and store the top scores.
- Mobile Touch Support: Enable touch gestures for controlling tetromino movements on mobile devices.

## Data Structure

- `Game` class:

  - Properties: grid, score, currentTetromino, nextTetromino, gameover
  - Methods: initialize, start, update, moveTetromino, rotateTetromino, lockTetromino, clearLines, updateScore, checkGameOver

- `Tetromino` class:
  - Properties: shape, position
  - Methods: move, rotate

## States and States Transitions

- **Start Screen**: Initial screen with a game title and start button.

  - Transition: Clicking the start button transitions to the **Game Screen**.

- **Game Screen**: The main gameplay screen where the tetrominoes fall and the game is played.

  - Transition: Game over condition transitions to the **Game Over Screen**.

- **Game Over Screen**: Displays the final score and provides options to restart or quit the game.
  - Transition: Clicking the restart button transitions back to the **Start Screen**.

## Tasks

1. Set up the basic file structure and project setup.
2. Create the game grid and initialize the game state.
3. Implement tetromino shape generation and falling logic.
4. Handle user input for tetromino movement and rotation.
5. Implement collision detection and locking mechanism.
6. Detect and clear completed lines from the grid.
7. Update and display the score based on cleared lines.
8. Implement game over logic and transition to the game over screen.
9. Style the game interface and add visual elements.
10. Test the game thoroughly and fix any bugs or issues.

## Links

- Trello Board: [Project Trello Link](https://trello.com/your-project-board)
- Slides: [Project Slides Link](https://slides.com/your-project-slides)
- GitHub Repository: [Project GitHub Link](https://github.com/your-username/tetris-game)
- Deployment: [Project Deployment Link](https://example.com)
