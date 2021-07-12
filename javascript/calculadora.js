
//Casilla valores
var x1 = document.getElementById('valor_uno');
var x2 = document.getElementById('valor_dos');

//Operacioenes básicas
var x3 = document.getElementById("suma");
x3.addEventListener("click", sumatoria);
var x4 = document.getElementById("resta");
x4.addEventListener("click", resta);
var x5 = document.getElementById("multiplicacion");
x5.addEventListener("click", multiplicacion);
var x6 = document.getElementById("division");
x6.addEventListener("click", division);

//function Suma
function sumatoria (xint1,xint2)
{
  var xint1 = parseFloat(x1.value);
  var xint2 = parseFloat(x2.value);
  var total = xint1 + xint2;
  document.getElementById('labelResultadoBasico').innerHTML = total;
}

//Fuction Resta
function resta (xint1,xint2)
{
  var xint1 = parseFloat(x1.value);
  var xint2 = parseFloat(x2.value);
  var total = xint1 - xint2;
  document.getElementById('labelResultadoBasico').innerHTML = total;
}

//Funcion Multiplicacion
function multiplicacion (xint1,xint2)
{
  var xint1 = parseFloat(x1.value);
  var xint2 = parseFloat(x2.value);
  var total = xint1 * xint2;
  document.getElementById('labelResultadoBasico').innerHTML = total;
}

//Función Division
function division (xint1,xint2)
{
  var xint1 = parseFloat(x1.value);
  var xint2 = parseFloat(x2.value);
  if (xint2!=0)
  {
    var total = (xint1 / xint2);
    document.getElementById('labelResultadoBasico').innerHTML = total;
  }
  else {
    document.getElementById('labelResultadoBasico').innerHTML = "Error: División por cero";
  }
}

//Calculo del cuadrado

function perimetroCuadrado (lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado
}


//Calculo del triangulo

function perimetroTriangulo (lado1, lado2, base){
  return Number(lado1) + Number(lado2) + Number(base);
}


function areaTriangulo (base, altura) {
  return (base * altura)/2;
}


//Calculo del circulo

function diametroCirculo(radio) {
  return radio * 2;
}

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * Math.PI;
}

function areaCirculo(radio) {
  return (radio * radio) * Math.PI;
}

//Funciones para botones en HTML
//Cuadrado
function calcularPerimetroCuadrado(){
  const input = document.getElementById('inputCuadrado');
  const value = input.value;
  const perimetro = perimetroCuadrado(value);
  document.getElementById('labelResultadoCuadrado').innerHTML = perimetro + " cm";
}

function calcularAreaCuadrado(){
  const input = document.getElementById('inputCuadrado');
  const value = input.value;
  const area = areaCuadrado(value);
  document.getElementById('labelResultadoCuadrado').innerHTML = area + " cm2";
}

//Triangulo
function calcularPerimetroTriangulo(){
  const input1 = document.getElementById('inputTrianguloLado1');
  const input2 = document.getElementById('inputTrianguloLado2');
  const inputb = document.getElementById('inputTrianguloBase');
  const value1 = input1.value;
  const value2 = input2.value;
  const valueb = inputb.value;
  const perimetro = perimetroTriangulo(value1,value2,valueb);
  document.getElementById('labelResultadoTriangulo').innerHTML = perimetro + " cm";
}

function calcularAreaTriangulo(){
  const input1 = document.getElementById('inputTrianguloLado1');
  const input2 = document.getElementById('inputTrianguloLado2');
  const inputb = document.getElementById('inputTrianguloBase');
  const value1 = input1.value;
  const value2 = input2.value;
  const valueb = inputb.value;
  const altura = Math.sqrt((value1*value2)-((valueb/2)*(valueb/2)));
  const area = areaTriangulo(valueb,altura);
  document.getElementById('labelResultadoTriangulo').innerHTML = area.toFixed(3) + " cm2";
}

//Circulo
function calcularPerimetroCirculo(){
  const input = document.getElementById('inputCirculo');
  const value = input.value;
  const perimetro = perimetroCirculo(value);
  document.getElementById('labelResultadoCirculo').innerHTML = perimetro + " cm";
}

function calcularAreaCirculo(){
  const input = document.getElementById('inputCirculo');
  const value = input.value;
  const area = areaCirculo(value);
  document.getElementById('labelResultadoCirculo').innerHTML = area.toFixed(3) + " cm2";
}