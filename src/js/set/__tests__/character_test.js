import Character from '../character'

let character;

beforeEach(() => {
    character = new Character('Anna', 'Attack');
});

test('должен корректно создавать объект Character', () => {
    const correct = {
        level: 1,
        _name: 'Anna',
        _strategy: 'Attack', 
    };
    expect(character).toEqual(correct);
});

test('должен изменять имя персонажа', () => {
    character.name = 'Kris';
    expect(character.name).toBe('Kris');
});

test('должен изменять стратегию персонажа', () => {
    character.strategy = 'Magic defence';
    expect(character.strategy).toBe('Magic defence');
});