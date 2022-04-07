class Categoria{
    constructor(nomeDaCategoria){
       this._nomeDaCategoria = nomeDaCategoria,
       this._categoria = [];
    }

    adicionarProduto(produto){
        this._categoria.push(produto); 
    }
}
