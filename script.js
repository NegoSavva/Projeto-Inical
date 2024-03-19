var botao = document.getElementById("botao");
botao.addEventListener("click", alertar, false );
var nome = document.getElementById("nome");

var saida = document.getElementById("saida-de-dados");

var email = document.getElementById("email");

var telefone = document.getElementById("telefone");

var cep = document.getElementById("cep");

var logadouro = document.getElementById("logadouro");

var numero = document.getElementById("numero");

var complemento = document.getElementById("complemento");

var bairro = document.getElementById("bairro");

var cidade = document.getElementById("cidade");


function alertar(event){
   // alert("voce clicou no botão !!!" + nome.value);
   saida.innerText = "Nome: " + nome.value + "\n Email" + email.value
   + "\n telefone" + telefone.value + "\n cep" + cep.value 
   + "\n logadouro" + logadouro.value
   + "\n numero" + numero.value
   + "\n complemento" + complemento.value
   + "\n bairro" + bairro.value
   + "\n cidade" + cidade.value
   ; 
}