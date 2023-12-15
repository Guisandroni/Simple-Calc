function calc(taf) {
  var valor1 = parseFloat(document.getElementById("entrada-first").value);
  var valor2 = parseFloat(document.getElementById("entrada-second").value);

  var resultado = 0;

  switch (taf) {
    case "+":
      resultado = valor1 + valor2;

      break;

    case "-":
      resultado = valor1 - valor2;
      break;

    case "*":
      resultado = valor1 * valor2;
      break;

    case "/":
      resultado = valor1 / valor2;
      break;
  }
  document.getElementById("saida").value = resultado;

  var firsthistory =
    "<div>" + valor1 + " " + taf + " " + valor2 + " = " + resultado + "</div>";

  var history = document.getElementById("history");

  history.innerHTML = firsthistory + history.innerHTML;

  if (history.children.length > 10) {
    history.removeChild(history.childNodes[10]);
  }
}

function soma() {
  var valor1 = parseFloat(document.getElementById("entrada-first").value);
  var valor2 = parseFloat(document.getElementById("entrada-second").value);

  var resultado = valor1 + valor2;
  document.getElementById("saida").value = resultado;
}

function subtrair() {
  var valor1 = parseFloat(document.getElementById("entrada-first").value);
  var valor2 = parseFloat(document.getElementById("entrada-second").value);

  var resultado = valor1 - valor2;
  document.getElementById("saida").value = resultado;
}

function multiplicar() {
  var valor1 = parseFloat(document.getElementById("entrada-first").value);
  var valor2 = parseFloat(document.getElementById("entrada-second").value);

  var resultado = valor1 * valor2;
  document.getElementById("saida").value = resultado;
}

function dividir() {
  var valor1 = parseFloat(document.getElementById("entrada-first").value);
  var valor2 = parseFloat(document.getElementById("entrada-second").value);

  var resultado = valor1 / valor2;
  document.getElementById("saida").value = resultado;
}
