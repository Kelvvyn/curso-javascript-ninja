/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

var arr = [15,12,43,24,45];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

myFunction = function(arr){
  return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

myFunction(arr[2]);
           
/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

myFunction2 = function(arr,x){
  return (arr[x]);

}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var arr2 = [1,"kelvyn",null,undefined,true];


/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

myFunction(arr2);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function book (bookName){
  var allBooks = {
    'Introdução À Programação Com Python': {
      quantidadePaginas: 228,
      autor:"Coutinho Menezes, Nilo Ney",
      editora:"NOVATEC"
    },
    'Javascritp - Aprenda A Programar Utilizando A Linguagem Javascript': {
      quantidadePaginas: 288,
      autor:"Reis, Daniela Borges Dos",
      editora:"Viena"
  },
    'Algoritmos - Lógica Para Desenvolvimento de Programação de Computadores':
    {quantidadePaginas:	336,
      autor:"Manzano,Jose Augusto N. G.; Oliveira,Jayr Figueiredo de",
      editora:"Editora Érika"
    }
  };
 if (!bookName){
 return allBooks;
 }
  return (allBooks[bookName]);
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

book()

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

"O livro Introdução À Programação Com Python tem "  + book('Introdução À Programação Com Python').quantidadePaginas + " páginas!";

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

"O autor do livro Introdução À Programação Com Python é "  + book('Introdução À Programação Com Python').autor;

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

""O livro Introdução À Programação Com Python foi publicado pela editora "  + book('Introdução À Programação Com Python').editora;
