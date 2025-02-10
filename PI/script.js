document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault();
        
     var nome = document.getElementById('nome').value;
     var email = document.getElementById('email').value;
     var assunto = document.getElementsByName('opcoes').value; // id = getelementbyid e getelementby name
     var mensagem = document.getElementById('mensagem').value;
 
     if (nome === "" || email === "" || assunto === "" || mensagem === ""){
         alert("Por favor, preencha todos os campos.");
     }else{
         alert("Fomulário enviado com sucesso!");
     }
})

});