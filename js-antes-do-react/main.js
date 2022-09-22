// nullish coalescing operator

//const idade = 0;

//document.body.innerHTML = 'Sua idade é: ' + (idade ?? 'Valor não informado'); 

// Objetos

const user = {
  name: 'diego',
  idade: 27,
  address: {
    street: 'Rua teste',
    number: 176,
  },
};
// Retornar todas as chaves dos objetos
//document.body.innerHTML = Object.keys(user)

// Retornar todos os items dos objetos / JSON.stringify serve para mostrar os items dentro do address, sem ele não conseguiria printar certo
//document.body.innerHTML = JSON.stringify(Object.values(user))

// retorna a chave e o valor do objeto, mais usado
//document.body.innerHTML = JSON.stringify(Object.entries(user))

// Desestruturação

//const { address, name } = user
//document.body.innerText = JSON.stringify({ address, name }) 

// Desestruturação/ renomear variavél e add uma nova

//const { address, idade: age, nickname = 'Vinicius' } = user
//document.body.innerText = JSON.stringify({ address, age, nickname }) 

// Desestruturação/ com functions, posso fazer todas essas coisas anteriores dentro do parametro da function

//function mostrarIdade({idade}){
//  return idade;
//}
//document.body.innerText = mostrarIdade(user)

// Rest operator/ retorna todas as propriedades dos objetos, menos a anteiror que você escreveu, como no exemplo o name embaixo

//const {name, ...rest} = user
//document.body.innerHTML = JSON.stringify({name, rest})

// Rest operator também funciona para array, em vez de desestruturar com {} em objetos e em arrays é com []/ para pular um item em array, é só deixar o espaço em branco como deixei o segundo.
//const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//const [primeiro,  , terceiro, ...rest] = array;
//document.body.innerHTML = JSON.stringify({primeiro, terceiro, rest})








