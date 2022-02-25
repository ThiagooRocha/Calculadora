
function numeros(num){
    const resultado = window.document.getElementById("resultado").value
    window.document.getElementById("resultado").value = resultado + num
}
function operações(sinais){
    const resultado = window.document.getElementById("resultado").value
    window.document.getElementById("resultado").value = resultado + sinais
}
function reset(){
    window.document.getElementById("resultado").value = ""
}
function apagar(){
    const apagar = window.document.getElementById("resultado").value;
    document.getElementById("resultado").value = apagar.substring(0, apagar.length -1)
}
function resultado(){
    const resultado = window.document.getElementById("resultado").value
    window.document.getElementById("resultado").value = eval(resultado)
}