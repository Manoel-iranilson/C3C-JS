Questao = (valor) => {
  let conta = [];

  for (let i = 1; i <= valor; i++) {
    if (i % 5 !== 0 && i % 9 !== 0) {
      conta.push(i);
    } else if (i % 5 == 0 && i % 9 == 0) {
      conta.push("LuidyMoura");
    } else if (i % 5 == 0) {
      conta.push("Luidy");
    } else {
      conta.push("Moura");
    }
  }
  console.log(conta);
};

Questao(45);
