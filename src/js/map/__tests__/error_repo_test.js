import ErrorRepository from '../error_repo';

let err;

beforeEach(() => {
    err = new ErrorRepository()
});

test.each([
    ['404', 404, 'Not found'], 
    ['500', 500, 'Internal Server Error'], 
    ['505', 505, 'HTTP Version Not Supported'],
])("метод translate должен корректно показывать информацию об ошибке с кодом %s", (_, code, expected) => {
    const result = err.translate(code);
    expect(result).toBe(expected);
})

test("метод translate должен давать ошибку Unknown error, если код отсутствует в контейнере", () => {
    expect(err.translate(200)).toBe('Unknown error')
})