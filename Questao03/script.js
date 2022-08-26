Verificar = () => {
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
