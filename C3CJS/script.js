// Questão 01
Verificar = () => {
  const lado01 = document.getElementById("lado01");
  const lado02 = document.getElementById("lado02");
  const lado03 = document.getElementById("lado03");

  const title = document.getElementById("title");
  const foto = document.getElementById("foto");
  const img = document.createElement("img");

  foto.innerHTML = "";
  title.innerHTML = "";
  if (lado01.value == "" || lado02.value == "" || lado03 == "") {
    return alert("preencha todos os dados");
  }

  if (lado01.value == lado02.value && lado03.value == lado02.value) {
    title.innerHTML = "Equilatero";
    img.setAttribute("src", "../C3CJS/assents/Equilatero.jpg");
  } else if (
    lado01.value == lado02.value ||
    lado03.value == lado02.value ||
    lado01.value == lado03.value
  ) {
    title.innerHTML = "isosceles";
    img.setAttribute("src", "../C3CJS/assents/Isosceles.jpg");
  } else {
    title.innerHTML = "Escaleno";
    img.setAttribute("src", "../C3CJS/assents/Escaleno.jpg");
  }
  foto.appendChild(img);
};

// Questão 02
ResolverFormula = () => {
  const A = document.getElementById("A");
  const B = document.getElementById("B");
  const C = document.getElementById("C");
  const res02 = document.getElementById("res02");
  res02.innerHTML = "";

  Baskara = (ax2, bx, c) => {
    let delta = bx * bx - 4 * ax2 * c;

    if (delta < 0) {
      return (res02.innerHTML = `Delta é Negativo: ${delta}`);
    }

    let raiz = Math.sqrt(delta);

    let x1 = (-bx + raiz) / (2 * ax2);
    let x2 = (-bx - raiz) / (2 * ax2);

    let baskara = [x1, x2];
    return (res02.innerHTML = `O valor de x1 e x2 são respectivamente : ${baskara}`);
  };
  Baskara(A.value, B.value, C.value);
};

// Questão 03
VerificarNota = () => {
  const Nota = document.getElementById("Nota");
  const res = document.getElementById("res");
  res.innerHTML = "";

  if (Nota.value > 100 || Nota.value < 0) {
    return alert("Nota tem que ser entre 0 e 100");
  }

  //   logica das notas
  if (Nota.value < 38) {
    return (
      (res.innerHTML = `Reprovado`), (res.style = "background-color: 	#FA8072;")
    );
  }

  if (Nota.value % 5 == 0) {
    res.style = "background-color: #32CD32;";
    res.innerHTML = `Aprovado`;
  } else if ((parseInt(Nota.value) + 1) % 5 == 0) {
    res.style = "background-color: #32CD32;";
    res.innerHTML = `Aprovado , nota arredondada: ${parseInt(Nota.value) + 1}`;
  } else if ((parseInt(Nota.value) + 2) % 5 == 0) {
    res.style = "background-color: #32CD32;";
    res.innerHTML = `Aprovado , nota arredondada: ${parseInt(Nota.value) + 2}`;
  } else if ((parseInt(Nota.value) - 2) % 5 == 0) {
    res.style = "background-color: #32CD32;";
    res.innerHTML = `Aprovado , nota arredondada: ${parseInt(Nota.value) - 2}`;
  } else if ((parseInt(Nota.value) - 1) % 5 == 0) {
    res.style = "background-color: #32CD32;";
    res.innerHTML = `Aprovado , nota arredondada: ${parseInt(Nota.value) - 1}`;
  }
};

// Questão 04
Gerar = () => {
  const numero = document.getElementById("numero");
  const res04 = document.getElementById("res04");
  res04.innerHTML = "";

  Questao = (valor) => {
    let conta = [];
    if (valor <= 0) {
      return alert("numero tem que ser positivo(acima de 0)");
    }
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
    res04.innerHTML = conta;
  };

  Questao(numero.value);
};
