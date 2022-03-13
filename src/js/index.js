/*
------* Funcionalidades Necessárias *-------

1 - Quando cliclar no pokemon da listagem, esconder o cartao do pokémon e mostrar o cartão correspondente ao que foi selecionado na listagem.

2 - Para buscar os elementos dentro do document para verificar qual está sendo chamado, Utilizaremos dois elementos, 1-Listagem 2- Cartão do pokemon.

3 - Armazenar em duas variáveis os elementos para poder trabalhar com os mesmo.

4 - Precisaremos trabalhar com o evento de clique feito pelo úsuario na listagem de pokemons.

 ---------- Passos a fazer

- remover a classe aberto só do cartão que estiver aberto.
- ao clicar em um pokemon da listagem pegamos id desse pokémon para saer qual cartão mostrar.
- remover a classe ativo que marca o pokémon selecionado.
- adicionar a classe ativo no item da lista selecionado.

- Manipular tirando classe e adicionando classe é o metódp mais rapido e eficaz.

*/


// querySelectorAll é  um metodo/função para buscar todos elementos da tela, sendo necessário setar quais elementos queremos buscar. Nesse caso estamos pegando todos elementos contidos dentro de Ul>Li , listagem dos pokemons!

/* const para armazenar qual pokemon está sendo selecionado na listagem. */
const listaSelecaoPokemons = document.querySelectorAll('.pokemon');

/* const para armazenar qual cartao-pokemon esta aparecendo na tela */
const pokemonsCard = document.querySelectorAll('.cartao-pokemon');
 
// forEach é um metado usado para iterar uma função, resume uma ação que possívelemte seria mt grande. Aplicando a mesma função para varíos elementos!
// addEventListener é metodo//função usado para checar se uma função é chamada, e quando ser chamada executar algo.
listaSelecaoPokemons.forEach(pokemon => {
    // Trabalhando com evento de clique feito pelo usuário na listagem pokemon.
    pokemon.addEventListener('click', () => {
      // QuerySelector é usado para fazer busca específica de apenas um elemento.
      // fazendo busca do elemto que contem a class aberto  
      const cartaoPokemonAberto = document.querySelector('.aberto') 

      //Removendo a class Aberto continda no elemento da Li. 
      cartaoPokemonAberto.classList.remove('aberto')

      // ao clicar em um pokémon da listagem, Pegamos o Id do pokemon selecionado para saber qual cartão pokemon mostrar na tela
      const idPokemonSelecionado = pokemon.attributes.id.value

      // Adicionando o Id do cartao pokemon que está selecionado.
      const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado

      const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
      cartaoPokemonParaAbrir.classList.add('aberto')

      // removendo a classe ativo do item anterior
      const pokemonAtivoNaListagem = document.querySelector('.ativo')
      pokemonAtivoNaListagem.classList.remove('ativo')

      // adicionando a classe ativo ao pokemon da listagem selecionado.
      const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
      pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})
