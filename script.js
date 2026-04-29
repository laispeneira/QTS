
function maiorNumero(a,b){
  if (a>b){
    return a
  }
  else {
    return b 
  }
}
function mensagemBoasVindas(nome) {
  return `Olá, ${nome}!`;
}
function somar(c,d){
  return c + d
}
module.exports = { maiorNumero, mensagemBoasVindas, somar };
