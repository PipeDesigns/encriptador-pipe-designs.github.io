const input = document.querySelector(".input-text");
const mensaje = document.querySelector(".mensaje");
const final = document.querySelector(".final");
const copiarBtn = document.querySelector(".copiar");
copiarBtn.style.display = "none";

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function encriptarBtn(){
    textoEncriptado = encriptar(input.value);
    mensaje.value = textoEncriptado;
    if (textoEncriptado !== ""){
        final.style.backgroundImage = "none";
        copiarBtn.style.display = "";
    }
    input.value = "";
}
function desencriptarBtn(){
    textoDesencriptado = desencriptar(input.value);
    mensaje.value = textoDesencriptado;
    if (textoDesencriptado !== ""){
        final.style.backgroundImage = "none";
        copiarBtn.style.display = "";
    }
    input.value = "";
}
function copiar(){
    mensaje.select();
    document.execCommand('copy');
    mensaje.value = "";
    final.style.backgroundImage = "";
    copiarBtn.style.display = "none";
    document.querySelector(".copiado").style.display = "block"
    document.getElementById("mensajeCopiar").classList.remove("mensajeCopiar");
    void document.getElementById("mensajeCopiar").offsetWidth;
    document.getElementById("mensajeCopiar").classList.add("mensajeCopiar")

}

function encriptar(texto){
    let encripcion = [["e","enter"], ["i","imes"], ["a","ai"],["o","ober"], ["u","ufat"]];
    texto = texto.toLowerCase();
    for(var i = 0; i < encripcion.length; i++){
        if(texto.includes(encripcion[i][0])){
            texto = texto.replaceAll(encripcion[i][0],encripcion[i][1])
        }
    }
    return texto;
}
function desencriptar(texto){
    let desencripcion = [["enter","e"], ["imes","i"], ["ai","a"],["ober","o"], ["ufat","u"]];
    texto = texto.toLowerCase();
    for(var i = 0; i < desencripcion.length; i++){
        if(texto.includes(desencripcion[i][0])){
            texto = texto.replaceAll(desencripcion[i][0],desencripcion[i][1])
        }
    }
    return texto;
}