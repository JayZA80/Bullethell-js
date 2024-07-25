import Player from "../main/Models/Player-Generics/Player";
import Cannon from "../main/Models/Player-Generics/Cannon";

const cannon = new Cannon();
const player = new Player('name', cannon);

test('Loses 2 lives then gains 1 life, to end with 2 lives', () => {
    player.loseLife();
    player.loseLife();
    player.gainLife();
    expect(player.getLives()).toBe(2);
});

test('Gets two 1.15 power modifiers to end with 1.32 power', () => {
    player.powerModifier(1.15);
    player.powerModifier(1.15);
    expect(player.getPower()).toBe(1.32);
});

test('Uses 2 bombs then gains 1 bomb, to end with 2 bombs', () => {
    player.useBomb();
    player.useBomb();
    player.gainBomb();
    expect(player.getBombs()).toBe(2);
});

test('Returns correct cannon for player', () => {
    expect(player.getCannon()).toBe(cannon);
});