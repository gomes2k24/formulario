function validarFormulario() {
    var nome = document.getElementById(nome).Value;
    var mensagemErro = document.getElementById("mensagemErro");
}
if (nome ===""){
    mensagemErro.innerHTML = "Por favor, preencha o campo de nome.";
return false
}

return true
    