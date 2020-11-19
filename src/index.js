import './index.css'
import {clearCanvas} from './canvas.js';
import {drawPaddle,updatePaddlePosition,} from './paddle.js';
import {drawBall,updateBallPosition} from './ball.js';
import {collisionDetection,drawBricks} from "./bricks.js";
import {drawScore} from './score.js';
import {drawLives,} from './lives.js';


function draw() {
	clearCanvas();
	drawBricks();
	drawBall();
	drawPaddle();
	drawScore();
	drawLives();
	collisionDetection();

	updateBallPosition();
	updatePaddlePosition();

	requestAnimationFrame(draw);
}

draw();