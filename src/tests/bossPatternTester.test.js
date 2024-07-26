import PatternList from '../DataStructures/PatternList';
import Boss from '../main/Models/Generics/Boss';

const patterns = new PatternList();
const boss = new Boss('Text', 10000, patterns);

test('Boss\' pattern list created.', () => {
    expect(boss.getPatterns().getList()).toStrictEqual([]);
});

test('Check\'s list\'s adding functions', () => {
    boss.getPatterns().addToFront('test');
    boss.getPatterns().addToBack('test');
    expect(boss.getPatterns().getList()).toStrictEqual(['test', 'test']);
});

test('Check\'s list clearing function', () => {
    boss.getPatterns().addToFront('test');
    boss.getPatterns().addToBack('test');
    boss.getPatterns().clear();
    expect(boss.getPatterns().getList()).toStrictEqual([]);
});

test('Check\'s lists removal (rear) functions', () => {
    boss.getPatterns().addToFront('test1');
    boss.getPatterns().addToBack('test2');
    boss.getPatterns().removeFromBack();
    expect(boss.getPatterns().getList()).toStrictEqual(['test1']);
});

test('Check\'s lists removal (rear) functions', () => {
    boss.getPatterns().addToBack('test2');
    boss.getPatterns().removeFromFront();
    expect(boss.getPatterns().getList()).toStrictEqual(['test2']);
});
