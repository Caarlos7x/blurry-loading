// Const que irá buscar o LOADING TEXT
const loadText = document.querySelector('.loading-text')

//CONST que irá acessar o BG (BACKGORUND)

const bg = document.querySelector('.bg')

// Let pois sempre estará mudando o valor do LOAD
let load = 0

// Setar a porcentagem do blur
let int = setInterval(blurring, 30)


// Função que irá fazer o blur funcionar

// Função com o nome blurring executa ela com () abre chaves para adicionar as condiçoes
function blurring() {
  load++

  if (load >99) {
    clearInterval(int)
  }

  // Aqui irá pegar o valor que é sempre flutuante, como é um valor automático coloca-se `${}%` que pega de forma automática
  loadText.innerText = `${load}%`
  loadText.style.opacity = scale(load, 0, 100, 1, 0)
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}