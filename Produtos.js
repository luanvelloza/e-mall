//essa parte cria a instancia do produto.

class Televicao {
  constructor(id, nome, descricao, price, img, quant) {
    (this.nome = nome),
      (this.id = id),
      (this.descricao = descricao),
      (this.price = price),
      (this.img = img),
      (this.quant = quant);
  }

  saida(entrada) {
    this.quant -= entrada;
  }
}
// essa parte facilia a criaçao de um produto
const historio = []; // essa variavel esta contendo o produto inserido bruto

// essa funçao está empurrando o novo obj para dentro da variavel historico
function IserirALista(id, nome, descricao, price, img, quant) {
  historio.push(new Televicao(id, nome, descricao, price, img, quant));
}

IserirALista(01, "Smart", "Produto e legal, maneiro", 1500, "", 500);
IserirALista(02, "Smart", "Produto e legal, e Caro", 2500, "", 500);
IserirALista(03, "Bosta", "Produto e chupera, e dsds", 25000, "", 500);

// esta parte mapei e retorna as informaçoes inserridas

let recebido = [];

for (let i = 0; i < historio.length; i++) {
  recebido.push(historio[i]);
}

console.log(recebido);

// essa parte esta mapeando a variavel para trazer as informaçoes da variavel
/*let a = recebido.map(function (item, indice) {
  console.log(item, indice);
});*/

// essa esta comentada pois ela esta colocando as informaçoes no html
let a = recebido.map(function (item, indice) {
  return `    
  <div class="subcard">
    <img src="./televisao.webp" />
    <div class="Informativos-card">
    <span>${item.nome}</span>
    <span>${item.descricao}</span>
    <span>${item.price}</span>
    </div>
    <button>Vizualizar</button>
  </div>
    `
}).join("");
document.querySelector(".cards").innerHTML = a;




