// Questão 01
Verificar = () => {
  const lado01 = document.getElementById("lado01");
  const lado02 = document.getElementById("lado02");
  const lado03 = document.getElementById("lado03");

  const foto = document.getElementById("foto");
  const img = document.createElement("img");

  foto.innerHTML = "";
  if (lado01.value == "" || lado02.value == "" || lado03 == "") {
    return alert("preencha todos os dados");
  }

  if (lado01.value == lado02.value && lado03.value == lado02.value) {
    console.log("Equilatero");
    img.setAttribute("src", "../Questao01/assents/Equilatero.jpg");
  } else if (
    lado01.value == lado02.value ||
    lado03.value == lado02.value ||
    lado01.value == lado03.value
  ) {
    console.log("isosceles");
    img.setAttribute("src", "../Questao01/assents/Isosceles.jpg");
  } else {
    console.log("Escaleno");
    img.setAttribute("src", "../Questao01/assents/Escaleno.jpg");
  }
  foto.appendChild(img);
};
