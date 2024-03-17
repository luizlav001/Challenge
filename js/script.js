let textoEntrada = document.querySelector(".texto__principal")
let textoSaida = document.querySelector(".mensagem")


function criptografar(texto) {
    const textoCripto =
        texto.replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "orber")
            .replace(/u/g, "ufat")

    return textoCripto
}

function descriptografar(texto) {
    const textoDescripto =
        texto.replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/orber/g, "o")
            .replace(/ufat/g, "u")

    return textoDescripto
}


function btn_cripto() {
    let textinhoFinal = criptografar(textoEntrada.value)
    textoSaida.innerHTML = textinhoFinal
    textoEntrada.value = "";
}

function btn_descripto() {
    let textinhoFinal = descriptografar(textoEntrada.value)
    textoSaida.innerHTML = textinhoFinal
    textoEntrada.value = "";
}

function btn_copiar() {
    navigator.clipboard.writeText(textoSaida.innerHTML)
    textoEntrada.value = "";
    alert('Copiado com sucesso!')
    document.body.removeChild(textoSaida);
}
