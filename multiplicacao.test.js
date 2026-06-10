const multiplicacao = require ('./multiplicacao')

test('multiplica 2 por 3 e retorna 6', () => {
     expect(multiplicacao(2, 3)).toBe(6)
});

test('multiplica 3 por 3 e retorna 9', () => {
    expect(multiplicacao(3, 3)).toBe(9)})


test ('multiplicar numeros negativos', () => {
    expect(multiplicacao(-2, 3)).toBe(-6)
});

test ("multiplica 0 por 3 e retorna 0", () => {
    expect(multiplicacao(0, 3)).toBe(0);
});