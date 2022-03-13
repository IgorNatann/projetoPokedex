/*
------* Funcionalidades Necessárias *-------

1 - Quando cliclar no pokemon da listagem, esconder o cartao do pokémon e mostrar o cartão correspondente ao que foi selecionado na listagem.

2 - Para buscar os elementos dentro do document para verificar qual está sendo chamado, Utilizaremos dois elementos, 1-Listagem 2- Cartão do pokemon.

3 - Armazenar em duas variáveis os elementos para poder trabalhar com os mesmo.

4 - Precisaremos trabalhar com o evento de clique feito pelo úsuario na listagem de pokemons.

 ----------
- remover a classe aberto

*/
















// querySelectorAll é usado para setar quais os atributos queremos pegar dentro da div, nesse caso estamos pegando todos os pokemons que estão na listagem e cards
const listaSelecaoPokemons = document.querySelectorAll('.pokemon');

const pokemonsCard = document.querySelectorAll('.cartao-pokemon');
 
// forEach é um metado usado para iterar uma função, resume uma ação que possívelemte seria mt grande. Aplicando a mesma função para varíos elementos!

// Trabalhando com evento de clique feito pelo usuário na listagem pokemon.
// addEventListener é usado para checar se uma função é chamada, e quando ser chamada executar algo
listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
      
      // fazendo busca de todos os elemtos que contem a class aberto  
      const cartaoPokemonAberto = document.querySelector('.aberto') 
      //Removendo do elemento que está com o seletor aberto. 
      cartaoPokemonAberto.classList.remove('aberto')

      const idPokemonSelecionado = pokemon.attributes.id.value

      const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado

      const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
      cartaoPokemonParaAbrir.classList.add('aberto')

      const pokemonAtivoNaListagem = document.querySelector('.ativo')
      pokemonAtivoNaListagem.classList.remove('ativo')

      const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
      pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})
