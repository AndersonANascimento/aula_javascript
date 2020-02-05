function mensagem() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado!</b>";
}

function redirecionar(element) {
    window.location.href("http://uol.com.br");
}

function trocar(element) {
    element.innerHTML = "Obrigado por passar aqui!";
}

function voltar(element) {
    element.innerHTML = "Passe o mouse aqui!";
}