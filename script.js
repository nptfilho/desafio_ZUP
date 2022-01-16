const imagem = document.querySelector("#img");
const botao = document.querySelector("button");
const nomeDoPersonagem = document.querySelector("#nome");
const especie = document.querySelector("#especie");
const condicao = document.querySelector("#status");

const imagemDois = document.querySelector("#imgDois");
const nomeDoPersonagemDois = document.querySelector("#nomeDois");
const especieDois = document.querySelector("#especieDois");
const condicaoDois = document.querySelector("#statusDois");

const imagemTres = document.querySelector("#imgTres");
const nomeDoPersonagemTres = document.querySelector("#nomeTres");
const especieTres = document.querySelector("#especieTres");
const condicaoTres = document.querySelector("#statusTres");

gerarValorAleatorio = () => {
  return Math.floor(Math.random() * 671);
};

gerarValorAleatorioDois = () => {
  return Math.floor(Math.random() * 671);
};

gerarValorAleatorioTres = () => {
  return Math.floor(Math.random() * 671);
};

pegarPersonagem = () => {
  let numeroAleatorio = gerarValorAleatorio();
  return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-type": "aplication/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      imagem.src = data.image;
      imagem.alt = data.name;
      nomeDoPersonagem.innerHTML = data.name;
      especie.innerHTML = data.species;
      condicao.innerHTML = data.status;
    });
};

pegarPersonagemDois = () => {
  let numeroAleatorio = gerarValorAleatorioDois();
  return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-type": "aplication/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      imagemDois.src = data.image;
      imagemDois.alt = data.name;
      nomeDoPersonagemDois.innerHTML = data.name;
      especieDois.innerHTML = data.species;
      condicaoDois.innerHTML = data.status;
    });
};

pegarPersonagemTres = () => {
  let numeroAleatorio = gerarValorAleatorioTres();
  return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-type": "aplication/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      imagemTres.src = data.image;
      imagemTres.alt = data.name;
      nomeDoPersonagemTres.innerHTML = data.name;
      especieTres.innerHTML = data.species;
      condicaoTres.innerHTML = data.status;
    });
};

botao.addEventListener("click", function () {
  pegarPersonagem();
});

botao.addEventListener("click", function () {
  pegarPersonagemDois();
});

botao.addEventListener("click", function () {
  pegarPersonagemTres();
});