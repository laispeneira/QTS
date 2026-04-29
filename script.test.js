const { maiorNumero, mensagemBoasVindas, somar } = require('./script');

test('maior numero', () => {
  expect(maiorNumero(2, 3)).toBe(3);
});

test('mensagem de boas vindas', () => {
  expect(mensagemBoasVindas('Lais')).toBe('Olá, Lais!');
});
test('somar dois numeros', () => {
  expect(somar(2, 3)).toBe(5);
});
