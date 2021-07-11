var resultado = document.getElementById("resultado");
var x1 = document.getElementById('valor_uno');
var x2 = document.getElementById('valor_dos');

var x3 = document.getElementById("suma");
x3.addEventListener("click", sumatoria);
var x4 = document.getElementById("resta");
x4.addEventListener("click", resta);
var x5 = document.getElementById("multiplicacion");
x5.addEventListener("click", multiplicacion);
var x6 = document.getElementById("division");
x6.addEventListener("click", division);


function sumatoria (xint1,xint2)
{
  var xint1 = parseFloat(x1.value);
  var xint2 = parseFloat(x2.value);
  var total = xint1 + xint2;
  document.getElementById('lbResultado').innerHTML = total;
}

function resta (xint1,xint2)
{
  var xint1 = parseFloat(x1.value);
  var xint2 = parseFloat(x2.value);
  var total = xint1 - xint2;
  document.getElementById('lbResultado').innerHTML = total;
}

function multiplicacion (xint1,xint2)
{
  var xint1 = parseFloat(x1.value);
  var xint2 = parseFloat(x2.value);
  var total = xint1 * xint2;
  document.getElementById('lbResultado').innerHTML = total;
}

function division (xint1,xint2)
{
  var xint1 = parseFloat(x1.value);
  var xint2 = parseFloat(x2.value);
  if (xint2!=0)
  {
    var total = (xint1 / xint2);
    document.getElementById('lbResultado').innerHTML = total;
  }
  else {
    document.getElementById('lbResultado').innerHTML = "Error: División por cero";
  }
}
