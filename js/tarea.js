//triangulo
let boton = document.getElementById("boton")
let boton2 = document.getElementById("respuesta")

boton.addEventListener("click", num1)
function num1(){
    let var1 = parseFloat(document.getElementById("var1").value)
    let var2 = parseFloat(document.getElementById("var2").value)
    let area = var1*var2/2

    boton2.innerHTML=`El erea del triangulo es: ${area} Cm`
}

//paralelogramo
let ope = document.getElementById("hallar")
let res = document.getElementById("total")

ope.addEventListener("click", problema)
function problema(){
    let num1 = parseFloat(document.getElementById("num1").value)
    let num2 = parseFloat(document.getElementById("num2").value)
    let area = num1*num2

    res.innerHTML=`El erea del Paralelogramo es: ${area} Cm`
}

//rectangulo

let rectangulo = document.getElementById("resrectangulo")
let totalrectangulo = document.getElementById("resultado")

rectangulo.addEventListener("click", solucion)
function solucion(){
    let dato1 = parseFloat(document.getElementById("dato1").value)
    let dato2 = parseFloat(document.getElementById("dato2").value)
    let area = dato1*dato2

    totalrectangulo.innerHTML=`El erea del Rectangulo es: ${area} Cm`
}

//cuadrado

let uno = document.getElementById("rescuadrado")
let dos = document.getElementById("resultadocua")

uno.addEventListener("click", solucioncua)
function solucioncua(){
    let datotwo = parseFloat(document.getElementById("dos").value)
    let area = Math.pow(datotwo, 2)

    dos.innerHTML=`El erea del Cuadrado es: ${area} Cm`
}

//rombo

let rombo = document.getElementById("resrombo")
let totalrombo = document.getElementById("resrombito")

rombo.addEventListener("click", solurombo)
function solurombo(){
    let tres = parseFloat(document.getElementById("variable1").value)
    let cuatro = parseFloat(document.getElementById("variable2").value)
    let area = tres*cuatro/2

    totalrombo.innerHTML=`El erea del Rombo es: ${area} Cm`
}

//cometa

let cometa = document.getElementById("rescometa")
let totalcometa = document.getElementById("rescometita")

cometa.addEventListener("click", solucometa)
function solucometa(){
    let cinco = parseFloat(document.getElementById("variable3").value)
    let seis = parseFloat(document.getElementById("variable4").value)
    let area = cinco*seis/2

    totalcometa.innerHTML=`El erea del Cometa es: ${area} Cm`
}

//trapecio

let trapecio = document.getElementById("restrapecio")
let totaltrapecio = document.getElementById("restrape")

trapecio.addEventListener("click", solutrapecio)
function solutrapecio(){
    let siete = parseFloat(document.getElementById("variable5").value)
    let ocho = parseFloat(document.getElementById("variable6").value)
    let nueve = parseFloat(document.getElementById("variable7").value)
    let area = (siete+ocho)*nueve/2

    totaltrapecio.innerHTML=`El erea del Trapecio es: ${area} Cm`
}

//circulo

let circulo = document.getElementById("rescirculo")
let totalcirculo = document.getElementById("rescirculito")

circulo.addEventListener("click", solucirculo)
function solucirculo(){
    let diez = parseFloat(document.getElementById("variable8").value)

    let area = Math.PI*Math.pow(diez,2)

    totalcirculo.innerHTML=`El erea del Circulo es: ${area} Cm`
}


