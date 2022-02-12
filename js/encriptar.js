
document.getElementById("texto_one").addEventListener("input", (e) => {
    let value = e.target.value;
    e.target.value = value.replace(/[^a-z&ñ]/g, "");



});
var botonEncriptar = document.querySelector("#encriptar-texto");
botonEncriptar.addEventListener("click", function (event) {

    event.preventDefault();
    const texto = document.getElementById('texto_one').value;
    document.getElementById("texto_one").value = '';
    mtdEncriptar(texto);

});


var botonDesencriptar = document.querySelector("#desencriptar-texto");
botonDesencriptar.addEventListener("click", function (event) {

    event.preventDefault();
    const texto = document.getElementById('texto_one').value;

    mtdDesencriptar(texto);

});
var botonCopiar = document.querySelector("#copiar-texto");
botonCopiar.addEventListener("click", function (event) {
    event.preventDefault();
    mtdCopiar();
    document.getElementById("texto_two").value = '';

});
/*
Llaves de encriptación
e: enter
i: imes
a: ai
o: ober
u: ufat

Solo minúsculas, sin acentos

*/
document.getElementById("texto_two").addEventListener("input", (e) => {
    let value = e.target.value;
    e.target.value = value.replace(/[^a-z&ñ]/g, "");



});
function mtdEncriptar(texto) {


    const encriptado = texto.replace(/e/gi, 'enter').replace(/i/gi, 'imes').replace(/a/gi, 'ai').replace(/o/gi, 'ober').replace(/u/gi, 'ufat');
    document.getElementById("texto_two").value = encriptado

}
function mtdDesencriptar(texto) {


    const desencriptado = texto.replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ai/gi, 'a').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
    document.getElementById("texto_two").value = desencriptado
}

function mtdCopiar() {

    var texto = document.getElementById('texto_two');
    texto.select();
    document.execCommand('copy');
}
