import Team from '../team';
import Character from '../character'

// describe('Team', () => {
//     let team;
//     let character1;
//     let character2;
//     let character3;

//     beforeEach(() => {
//         team = new Team();
//         character1 = new Character('Alex', 'Attack', 1);
//         character2 = new Character('Kate', 'Healing', 2);
//         character3 = new Character('Alex', 'Attack', 1); // Дубликат
//     });

//     test('должен добавлять персонажа в команду', () => {
//         team.add(character1);
//         expect(team.toArray()).toContain(character1);
//     });

//     test('должен выбрасывать ошибку при добавлении дубликата', () => {
//         team.add(character1);
//         expect(() => team.add(character1)).toThrow('Персонаж уже существует в команде');
//     });

//     test('должен добавлять нескольких персонажей', () => {
//         team.addAll(character1, character2);
//         expect(team.toArray()).toContain(character1);
//         expect(team.toArray()).toContain(character2);
//     });

//     test('должен игнорировать дубликаты при добавлении нескольких персонажей', () => {
//         team.add(character1);
//         team.addAll(character1, character2);
//         expect(team.toArray()).toHaveLength(2); // Должно быть два уникальных персонажа
//     });

//     test('метод toArray должен возвращать массив членов команды', () => {
//         team.add(character1);
//         team.add(character2);
//         const membersArray = team.toArray();
//         expect(membersArray).toHaveLength(2);
//         expect(membersArray).toContain(character1);
//         expect(membersArray).toContain(character2);
//     });
// });


describe('Team', () => {
    let team;
    let character1;
    let character2;

    beforeEach(() => {
        team = new Team();
        character1 = new Character('Герой 1', 'Атакующий');
        character2 = new Character('Герой 2', 'Защитник');
    });

    test('должен добавлять персонажа в команду', () => {
        team.add(character1);
        expect(team.toArray()).toContain(character1);
    });

    test('должен выбрасывать ошибку при добавлении одного и того же персонажа дважды', () => {
        team.add(character1);
        expect(() => team.add(character1)).toThrowError('Персонаж уже есть в команде.');
    });

    test('должен добавлять нескольких персонажей в команду, не добавляя дубликатов', () => {
        team.addAll(character1, character2);
        expect(team.toArray()).toEqual(expect.arrayContaining([character1, character2]));

        // Попытка добавить тех же персонажей снова
        team.addAll(character1, character2);
        expect(team.toArray()).toEqual(expect.arrayContaining([character1, character2]));
        expect(team.toArray().length).toBe(2); // Убедимся, что длина массива не изменилась
    });

    test('метод toArray должен возвращать массив членов команды', () => {
        team.add(character1);
        team.add(character2);
        const membersArray = team.toArray();
        expect(membersArray).toHaveLength(2);
        expect(membersArray).toContain(character1);
        expect(membersArray).toContain(character2);
    });
});