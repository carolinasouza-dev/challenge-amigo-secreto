//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação.
//Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeAmigos = [];

window.addEventListener("load", function (event) {
  //listaDeAmigos = [];
  limparCampoNome("amigo");
});

function limparCampoNome(id) {
  document.getElementById(id).value = "";
}

function validarEntradaDeNome(nome) {
  if (nome !== "") {
    return true;
  } else {
    alert("Por favor, insira um nome.");
    return false;
  }
}

function capturarNome(id) {
  return document.getElementById(id).value;
}

function limparListaAmigosDaTagUL() {
  document.getElementById("listaAmigos").innerHTML = "";
}

function AdicionarNomeNaTagLi(lista) {
  let ul = document.getElementById("listaAmigos").innerHTML;

  for (let i = 0; i < lista.length; i++) {
    ul += "<li>" + lista[i] + "</li>";
  }
  document.getElementById("listaAmigos").innerHTML = ul;
}

function adicionarAmigoNaLista(nome, lista) {
  if (!lista.includes(nome)) {
    lista.push(nome);
  }
}

function adicionarAmigo() {
  let idDoInputNome = "amigo";

  limparListaAmigosDaTagUL();

  let nome = capturarNome(idDoInputNome);

  if (validarEntradaDeNome(nome)) {
    adicionarAmigoNaLista(nome, listaDeAmigos);
    AdicionarNomeNaTagLi(listaDeAmigos);
    limparCampoNome(idDoInputNome);
  }
}

function MostrarNomeSorteado(nome) {
  document.getElementById("resultado").innerHTML = "<li>" + nome + "</li>";
}

function sortearAmigo() {
  let nomeSorteado = "";

  if (listaDeAmigos.length > 0) {
    let indexDaListaAleatorio = Math.floor(
      Math.random() * listaDeAmigos.length
    );

    nomeSorteado = listaDeAmigos[indexDaListaAleatorio];
    MostrarNomeSorteado(nomeSorteado);
  }
}
