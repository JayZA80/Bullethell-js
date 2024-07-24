import Player from './Models/Player-Generics/Player.js';
// // import { canvas } from './Views/canvas.js';

const test = new Player('test');
console.log(`Lives: ${test.getLives()}`);
test.loseLife();
console.log(`Lives: ${test.getLives()}`);
