var lista = new Array("img/arboles.jpg", "img/nieve.jpg","img/auras.jpg","img/mar0.jpg","img/mar1.jpg","img/mar2.jpg","img/mar3.jpg","img/mar4.jpg","img/mar5.jpg","img/mar6.jpg","img/mar7.jpg");

var contador = 0;

var tempor = null;

function cambio(sen) {
  contador += sen;

  if (contador == lista.length) contador = 0;
  else if (contador < 0) contador = lista.length - 1;

  document.images.centro.src = lista[contador];

  window.status = "Imagen número " + contador;
}

function reset() {
  contador = 0;

  parar();

  document.images.centro.src = lista[0];
}

function parar() {
  if (tempor != null) clearTimeout(tempor);
}

function automat(tiempo, inc = 1) {
  cambio(inc);

  tempor = setTimeout(automat, tiempo, tiempo, inc);
}
