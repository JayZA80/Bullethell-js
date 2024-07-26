import Cannon from "../main/Models/Generics/Cannon";

const cannon = new Cannon();

test('Expect 100 for cannon\'s base damage', () => {
    expect(cannon.getBaseDMG()).toBe(100);
});

test('Expecting secondary cannon to be "true"', () => {
    cannon.toggleSecondaryCannons();
    expect(cannon.getSecondaryCannonStatus()).toBe(true);
});

test('Expecting full armament to be "true"', () => {
    cannon.toggleFullArmament();
    expect(cannon.getFullArmamanetStatus()).toBe(true);
});

test('Expecting to be on stage 3 cannons', () => {
    cannon.nextStage();
    cannon.nextStage();
    cannon.nextStage();
    cannon.nextStage();
    cannon.nextStage();
    cannon.nextStage();
    expect(cannon.getCurrentStage()).toBe(3);
});

test('Expect the cannon\'s stage to be reset to 1', () => {
    cannon.resetStage();
    expect(cannon.getCurrentStage()).toBe(1);
});
