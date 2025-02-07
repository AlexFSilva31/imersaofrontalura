//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
  const inputAmigo = document.getElementById("amigo");
  const nomeAmigo = inputAmigo.value.trim();

  if (nomeAmigo === "") {
    alert("Por favor, digite um nome válido.");
    return;
  }

  if (amigos.includes(nomeAmigo)) {
    alert("Este nome já foi adicionado.");
    return;
  }

  amigos.push(nomeAmigo);
  inputAmigo.value = ""; // Limpa o campo de entrada
  atualizarListaAmigos();
}

// Função para atualizar a lista de amigos na tela
function atualizarListaAmigos() {
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = ""; // Limpa a lista atual

  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}

// Função para sortear os amigos secretos
function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Adicione pelo menos dois amigos para sortear.");
    return;
  }

  const listaResultado = document.getElementById("resultado");
  listaResultado.innerHTML = ""; // Limpa o resultado anterior

  const amigosSorteados = [...amigos];
  embaralharArray(amigosSorteados);

  for (let i = 0; i < amigosSorteados.length; i++) {
    const amigoAtual = amigosSorteados[i];
    const amigoSorteado = amigosSorteados[(i + 1) % amigosSorteados.length];

    const li = document.createElement("li");
    li.textContent = `${amigoAtual} ➔ ${amigoSorteado}`;
    listaResultado.appendChild(li);
  }
}

// Função para embaralhar um array (algoritmo de Fisher-Yates)
function embaralharArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
