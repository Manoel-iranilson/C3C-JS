Baskara = (ax2, bx, c) => {
  let delta = bx * bx - 4 * ax2 * c;

  if (delta < 0) {
    console.log(delta);
    return console.log("Delta é Negativo");
  }

  let raiz = Math.sqrt(delta);

  let x1 = (-bx + raiz) / (2 * ax2);
  let x2 = (-bx - raiz) / (2 * ax2);

  let baskara = [x1, x2];

  console.log(`O valor de x1 e x2 são respectivamente : ${baskara}`);
};

Baskara(3, -5, 12);
