import Player from "../main/Models/Player-Generics/Player";
import Cannon from "../main/Models/Player-Generics/Cannon";

const cannon = new Cannon();
const player = new Player('name', cannon);

test('Player has 3 lives', () => {
    expect(player.getLives()).toBe(3);
});